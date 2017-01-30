import React from 'react';
import { connect } from 'react-redux';

const Index = React.createClass({

  render() {
    return (
      <div className="container"></div>
    )
  }
})

export default connect((state) => state)(Index);
