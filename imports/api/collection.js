import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Todos = new Mongo.Collection('todos');

export default Todos;


/*var mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'meteor-mysql'
});

export default connection;
*/