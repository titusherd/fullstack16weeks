require('dotenv').config();
const express = require('express');
const Session = require('../models/session.model');
const { createThread, getThreads } = require('../controllers/thread.controller');
const threadRouter = express();
// const jwt = require('jsonwebtoken');

threadRouter.get('/thread/:id', getThreads);
threadRouter.post('/thread', createThread);

module.exports = threadRouter;