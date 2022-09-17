const express = require('express');
const multer  = require('multer');

const {getUser, signIn, signUp, uploadProfilePicture} = require('../controllers/auth');
const { requireSignin } = require('../middleware/auth');
const { isAuth } = require('../middleware/isAuth');

const route = express.Router();


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let uploads = multer({ storage, fileFilter });



route.get("/me", requireSignin, isAuth, getUser);
route.post("/signin", signIn);
route.post("/signup", signUp);
route.post("/update-profile",requireSignin, isAuth, uploads.single('profile') ,uploadProfilePicture);


module.exports = route;