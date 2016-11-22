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
        <button onClick={this.logIn}>Log In With Spotify</button>
        <Link to={'/login'}>
          <button>Log URL In With Spotify</button>
        </Link>

        <button onClick={this.signUp}>Sign up With Spotify</button>
      </div>
    )
  }
})

export default Home;
