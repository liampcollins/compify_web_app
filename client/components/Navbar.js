import React from 'react';
import { Link } from 'react-router';
import logoImg from '../images/logo-white.png';

const Navbar = React.createClass({
  render() {
    return (
      <div className="navbar">
        <Link to="/competitions">
          <img src={logoImg} alt='logo' className="logo"/>
        </Link>
        <hr/>
        <Link to="/">
          <div className="new-comp-button">Home</div>
        </Link>
        <hr/>
        <Link to="/competitions/new">
          <div className="new-comp-button">Create Competition</div>
        </Link>
        <hr/>
        <Link to="/competitions">
          <div className="new-comp-button">Log out</div>
        </Link>
        <hr/>
      </div>
    )
  }
})

export default Navbar;
