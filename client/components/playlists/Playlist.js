import React from 'react';

const Playlist = React.createClass({
  handleDelete(e) {
    e.preventDefault()
    this.props.deletePlaylist(this.props.i);
  },
  render() {
    const playlist = this.props.playlist;
    return (
      <div className="playlist playlist-in-grid">
        <div>
          <span>Playlist Name {playlist.name}</span>
        </div>
        <span onClick={this.handleDelete} className="glyphicon glyphicon-envelope">X</span>
      </div>
    )
  }
})

export default Playlist;
