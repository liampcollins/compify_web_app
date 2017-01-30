import React from 'react';

const PlaylistSelector = React.createClass({
  addPlaylist(p) {
    const playlist = {
      spotify_id: p.id,
      user_id: this.props.user.id,
      competition_id: this.props.comp.id
    };
    this.props.savePlaylist(playlist);
  },
  render() {
    return (
      <div className="playlist-selector">
        {this.props.playlists.map((playlist,i) =>{
          // let boundPlaylistClick = this.addPlaylist.bind(this, playlist);
          // <div onClick={boundPlaylistClick}>{playlist.name}</div>
          <div>{playlist.name}</div>
        })}
      </div>
    )
  }
})

export default PlaylistSelector;
