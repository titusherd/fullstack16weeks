const Session = require("../models/session.model");

const handleLogout = async (req, res) => {
    const sessionId = req.cookies?.sessionId;

    await Session.findByIdAndDelete(sessionId)

    return res.send("Logged out successfully")
}

module.exports = handleLogout;