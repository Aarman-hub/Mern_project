const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.isAuth = async (req, res, next) =>{
    if(req.headers && req.headers.authorization){ 
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWTSECRET);

            const user = await User.findOne(decode.userId);

            if(!user){
                return res.status(400).json({success:false, message:"Unauthorized access!"});
            }
            req.user = user;
            next();
        } catch (err) {
            if(err.name === 'JsonwebTokenError'){
                return res.json({success: false, message:"Unauthorized access"});
                
            }
            if(err.name === 'TokenExpiredError'){
                return res.json({success: false, message:"Token Expired"});
            }
        res.json({success:false, message:"Internal server error"})
        }       
    }else{
        res.json({success: false, message:"Unauthorized access"})
    }
}