const express = require('express');
const router = express.Router();
const User = require('../models/mongodb');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.use(cookieParser());


function verifyToken(req, res, next){
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(403).json({ message: "No token provided !!"});

    jwt.verify(token, "helloworld", (err, decoded) => {
        if(err) return res.status(401).json({ message: "Invalid token !!"});

        req.user = decoded;
        next();
    });
}


router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "You are not Authorised !!"})
});


router.post('/signup', async(req, res) => {
    const {username , email , password, confirm} = req.body;

    if(password !== confirm){
        return res.status(400).json({ message: "Password do not match !!"});
    }


    try{
        const existuser  = await User.findOne({email});

        if(existuser){
            return res.status(400).json({ message: "User already exists !!"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let user = new User({
            username, email, password: hashedPassword
        });
       
        await user.save();

        res.status(201).json({ message: "User created successfully !!", user });

    }catch(error){
        console.error("Signup Error:", error);
        
        res.status(500).json({ 
            message: "Internal server error !!"
        });
    }
});


router.post('/login', async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(404).json({ message: "All fields are required!!"});
    }

    try{
        const existuser = await User.findOne({email});
        if(!existuser){
            return res.status(404).json({ message: "You are required to sign up !!"});
        }

        const ismatch = await bcrypt.compare(password, existuser.password);
        if(!ismatch){
            return res.status(404).json({message: "Passwords do not match"});
        }

        const token = jwt.sign(
            { id: existuser.id, email: existuser.email}, "helloworld" , {expiresIn: '1h' }  
        )

        return res.status(200).json({
            message: "Login successfully", token, existuser
        });

    }catch(error){
        return res.status(500).json({ message: "Internal Server Error !!"});
    }
    
});


router.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });


    res.status(201).json({ ok:true, message: "Logout Sucessfully"});
});



module.exports = router;

