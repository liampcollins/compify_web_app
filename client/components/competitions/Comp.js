import React from 'react';
import Playlist from '../playlists/Playlist';
import PlaylistSelector from '../playlists/PlaylistSelector';
import UserSelector from '../users/UserSelector';
import { connect } from 'react-redux';
import {
  getUserPlaylists,
  getUserFriends
} from '../../actions/actionCreators';

const Comp = React.createClass({
  togglePlaylistSelector() {
    const {dispatch} = this.props;
    this.state = this.state || {};
    this.setState({showUserPlaylistSelector: !this.state.showUserPlaylistSelector});
    if (!this.state.showUserPlaylistSelector) {
      dispatch(getUserPlaylists(this.props.user.data.username));
    }
  },
  toggleUserSelector() {
    this.state = this.state || {};
    this.setState({showUserSelector: !this.state.showUserSelector});
  },
  componentDidMount() {
    const {params, user, competitions, dispatch} = this.props;
    dispatch(getUserPlaylists(this.props.user.data));
    dispatch(getUserFriends(this.props.user.data));
  },
  render() {
    const {params, user, competitions, dispatch} = this.props;
    // dispatch(getUserPlaylists(this.props.user.data.username));
    const compId = params.compId;
    const i = competitions.findIndex((comp) => comp.id === parseInt(compId));
    const comp = competitions[i];
    if (!comp) return <div></div>
    let showButton = true;
    let button;
    if (comp && comp.playlists && comp.playlists.length) {
      comp.playlists.forEach((playlist) => {
        if (playlist.user_id === user.data.id) {
          showButton = false;
        }
      })
    }

    if (showButton) {
      button = <div>
        <button onClick={this.togglePlaylistSelector} className="add-playlist-button">+ Add Playlist</button>
        </div>
    }

    let compPlaylists;

    let addUserButton = <div>
      <button onClick={this.toggleUserSelector} className="add-user-button">+ Add Player</button>
    </div>

    if (comp && comp.playlists && comp.playlists.length) {
      <PlaylistSelector {...this.props} type={'comp'} key={i} i={i} comp={comp} />
    } else {
      compPlaylists = <div>
        <div className="no-playlists">No playlists</div>
      </div>
    }
    return (
      <div className="comp">
        <h2 className="grid-title">{comp.name}</h2>

        {button}
        {(!this.state || !this.state.showUserPlaylistSelector) && compPlaylists}
        {this.state && this.state.showUserPlaylistSelector && <PlaylistSelector {...this.props} type={'user'} key={i+1} i={i} comp={comp} />}

        {addUserButton}
        { this.state && this.state.showUserSelector && <UserSelector {...this.props} key={i+1} i={i} comp={comp}></UserSelector> }
      </div>
    )
  }
})


export default connect((state) => state)(Comp);
