require('dotenv').config({path: './config.env'});
const express = require('express');
require('../db/dbConnect');
const User = require('../models/user');
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// route of app
const router = require('../router/router');
app.use(router);





app.listen(port, (req, res)=>{
    console.log(`start...${port}`);
});