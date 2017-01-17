import React from 'react';
import Playlist from '../playlists/Playlist';
import store from '../../store';
import {loadCompPlaylists} from '../../actions/actionCreators';

const Comp = React.createClass({
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
      </div>
    } else {
      playlists = <div>No playlists</div>
    }
    return (
      <div className="comp">
        <h2 className="grid-title">{comp.name}</h2>
        {playlists}
      </div>
    )
  }
})

export default Comp;
