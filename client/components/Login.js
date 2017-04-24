import React from 'react';
import loginImg from '../images/login.svg';
import logoImg from '../images/logo-white.png';

const Login = React.createClass({
  render() {
    return (
      <div className="login">
        <div className="login-container">
          <div><img src={logoImg} alt='logo' className="logo"/></div>
          <div><a href="/spotifylogin"><img src={loginImg} alt='logo' className="spotify-image"/></a></div>
        </div>
      </div>
    )
  }
})

export default Login;
