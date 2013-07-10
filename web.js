var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var index_contents = fs.readFileSync('index.html');

console.log(index_contents);

