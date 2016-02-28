var Promise = require('bluebird');
var MongoClient = Promise.promisifyAll(require('mongodb').MongoClient);

function MyMongoClient() {
    return MongoClient.connectAsync('mongodb://ec2-54-191-135-136.us-west-2.compute.amazonaws.com:27017/FitBuddyDB').then(function(database) {
      console.log(database, "DB CONNECT WORKED");
      return Promise.resolve(database);
    }).catch(function(err) {
      console.log(err, "ERROR");
      return Promise.reject(new Error(err));
    });
}

module.exports = MyMongoClient;
