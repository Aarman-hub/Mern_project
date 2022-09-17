const {expressjwt:jwt} = require('express-jwt');

exports.requireSignin = jwt({
    secret: process.env.JWTSECRET,
    algorithms:["HS256"]
});