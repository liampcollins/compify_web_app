import React from 'react';

const NewPlaylist = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const playlist = {
      name: this.refs.name.value
    };
    this.props.addPlaylist(playlist);
    this.refs.competitionForm.reset();
  },
  render() {
    return (
      <div className="new-playlist">
      NEW PLAYLIST
      </div>
    )
  }
})

export default NewPlaylist;
