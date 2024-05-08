require('dotenv').config();
const express = require('express');
const Session = require('../models/session.model');
const threadRouter = express();
// const jwt = require('jsonwebtoken');

threadRouter.get('/thread', async (req, res) => {
    res.send("thread");
});

// threadRouter.get('/thread', (req, res) => {
//     const token = req.cookies.token;
//     // res.send(token);

//     try {
//         const payload = jwt.verify(token, process.env.JWT_SECRET, {expiresIn: '7d'});
//         // res.send(payload);
//         console.log(payload);
//         res.send("Ini data seluruh thread");
//     } catch {
//         res.status(401).send("Invalid token");
//     }
// });


// threadRouter.get('/thread', async (req, res) => {
//     // res.send("Ini data seluruh thread");

//     const sessionId = req.cookies?.sessionId;

//     if (!sessionId) {
//         // return res.status(401).send("Unauthorized");
//         res.send("Unauthorized")
//     }

//     const session = await Session.findOne({ _id: sessionId });

//     if (!session) {
//         // return res.status(401).send("Unauthorized");
//         res.send("Unauthorized")
//     }

//     res.send("THREADS!!!!!!!")
// });

module.exports = threadRouter;