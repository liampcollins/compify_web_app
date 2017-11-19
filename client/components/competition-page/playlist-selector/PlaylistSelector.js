import React from 'react';
import { addPlaylistToComp } from '../../../actions/actionCreators';

const PlaylistSelector = React.createClass({
  componentDidMount() {
    const { params, user, competitions, dispatch } = this.props;
  },
  addPlaylistToComp(p) {
    const playlist = {
      spotify_id: p.id,
      user_id: this.props.user.data.id,
      competition_id: this.props.comp.id
    };
    const { dispatch } = this.props;
    dispatch(addPlaylistToComp(playlist));
  },
  voteForPlaylist(p) {
    console.log('voteForPlaylist', p);
  },
  showPlaylist(p) {
    p.embedUrl =
      'https://embed.spotify.com/?uri=spotify%3Auser%3Aliampcollins%3Aplaylist%3A' +
      p.id;
    this.setState({ selectedPlaylist: p });
  },
  render() {
    this.state = this.state || {
      selectedPlaylist: { name: 'Select a Playlist' }
    };
    let playlists;
    let buttonText;
    let playlistAction;
    let viewer;
    if (this.props.type === 'user') {
      buttonText = '+ Add';
      playlistAction = this.addPlaylistToComp.bind(
        this,
        this.state.selectedPlaylist
      );
      playlists = this.props.playlists;
    } else {
      buttonText = 'Vote';
      playlistAction = this.voteForPlaylist.bind(
        this,
        this.state.selectedPlaylist
      );
      this.state.selectedPlaylist.embedUrl =
        'https://embed.spotify.com/?uri=spotify%3Auser%3Aliampcollins%3Aplaylist%3A' +
        this.state.selectedPlaylist.id;
      playlists = this.props.comp.playlists;
    }
    return (
      <div className="selector playlist-selector">
        <ul>
          {playlists.map((playlist, i) => {
            let boundPlaylistClick = this.showPlaylist.bind(this, playlist);
            return (
              <li
                key={i}
                onClick={boundPlaylistClick}
                className={
                  this.state.selectedPlaylist.name === playlist.name
                    ? 'active'
                    : ''
                }
              >
                <span>{playlist.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="player">
          <iframe
            src={this.state.selectedPlaylist.embedUrl}
            width="398"
            height="310"
            frameBorder="0"
            allowtransparency="true"
          />
          <div>
            <button className="btn" onClick={playlistAction}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
});

export default PlaylistSelector;
