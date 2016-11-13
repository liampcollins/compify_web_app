import React from 'react';
import CompInGrid from './CompInGrid'

const Login = React.createClass({
  signUp() {
    this.props.userLogIn();
  },
  logIn() {
    this.props.userSignUp();
  },
  render() {
    return (
      <div className="login">
        <h2>Welcome to Compify, log in or sign up to continue</h2>
        <button onClick={this.logIn}>Log In With Spotify</button>
        <button onClick={this.signUp}>Sign up With Spotify</button>
      </div>
    )
  }
})

export default Login;
