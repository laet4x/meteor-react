import React, { Component } from 'react';

export default class Footer extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:this.props.name
    }
  }


  render() {
    return (
      <div>
          <h1>Footer</h1>
      </div>
    );
  }

};
