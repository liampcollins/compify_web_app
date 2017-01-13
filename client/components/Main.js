import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';


// ADD NAV BAR
const Main = React.createClass({
  render() {
    return (
      <div className="page-container">
        <Navbar {...this.props}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;
