var express = require('express');
var http = require('http');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/secret', function(req, res) {
  res.status(200).send('THE fog comes</br>on little cat feet.</br></br>It sits looking</br>over harbor and city</br>on silent haunches</br>and then moves on.</br></br><b>Carl Sandburg</b>, <em>Fog</em>');
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/404.html'));
});

http.createServer(app).listen(5000);
console.log("The server is listening on port 5000...");