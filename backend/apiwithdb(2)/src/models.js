const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// blueprint / schema
const noteSchema = new Schema({
    title: String,
    content: String
});

// model
const Note = mongoose.model('Note', noteSchema);

module.exports = { Note };