import React from 'react';
import { Link } from 'react-router';

const Navbar = React.createClass({
  render() {
    return (
      <div className="navbar">
        <Link to="/competitions/new">
          <div className="new-comp-button">Create Competition</div>
        </Link>
      </div>
    )
  }
})

export default Navbar;
