const express = require ('express');
const app = express();
const path = require('path')

var port = 3000;

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/index.html'))
});

app.listen(port);

console.log('connected to port: ' + port);

// const http = require('http');

// var server = http.createServer((req, res) => {
//     res.write('Hello World');
//     res.end();
// });

// server.listen(port);


