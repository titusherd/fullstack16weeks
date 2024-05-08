const express = require('express')
const mongoose = require('mongoose');
const app = express()
const authRouter = require('./routers/auth.router'); // Import the auth router
const replyRouter = require('./routers/reply.router');
const threadRouter = require('./routers/thread.router');

const port = 8000

mongoose.connect('mongodb+srv://titus17001:UfEf5LkwPuy9sVSO@cluster0.ex445su.mongodb.net/'); // Connect to the database

app.use(express.json()); // Make sure it comes back as json 

app.use(authRouter); // Use the auth router
app.use(replyRouter);
app.use(threadRouter);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

