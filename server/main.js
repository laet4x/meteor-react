import { Meteor } from 'meteor/meteor';
import Todos from '/imports/api/collection.js';


Meteor.startup(() => {
 console.log('server running....');
});

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