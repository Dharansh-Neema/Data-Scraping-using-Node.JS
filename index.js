const express = require("express");
const app = express();
//Regulare middleware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
let PORT = 8080;

//Configuring Routes
const homeRoute = require("./routes/home");
app.use("/", homeRoute);

//Setting up PORT
app.listen(PORT, () => {
  console.log(`Connected to server at PORT: ${PORT}`);
});
