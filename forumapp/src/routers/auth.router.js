const express = require('express');
const handleRegister = require('../controllers/register.controller');
const { handleLoginSession } = require('../controllers/login.controller');
const auth = express() // Create a new router

auth.post('/login', handleLoginSession);

auth.post('/register', handleRegister);

module.exports = auth;