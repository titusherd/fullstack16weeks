const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const handleRegister = async (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12)

    console.log(hashedPassword);

    const newUser = new User({
        email,
        username,
        password: hashedPassword
    });

    const user = await newUser.save();

    res.status(201).json({ message: "User registered successfully", data: user })
};

module.exports = handleRegister;