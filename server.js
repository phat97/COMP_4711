const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express();

app.use(express.static("static"));

const HTTP_PORT = 8000;

http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`Server is listening on port ${HTTP_PORT}`);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
