var express = require('express');
var app = express();
var MySqlClient = require('./mysql');

var dbClient = new MySqlClient().getConnection();

app.get('/', function (req, res) {
  res.sendFile('/var/www/myapp/html/index.html');
});

app.get('/admin-api/sql/:query', function(req, res) {
	res.send("query is set to " + req.params.query);
});

app.listen(3000, '0.0.0.0', function () {
  console.log('Example app listening on port 80!');
});