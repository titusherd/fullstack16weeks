require('dotenv').config();
const express = require('express');
const threadRouter = express();
const jwt = require('jsonwebtoken');

threadRouter.get('/thread', (req, res) => {
    const token = req.cookies.token;
    // res.send(token);

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET, {expiresIn: '7d'});
        // res.send(payload);
        console.log(payload);
        res.send("Ini data seluruh thread");
    } catch {
        res.status(401).send("Invalid token");
    }
});

module.exports = threadRouter;