const User = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const sharp = require('sharp');


exports.getUser = async (req, res) =>{
    try {
        const user = await User.findById(req.user._id);
        res.json({user});
    } catch (err) {
        
    }
}

exports.signUp = async (req, res) =>{

    const {email, username, password} = req.body;

    const schema = Joi.object({
        email: Joi.string().min(3).max(200).email().required(),
        username: Joi.string().min(3).max(200).required(),
        password: Joi.string().min(3).max(200).required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    

    try {

        const existEmail = await User.findOne({email});
        if(existEmail) return res.status(401).json({msg:"Email already taken"});

        let user = new User({email, username, password});

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();


        payload = {
            user:{
                id:user.id,
                email: user.email,
                username: user.username
            }
        };

        const token = jwt.sign(payload, process.env.JWTSECRET, {expiresIn:'24h'});

        res.json({token})
        // return res.status(200).json({msg: "User created successfully"});

    } catch (err) {
        return res.status(500).json({error:"Server error!"})
    }
}
exports.signIn = async (req, res) =>{

    const {email, password} = req.body;

    const schema = Joi.object({
        email: Joi.string().min(3).max(200).email().required(),
        password: Joi.string().min(3).max(200).required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    
    try {
        let user = await User.findOne({email});
        if(!user) return res.status(401).json({msg:"User not found"})

        const validatePassword = await bcrypt.compare(password, user.password);

        if(!validatePassword) return res.status(401).json({msg:"Password not match!"});

        const token =  jwt.sign({
            _id: user._id,
            username: user.username,
            email: user.email
        }, process.env.JWTSECRET, {expiresIn:'7d'});

        res.json({token})

    } catch (err) {
        return res.status(500).send(error.message);
    }
}


exports.uploadProfilePicture = async (req, res) =>{
    
    const {user} = req;

    if(!user) return res.status(401).json({success: false, message: "Unauthorized access!"});

    try {
        const profileBuffter = req.file.buffer;

        const {height, width} = await sharp(profileBuffter).metadata();

        const avatar = await sharp(profileBuffter).resize(Math.round(width * 0.5), Math.round(height * 0.5)).toBuffer();

        await User.findByIdAndUpdate(user._id, {avatar});
        res.status(201).json({success:true, message:"Profiel update successfully"})
    } catch (error) {
        console.log(error);
        // res.status(201).json({success:true, message:"Profiel update successfully"});
    }

}   
