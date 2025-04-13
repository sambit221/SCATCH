const mongoose = require( 'mongoose' ) ;
mongoose
.connect("mongodb+srv://Sambit221:Neon2221@clusternew.1yozqyo.mongodb.net/")
.then ( function ( ) {
    console. log("connected") ;
})
.catch (function (err) {
    console. log (err);
})

module. exports = mongoose. connection;