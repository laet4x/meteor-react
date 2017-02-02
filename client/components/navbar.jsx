import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Home from 'material-ui/svg-icons/action/home';
import ActionAndroid from 'material-ui/svg-icons/action/android';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  }
};

const iconStyles = {
  marginRight: 24,
};

export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:this.props.name
    }
  }


  render() {
    return (
      <div>
             <AppBar
              title={<span style={styles.title}>ReactJS + Meteor</span>}
              onTitleTouchTap={handleTouchTap}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              iconElementRight={<div>
                                  <FlatButton
                                    href="/about"
                                    backgroundColor="#2196F3"
                                    labelPosition="before"
                                    label="GitHub Link"
                                    primary={true}
                                    icon={<Home />}
                                  />
                                 <FlatButton
                                    label="Label before"
                                    backgroundColor="#2196F3"
                                    labelPosition="before"
                                    secondary={true}
                                    icon={<ActionAndroid />}
                                  />
                                </div>
                                } 
            />
      </div>
    );
  }

};