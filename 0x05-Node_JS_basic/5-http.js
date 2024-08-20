#!/usr/bin/node
// 5-http.js

const http = require('http');
const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.write('This is the list of our students\n');

        const databasePath = process.argv[2];

        try {
            const result = await countStudents(databasePath);
            res.end(result);
        } catch (error) {
            res.end(error.message);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

module.exports = app;
