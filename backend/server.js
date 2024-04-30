const express = require('express');
const app = express();
const port = 8000;

// port
app.listen(port);

// routing
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
