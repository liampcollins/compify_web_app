import React from 'react';
import AddFriend from './AddFriend';
import {
  getFriend,
  getUserFriends
} from '../../actions/actionCreators';

const UserSelector = React.createClass({
  showFriend(f) {
    console.log('showFriend', f)
  },
  addFriend() {
    this.state = this.state || {};
    this.setState({ showFriendForm: !this.state.showFriendForm })
  },
  render() {
    let content;
    if (!this.props.friends) {
      <div>...Loading</div>
    } else if(!this.props.friends.length) {
      content = <div>
        <div>No friends</div>
        <button onClick={this.addFriend}>+Add Some</button>
        {this.state && this.state.showFriendForm && <AddFriend {...this.props}></AddFriend>}

      </div>
    } else {
      content = <div>
        <div>
          {this.props.friends.map((friend,i) =>{
            let boundFriendClick = this.showFriend.bind(this, friend);
            return <div key={i} onClick={boundFriendClick}>{friend.username}</div>
          })}
        </div>
        <button onClick={this.addFriend}>+Add More</button>
        {this.state && this.state.showFriendForm && <AddFriend {...this.props}></AddFriend>}
      </div>
    }
    return (
      <div className="user-selector">
        {content}
      </div>
    )
  }
})

export default UserSelector;
