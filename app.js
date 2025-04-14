// we must be setup env value Before starting sever and app.

//Requiring express app
const express = require("express") ;
const app = express ();

//Requireing npm package
const cookieParser = require("cookie-parser") ;
const path = require("path") ;
const expressSession = require("express-session") ;
const flash = require("connect-flash");

//It will help to get the all enviormental veriavle
require("dotenv").config();

//Requiring Database.
const userModel = require("./models/user-model");
const productModel = require("./models/product-model");
const db = require("./config/mongoose-connection");

//Requiring Routes.
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");

// Setup Middlewares
app.set("view engine", "ejs");
app. use(express.json());
app. use(cookieParser());
app. use(express.urlencoded({ extended: true}));
app. use(express.static(path.join(__dirname, "public")));
app. use(
    expressSession ({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());

// Setup routes
app.use("/", indexRouter);
app. use("/owners", ownersRouter);
app. use("/users", usersRouter);
app. use("/products", productsRouter);

app.listen(3000);
