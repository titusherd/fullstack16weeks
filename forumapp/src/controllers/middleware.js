const Session = require('../models/session.model');

const middleware = async (req, res, next) => {
    const sessionId = req.cookies?.sessionId;

    if (!sessionId) {
        return res.status(401).send("Unauthorized");
    }

    const session = await Session.findOne({ _id: sessionId });

    if (!session) {
        return res.status(401).send("Unauthorized");
    }

    next();
};

module.exports = middleware;