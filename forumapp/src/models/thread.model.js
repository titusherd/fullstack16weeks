const mongoose = require('mongoose');

const thread = new mongoose.Schema({
    title: String,
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Thread = mongoose.model('Thread', thread);

module.exports = Thread;