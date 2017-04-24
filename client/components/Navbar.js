import React from 'react';
import { Link } from 'react-router';
import logoImg from '../images/logo-white.png';

const Navbar = React.createClass({
  render() {
    if (this.props.user && this.props.user.data) {
      const id = this.props.user.data.id;
      return (
        <div className="navbar">
          <Link to={'/user/' + id + '/competitions'}>
            <img src={logoImg} alt='logo' className="logo"/>
          </Link>
          <hr/>
          <Link to={'/user/' + id + '/competitions'}>
            <div className="new-comp-button">Home</div>
          </Link>
          <hr/>
          <Link to={'/user/' + id + '/competitions/new'}>
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
        <div></div>
      )
    }
  }
})

export default Navbar;
