require('dotenv').config();
const User = require('../models/user.model');
const Session = require('../models/session.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLoginJWT = async (req, res) => {
    const { email, password } = req.body;

    // 1. Check if the user exists
    const user = await User.findOne({ email });
    if (!user) res.status(400).json({ message: "User not found" });

    // 2. Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) res.status(400).json({ message: "Invalid password" });
    // else {
    //     return res.status(200).json({ message: "Password is valid" });
    // }

    // 3. create payload 
    const payload = {
        id: user._id,
        email: user.email
    };

    // // 4. Generate a token
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    // // 5. Set the token in a cookie
    res.cookie("token", token).send("Logged in successfully");
};

const handleLoginSession = async (req, res) => {
    const { email, password } = req.body;

    // 1. Check if the user exists
    const user = await User.findOne({ email });
    if (!user) res.status(400).json({ message: "User not found" });

    // 2. Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) res.status(400).json({ message: "Invalid password" });

    // 3. Insert session into DB
    const newSession = new Session({ userId: user._id });
    const session = await newSession.save();

    // 5. Send session id in a cookie
    res.cookie("sessionId", session._id).send("Logged in successfully");
};


module.exports = { handleLoginJWT, handleLoginSession };