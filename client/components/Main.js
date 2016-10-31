import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';


// ADD NAV BAR
const Main = React.createClass({
  render() {
    return (
      <div>
        <Navbar {...this.props}/>
        <h1>
        <Link to="/competitions">COMPIFY</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;
