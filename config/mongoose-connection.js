const mongoose = require('mongoose');
const config = require("config");
const dbgr = require("debug")("development:mongoose");
//Runing command for debuger
//set DEBUG=development:* delvelopment is a varila whichis consideer as a .env veriable
//Other wise you can try this set process.env.NODE_ENV=development
mongoose
.connect(`${config.get("MONGODB_URI")}`)
.then ( function ( ) {
    dbgr("DB Connected") ;
})
.catch (function (err) {
    dbgr("DB Connection Error",err);
})

module.exports = mongoose.connection;