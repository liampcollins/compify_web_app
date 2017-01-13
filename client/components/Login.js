import React from 'react';
import { Link } from 'react-router';
import CompInGrid from './competitions/CompInGrid'

const Home = React.createClass({
  logIn() {
    this.props.userLogIn();
  },
  signUp() {
    this.props.userSignUp();
  },
  render() {
    return (
      <div className="home">
        <h2>Welcome to Compify, log in or sign up to continue</h2>
        <a href="/login">LOGIN</a>
      </div>
    )
  }
})

export default Home;
