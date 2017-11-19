import React from 'react';
import loginImg from '../../images/login.png';
import logoImg from '../../images/logo-white.png';

const Login = React.createClass({
  render() {
    console.log('here', logoImg);
    return (
      <div className="login-page">
        <div className="login-content center-block">
          <div>
            <img src={logoImg} alt="logo" className="logo" />
          </div>
          <div>
            <a href="/spotifylogin">
              <img src={loginImg} alt="logo" className="spotify-image" />
            </a>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;
