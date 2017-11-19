import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar/Navbar';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const Main = React.createClass({
  render() {
    return (
      <div className="page-container">
        <Navbar {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
        <Notifications notifications={this.props.notifications} />
      </div>
    );
  }
});

Main.contextTypes = {
  store: PropTypes.object
};

Main.propTypes = {
  notifications: PropTypes.array
};
export default Main;
