const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const Authentication = async(req, res, next) =>{
    try {
        const token = req.cookies.jwtToken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const userDetail = await User.findOne({_id: verifyToken._id, "tokens.token": token});
        if (!userDetail) {
            throw new Error('User not found');
        }
        req.token = token;
        req.userDetail = userDetail;
        req.userId = userDetail._id;
        next();
    } catch (error) {
        res.status(401).send('Unauthorized: No token provide');
        console.log(error);
    }

}

module.exports = Authentication;