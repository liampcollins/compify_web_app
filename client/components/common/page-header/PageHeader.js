import React from 'react';
import { connect } from 'react-redux';

const PageHeader = React.createClass({
  render() {
    console.log(this.props);
    return (
      <h2 className="page-title">
        <span className="glyphicon glyphicon-unchecked" />
        <span>
          <span>{this.props.headerStart}</span>{" "}
          <span className="alt-color">{this.props.headerEnd}</span>
        </span>
        <span className="glyphicon glyphicon-unchecked" />
      </h2>
    );
  }
});

export default connect((state) => state)(PageHeader);
