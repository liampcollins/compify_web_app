import React from 'react';
import { Link } from 'react-router';
import logoImg from '../images/logo-white.png';

const Navbar = React.createClass({
  render() {
    if (this.props.user && this.props.user.data) {
      const username = this.props.user.data.username;
      return (
        <div className="navbar">
          <Link to={'/user/' + username + 'competitions'}>
            <img src={logoImg} alt='logo' className="logo"/>
          </Link>
          <hr/>
          <Link to="/">
            <div className="new-comp-button">Home</div>
          </Link>
          <hr/>
          <Link to={'/user/' + username + '/competitions/new'}>
            <div className="new-comp-button">Create Competition</div>
          </Link>
          <hr/>
          <Link to="/login">
            <div className="new-comp-button">Log out</div>
          </Link>
          <hr/>
        </div>
      )
    } else {
      return (
        <div className="navbar">
          <Link to={'/login'}>
            <img src={logoImg} alt='logo' className="logo"/>
          </Link>
        </div>
      )
    }
  }
})

export default Navbar;
