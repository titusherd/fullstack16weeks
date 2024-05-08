const express = require('express');
const threadRouter = express();

threadRouter.get('/thread', (req, res) => {
    res.send("Thread");
});

module.exports = threadRouter;