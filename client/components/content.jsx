//import React 
import React, { Component } from 'react';

//import meteor
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//import collection
import Todos from '/imports/api/collection.js';

//import materialUI
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  }
};

class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:this.props.name
    }
  }


  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <div>
          <h1>Hello, {this.props.name}</h1>
          <ul> 
             {todos.map((todos) =>
                <li key={todos._id}>{user.name}</li>
              )}
          </ul>
      </div>
    );
  }

};

export default Content = createContainer(props => {
  // props here will have `main`, passed from the router
  // anything we return from this function will be *added* to it
  return {
    todos: Todos.find({}).fetch(),
  };
}, Content);