const express = require('express')
const app = express()
const port = 8000
const { Note } = require("./models");
const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb+srv://titusherd:OJ2vX6nXHI17To0X@cluster0.kybpbka.mongodb.net/')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/notes', async (req, res) => {
    // res.send(req.body.title)
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    });

    const savedNote = await note.save();

    res.send(savedNote);
});

app.get("/notes/:id", async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.send(note);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

