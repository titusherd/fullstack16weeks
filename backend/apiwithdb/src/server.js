const express = require('express');
const mongoose = require('mongoose');
const app = express();

const schema = mongoose.Schema({})


mongoose.connect("mongodb+srv://titusherdiawan:RCEDXSOQI0XHfkjW@cluster0.ork0qga.mongodb.net/")

app.listen(8000)
app.get('/', (req, res) => {
    res.send('Hello World!')
});




