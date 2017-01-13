import React from 'react';
import Playlist from '../playlists/Playlist';
import store from '../../store';
import {loadCompPlaylists} from '../../actions/actionCreators';

const Comp = React.createClass({
  render() {
    const compId = this.props.params.compId;
    const i = this.props.competitions.findIndex((comp) => comp.id === parseInt(compId));
    const comp = this.props.competitions[i];

    return (
      <div className="comp">
        <h2 className="grid-title">{comp.name}</h2>
        <div className="playlists-grid">
          {comp.playlists.map((playlist,i) =>
            <Playlist {...this.props} key={i} i={i} playlist={playlist}/>
          )}
        </div>
      </div>
    )
  }
})

export default Comp;
