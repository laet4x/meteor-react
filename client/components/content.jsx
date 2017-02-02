import React, { Component } from 'react';
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

export default class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:this.props.name
    }
  }


  render() {
    return (
      <div>
           <RaisedButton label="Default" />
          <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }

};