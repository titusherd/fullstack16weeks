const express = require('express');
const handleRegister = require('../controllers/register.controller');
const auth = express() // Create a new router

auth.get('/login', (req, res) => {
    res.send('Login')
});

auth.post('/register', handleRegister);

module.exports = auth;