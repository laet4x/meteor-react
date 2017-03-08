import { Meteor } from 'meteor/meteor';
import Todos from '/imports/api/collection.js';

Meteor.startup(function () {
  console.log('server running....');
  addAdmin();
});

function addAdmin() {
  if (Meteor.users.find().count() === 0) {
    var user = {
      name: "Admin User",
      email: "admin@example.com",
      roles: ['admin']
    };
    let id = Accounts.createUser({
      email: user.email,
      username: 'Administrator',
      password: "AdminUser123!",
      profile: { name: user.name }
    });
    Roles.addUsersToRoles(id, user.roles, 'default-group');
  }
}

/*function select(query,callback)
{
	var select = 'SELECT * from ' + query;
    connection.query(select, function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null,result);

    });

}

var someVar = [];

var hello = [];
//call Fn for db query with callback
select("users", function(err,data){
       if(err) {
	    throw err;
	  } else {
	    setValue(data);
	  }

});

function setValue(value) {
  someVar = value;
  console.log(someVar);
  hello.concat(someVar);
}*/



Meteor.publish("todos", function () {
	return Todos.find();
});