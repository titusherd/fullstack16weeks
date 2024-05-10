const express = require('express');
const { handleLoginSession } = require('../controllers/login.controller');
const handleRegister = require('../controllers/register.controller');
const handleLogout = require('../controllers/logout.controller');
const auth = express() // Create a new router

auth.post('/login', handleLoginSession);

auth.post('/register', handleRegister);

auth.post('/logout', handleLogout);

module.exports = auth;