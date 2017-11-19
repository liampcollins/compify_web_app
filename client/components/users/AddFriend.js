import React from 'react';
import { addFriend } from '../../actions/actionCreators';

const AddFriend = React.createClass({
  getInitialState() {
    return {
      noUserFound: false,
      respMessage: ''
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    try {
      //  ADD FORM VALIDATION, NOTIFICATIONS, LOADING SCREEN
      addFriend({
        info: this.refs.nameOrEmail.value,
        id: this.props.user.data.id
      }).then((resp) => {
        if (!resp.message) return;
        this.refs.friendForm.reset();
        this.setState({
          respMessage: resp.message
        });
      });
    } catch (e) {
      this.setState({
        noUserFound: true
      });
    }
  },
  render() {
    const form = (
      <form
        className="friend-form"
        ref="friendForm"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          ref="nameOrEmail"
          placeholder="Add email or username and hit enter"
        />
        <input type="submit" hidden />
      </form>
    );
    const noUserFound = <div>No user matched your input</div>;
    const respMessage = <div>{this.state.respMessage}</div>;
    return (
      <div>
        {form}
        {this.state.noUserFound && noUserFound}
        {this.state.respMessage && respMessage}
      </div>
    );
  }
});

export default AddFriend;
