import { Meteor } from 'meteor/meteor';
import { Todos } from '/imports/api/collection.js';
mysql  = Npm.require("mysql");
Meteor.startup(() => {
 console.log('server running....');
});
