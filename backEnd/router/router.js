const express = require('express');
require('../db/dbConnect');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();
const authenticate = require('../Authentication/Authentication');


router.get("/main", authenticate, (req, res) =>{
    console.log('hello')
    res.send(req.userDetail);
})

router.post("/register", async(req, res) =>{
        const {name, email, work, phone, password, cpassword} = req.body;

        if (!name || !email || !work || !phone || !password || !cpassword) {
            return res.status(422).json({error: "plz input the field properly"});
        }
        try {
            const userExist = await User.findOne({email: email});
        if(userExist) {
            return res.status(422).json({error: "Email already exist"});
        }
        if (password !== cpassword) {
            res.status(422).json({error: "please enter a same password"});
        }else {
            const user = User({name, email, work, phone, password, cpassword});
            await user.save();
            res.status(201).json({message: "create success full"});
        }
        } catch (error) {
            console.log(error);
        }
});

router.post("/login", async(req, res) =>{
    const {email,password} = req.body;

    if (!email || !password) {
        return res.status(422).json({error: "plz input the field properly"});   
    }
    try {
        const userExist = await User.findOne({email: email});
        if (userExist) {
            const isMatch = await bcrypt.compare(password, userExist.password);

            if (!isMatch) {
                res.status(400).json({message: "login fail"});
            } else {
                const token = await userExist.generateAuthToken();
                res.cookie("jwtToken", token, {
                    expires: new Date(Date.now() + 300000)
                });
                res.status(200).json({message: "login success"});
            }
        } else {
            return res.status(422).json({error: "user is not exits"});
            
        }
    } catch (error) {
        res.status(500).json({error: "internal server error"});
    }
})

router.get("/about", authenticate, (req, res) =>{
    res.send(req.userDetail);
})

router.get("/contact", authenticate, (req, res) =>{
    res.send(req.userDetail);
})

router.post("/contact", async(req, res) =>{
    try {
        const { name, email, phone, message} = req.body;
        if (!name || !email || !phone || !message) {
            console.log('login filled error');
            return res.json({error: "plz field full fill"});
        }
        const userDetail = await User.findOne({email: email});
        if (!userDetail) {
            console.log('user is not exits');
            return res.status(401).json({error: "user not found"});
        }
        const userMessage = await userDetail.sendMessage(name, email, phone, message);
        await userDetail.save();
        res.status(201).json({message: "message send success"});

    } catch (error) {
      console.log(error);  
      alert('something is wrong');
    }
})

router.get("/login", (req, res) =>{
    res.send("hello login page");
})

router.get("/logout", (req, res) =>{
    res.clearCookie("jwtToken", {path: '/'});
    res.status(200).send("user logout");
})


module.exports = router;