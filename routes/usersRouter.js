const express = require("express");
const router = express.Router();

//Requireing utilites
const {
    registerUser,
    loginUser,
    logout,
    user,
    userupload,
} = require("../controllers/authController");
const isloggedin = require("../middlewares/isLoggedIn");
const upload = require("../config/multer-config");

//register routs
router.post("/register", registerUser);

//User routes
router.get("/profile", isloggedin, user);

//User Upload images
router.post("/userupload", upload.single("image"), isloggedin, userupload);

//Login routs
router.post("/login", loginUser);

//Logout routs
router.get("/logout", isloggedin, logout);

module.exports = router;