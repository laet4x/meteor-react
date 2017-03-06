import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};


export default class ButtonePage extends Component {

  render() {
    return (
     <div>
     <br/>
      <FlatButton label="Default" />
      <FlatButton label="Primary" primary={true} />
      <FlatButton label="Secondary" secondary={true} />
      <FlatButton label="Disabled" disabled={true} />

      <br/>
      <FlatButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.uploadButton}
      containerElement="label"
      >
      <input type="file" style={styles.uploadInput} />
      </FlatButton>
      <FlatButton
        label="Label before"
        labelPosition="before"
        primary={true}
        icon={<ActionAndroid />}
      />
      <FlatButton
        href="https://github.com/callemall/material-ui"
        target="_blank"
        label="GitHub Link"
        secondary={true}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
    </div>
    );
  }

};