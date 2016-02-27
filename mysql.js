var mysql      = require('mysql');

function MySqlClient() {
	this.connection = mysql.createConnection({
  		host     : 'localhost',
 		user     : 'me',
 		password : 'secret',
	  	database : 'my_db'
	});
	this.connection.connect();
}

MySqlClient.prototype.getConnection = function (query, cb) {
	return this.connection;
}

MySqlClient.prototype.endConnection = function(first_argument) {
	this.connection.end();
};

module.exports = MySqlClient;
