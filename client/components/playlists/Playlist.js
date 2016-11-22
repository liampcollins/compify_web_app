import React from 'react';

const Playlist = React.createClass({

  render() {
    const playlist = this.props.playlist;
    return (
      <div className="playlist">
        Playlist Name {playlist.id}
      </div>
    )
  }
})

export default Playlist;
