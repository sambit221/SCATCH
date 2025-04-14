// Requireing package
const jwt = require("jsonwebtoken");

//Requireing models
const userModel = require("../models/user-model");

require('dotenv').config();

module. exports = async function (req, res, next) {
    if (!req.cookies.token) {
        req.flash({"error": 'You need to login first'});
        return res.status(401).redirect("/");
    }
    // console.log("token found");
    try {
        let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let user = await userModel
        .findOne({ email: decode.email })
        .select ("-password") ;
    req.user = user;
    next () ;
    }catch(err){
        req.flash = ("error", "Something went wrong.");
        res.redirect("/");
    }
};