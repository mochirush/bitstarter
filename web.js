var sys = require('sys');

var express = require('express');

var fs = require('fs');

var app = express();

var index_contents = fs.readFileSync('index.html', 'utf-8');

app.get('/', function(request, response) {
 response.send(index_contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});

