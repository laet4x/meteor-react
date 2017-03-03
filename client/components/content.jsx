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

//table
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
    };
  }


  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <div>
          <h1>Hello, {this.props.name}</h1>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
           >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                  <TableHeaderColumn>Action</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
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
                      >
                        <MenuItem primaryText="Edit"  href="#" />
                        <MenuItem primaryText="Delete" href="#" />
                      </IconMenu>
                    </TableRowColumn>
                </TableRow>
                 )}
              </TableBody>
            </Table>
      </div>
    );
  }

};

export default Content = createContainer(props => {
 var todos = Meteor.subscribe('todos');
  // props here will have `main`, passed from the router
  // anything we return from this function will be *added* to it
  return {
    todos: Todos.find().fetch()
  };
}, Content);