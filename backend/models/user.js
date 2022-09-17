const mongoose = require('mongoose');

const {Schema} = mongoose;


const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar: Buffer,
},{timestamps:true});


module.exports = mongoose.model("User", UserSchema);