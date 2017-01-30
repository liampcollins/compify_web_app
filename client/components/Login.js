import React from 'react';
import loginImg from '../images/login.svg';

const Home = React.createClass({
  render() {
    return (
      <div className="home">
        <h2 className="grid-title">Welcome to Compify</h2>
        <a href="/spotifylogin"><img src={loginImg} alt='logo' className="spotify-image"/></a>
      </div>
    )
  }
})

export default Home;
