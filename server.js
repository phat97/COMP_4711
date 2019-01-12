const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const options = {
  cert: fs.readFileSync("../ssl_bundle/domain.cert.pem")
};

const app = express();

const HTTPS_PORT = 443;
const HTTP_PORT = 8000;

https.createServer(options, app).listen(HTTPS_PORT, () => {
  console.log(`Server is listening on port ${HTTPS_PORT}`);
});

http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`Server is listening on port ${HTTP_PORT}`);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
