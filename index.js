var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Promise = require('bluebird');
var MyMongoClient = require('./mysql');

var myDB = MyMongoClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/index.html', function (req, res) {
  res.sendFile(path.resolve('html/index.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve('html/registration.html'));
});

app.post('/register', function(req, res) {
  console.log(req.body);
  myDB.then(function(db) {
    db.collection('Users').insertOne(req.body, function(err, result) {
      if (err) {
        console.log(err, "ERROR");
      }
      console.log(result, "YEAH IT WORKED!!");
      res.redirect("/index.html");
    });
  }).catch(function(othererr) {
    console.log(othererr, "OTHERERROR");
  });
});

app.listen(3000, '0.0.0.0', function () {
  console.log('Example app listening on port 3000!');
});
