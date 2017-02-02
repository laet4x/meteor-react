import { Meteor } from 'meteor/meteor';
mysql  = Npm.require("mysql");
Meteor.startup(() => {
  // code to run on server at startup
  var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'meteor-mysql'
	});
	  //console.log(connection);
	 connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	 
	  console.log('connected as id ' + connection.threadId);
	});

	/*connection.query('SELECT * FROM `users` WHERE 1', function (error, results, fields) {
	  if (error) throw error;
	  // connected! 
	  console.log(results);
	});

	var user  = {username: 'francis',password: 'francis',type: 'user'};
	var query = connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
  		if (error) throw error;
  		// Neat! 
	});
	console.log(query.sql);*/
});
