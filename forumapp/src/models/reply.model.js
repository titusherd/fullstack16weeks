const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    comment: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    threadId: { type: Schema.Types.ObjectId, ref: 'Thread' }
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;