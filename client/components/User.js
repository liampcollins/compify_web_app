import React from 'react';
import { connect } from 'react-redux';
import {
  getUserInfo
} from '../actions/actionCreators';

const User = React.createClass({
  componentDidMount() {
    const {dispatch, params} = this.props;
    const username = params.id;
    dispatch(getUserInfo(username));
  },
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    )
  }
})

export default connect((state) => state)(User);
