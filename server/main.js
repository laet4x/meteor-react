import { Meteor } from 'meteor/meteor';
import Todos from '/imports/api/collection.js';
mysql  = Npm.require("mysql");
Meteor.startup(() => {
 console.log('server running....');
 //Todos.insert({_id:"1",name:"frankie"});
});

Meteor.publish("todos", function () {
	return Todos.find();
});