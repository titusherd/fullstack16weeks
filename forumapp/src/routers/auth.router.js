const express = require('express');
const handleRegister = require('../controllers/register.controller');
const handleLogin = require('../controllers/login.controller');
const auth = express() // Create a new router

auth.post('/login', handleLogin); 

auth.post('/register', handleRegister);

module.exports = auth;