const express = require('express');
const http = require('http');
const app = express();

const _PORT = process.env.PORT || 80;

app.listen(_PORT, () => {
    console.log(`Server is listening on port ${_PORT}`);
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });