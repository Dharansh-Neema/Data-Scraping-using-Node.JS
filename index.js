const express = require("express");
const app = express();

//configuring .env
require("dotenv").config();
//Regulare middleware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
let PORT = 8080;
//configuring DataBase
const dbconfig = require("./config/dbconfig");
dbconfig();
//Configuring Routes
const user = require("./routes/user");
app.use("/", user);

//Setting up PORT
app.listen(PORT, () => {
  console.log(`Connected to server at PORT: ${PORT}`);
});
