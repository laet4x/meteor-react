import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';

 const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: grey500
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey500
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500
      }
    },
    loginBtn: {
      float: 'right'
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
    error: {
      color: '#d40000',
      textAlign: 'center'
    }
  };


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
         };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name,event) {
    var change = {};
    change[name] = event.target.value;
    console.log(change);
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault(); 
    var username = this.state.username ;
    var password = this.state.password;
    Meteor.loginWithPassword(this.state.username, this.state.password, function(err) {
			if (err)
			{
			  this.setState({error:"Invalid Credential"});
        console.log(this.state.error);
			}else {
			 	console.log('Login Sucess');
			  FlowRouter.go("/dashboard");
			}
		}.bind(this));
  }

  render() {
    return (
    <div style={styles.loginContainer}>

          {this.state.error ? <p style={styles.error}>{this.state.error}</p> : null}

          <Paper style={styles.paper}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                hintText="Username"
                floatingLabelText="Username"
                fullWidth={true}
                value={this.state.username} 
                onChange={this.handleChange.bind(this,'username')}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this,'password')} 
              />

              <div>
                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />
                <RaisedButton label="Login"
                              type="submit"
                              primary={true}
                              style={styles.loginBtn}/>
              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <FlatButton
              label="Register"
              href="/"
              style={styles.flatButton}
              icon={<PersonAdd />}
            />

            <FlatButton
              label="Forgot Password?"
              href="/"
              style={styles.flatButton}
              icon={<Help />}
            />
          </div>

          <div style={styles.buttonsDiv}>
            <a href="/" style={{...styles.btn, ...styles.btnFacebook}}>
              <i className="fa fa-facebook fa-lg"/>
              <span style={styles.btnSpan}>Log in with Facebook</span>
            </a>
            <a href="/" style={{...styles.btn, ...styles.btnGoogle}}>
              <i className="fa fa-google-plus fa-lg"/>
              <span style={styles.btnSpan}>Log in with Google</span>
            </a>
          </div>
        </div>
    );
  }

};