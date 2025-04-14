const express = require("express");
const router = express.Router();

//Requireing databse
let ownerModel = require("../models/owner-model");

//Requireing npm packages
const bcrypt = require('bcrypt');
const isLoggedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user-model");

//Creating Owner Routes
//Before create owner make sure NODE_ENV should be development
//for that command is set NODE_ENV=development
// console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === "development"){
    router.post("/create", async (req, res) =>{
    let owners = await ownerModel.find();
    if(owners.length > 0){
        return res.status(503).send("You cant create owner");
    }
    //Destructing
    let {fullname, email, password} = req.body;
    
    //Encrypting password
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password ,salt ,async (err,hash)=>{
            let createdOwner = await ownerMode.create({
                fullname:fullname,
                email:email,
                password:hash
            });

            //Creating Owner
            res.send(createdOwner).status(201);
        });
    });
    });
};



//Admin routes
router.get("/admin", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({email:req.user.email});
    let success = req.flash("success");
    res.render("createproducts.ejs",{success,user,currentPage:"Admin"})
});

// router.post("/admin",isLoggedIn,(req,res)=>{
//   res.render("createproducts.ejs")
// })

module.exports = router;