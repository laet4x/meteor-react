import React, { Component } from 'react';

const divStyle = {
   position:'fixed',
   left:'0px',
   bottom:'50px',
   height:'30px',
   width:'100%'
};

export default class Footer extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:this.props.name
    }
  }


  render() {
    return (
      <div style={divStyle}>
          <h1>Footer</h1>
      </div>
    );
  }

};
