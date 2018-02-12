var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/products', function(req, res) {
  fs.readFile('products.json', 'utf8', function(err, data) {
    var products = JSON.parse(data);
    res.locals = { products: products };
    res.render('products.ejs');
  });
});

app.listen(8000);
