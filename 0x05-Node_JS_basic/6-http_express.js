#!/usr/bin/node
// 6-http_express.js

const express = require('express');

const app = express();

// Define the root route
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

module.exports = app;
