import React from 'react';
import Playlist from '../playlists/Playlist';
import PlaylistSelector from '../playlists/PlaylistSelector';
import store from '../../store';
import {loadCompPlaylists} from '../../actions/actionCreators';

const Comp = React.createClass({
  showPlaylists() {
    this.props.getPlaylists().then(() => {
    })
  },
  render() {
    const {params} = this.props;

    const compId = this.props.params.compId;
    const i = this.props.competitions.findIndex((comp) => comp.id === parseInt(compId));
    const comp = this.props.competitions[i];


    let playlists;
    if (comp.playlists && comp.playlists.length) {
      playlists = <div className="playlists-grid">
        {comp.playlists.map((playlist,i) =>
          <Playlist {...this.props} key={i} i={i} playlist={playlist}/>
        )}
        <button className="add-playlist-button">+ Add Playlist</button>
      </div>
    } else {
      playlists = <div className="no-playlists">No playlists</div>
    }
    return (
      <div className="comp">
        <h2 className="grid-title">{comp.name}</h2>
        {playlists}
        <div className="add-playlist-button"><span onClick={this.showPlaylists}>+Add Playlist</span></div>
        <PlaylistSelector {...this.props} key={i} i={i} comp={comp} />
      </div>
    )
  }
})

export default Comp;
