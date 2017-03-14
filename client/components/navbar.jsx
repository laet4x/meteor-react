import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


import FontIcon from 'material-ui/FontIcon';
import Home from 'material-ui/svg-icons/action/home';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import Badge from 'material-ui/Badge';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';



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
  
handleChange = (event, index, value) => this.setState({value});

export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:this.props.name,
      value: 1
    }
  }

  render() {
    return (
      <div>
             <AppBar
              title={<span style={styles.title}>ReactJS + Meteor</span>}
              onTitleTouchTap={handleTouchTap}
              iconElementRight=
                {
                  <div> 
                    <IconMenu
                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                      <MenuItem primaryText="Home"  href="/" />
                      <MenuItem primaryText="Avatar" href="/avatar" />
                      <MenuItem primaryText="Badge" href="/badge"/>
                      <MenuItem primaryText="Button" href="/button" />
                      <MenuItem primaryText="Login" href="/login" />
                    </IconMenu>
                  </div>
                  } 
            />
      </div>
    );
  }

};

/*
   <FlatButton
                      href="/"
                      backgroundColor="#2196F3"
                      labelPosition="before"
                      label="GitHub Link"
                      icon={<Home />}
                    />
                   <FlatButton
                      href="/about"
                      label="Label before"
                      backgroundColor="#2196F3"
                      labelPosition="before"
                      icon={<ActionAndroid />}
                    />*/