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

//table
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

//icon
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

//svg icons
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Close from 'material-ui/svg-icons/navigation/close';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import Message from 'material-ui/svg-icons/communication/message';

import Snackbar from 'material-ui/Snackbar';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  }
};
handleOpenMenu = () => {
  this.setState({
    openMenu: true,
  });
}

handleOnRequestChange = (value) => {
  this.setState({
    openMenu: value,
  });
}

handleRequestOpen = () => {
    this.setState({
      open: true,
    });
  };

handleRequestClose = () => {
    this.setState({
      open: false,
    });
};

class Content extends Component {

  constructor (props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
      open: false,
    };
  }

  componentWillMount () {
    console.log("Component Did Mount");
  }

 componentWillReceiveProps(nextProps) {
  console.log('update props');
  this.setState({
      open: true,
    });
 }
 
  render() {
    const { todos, ready } = this.props;
    return (
      <div>
          <h1>Hello, {this.props.name}</h1>
          <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                  <TableHeaderColumn>Action</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}>
               {todos.map((todos) =>
                <TableRow key={todos._id}>
                  <TableRowColumn>{todos._id}</TableRowColumn>
                  <TableRowColumn >{todos.name}</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                  <TableRowColumn> 
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        open={this.state.openMenu}
                        onRequestChange={this.handleOnRequestChange}
                      >
                        <MenuItem primaryText="Edit"  href="#" />
                        <MenuItem primaryText="Delete" href="#" />
                      </IconMenu>
                    </TableRowColumn>
                </TableRow>
                 )}
              </TableBody>
            </Table>
            <Snackbar
              open={this.state.open}
              message="Table Updated"
              autoHideDuration={2000}
              onRequestClose={this.handleRequestClose}
            />
      </div>
    );
  }

};

export default Content = createContainer(() => {
  // props here will have `main`, passed from the router
  // anything we return from this function will be *added* to it
  return  {
    todos: Todos.find().fetch(),
  };
}, Content);