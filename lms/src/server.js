const express = require('express')
const app = express()
const port = 8000
require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})