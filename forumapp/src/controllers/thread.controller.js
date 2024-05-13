const Thread = require('../models/thread.model');

const getThreads = async (req, res) => {
    const userId = req.params.id;
    // res.send(userId);
    const threads = await Thread.find().populate('userId');

    res.status(200).json({ data: threads });
}

const createThread = async (req, res) => {
    const { title, content } = req.body;
    const newThread = new Thread({
        title,
        content,
    });

    const thread = await newThread.save();

    res.status(201).json({ message: "Thread created successfully", data: thread });
}

module.exports = { createThread, getThreads };
