const express = require('express')
const authRouter = express() // Create a new router

authRouter.get('/login', (req, res) => {
    res.send('Login')
});

authRouter.get('/register', (req, res) => {
    res.send('Register')
});

module.exports = authRouter;