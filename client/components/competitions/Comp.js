import React from 'react';
import Playlist from '../playlists/Playlist';
import store from '../../store';
import {loadCompPlaylists} from '../../actions/actionCreators';

const Comp = React.createClass({
  render() {
    const compId = this.props.params.compId;
    store.dispatch(loadCompPlaylists(compId));
    const i = this.props.competitions.findIndex((comp) => comp.id === parseInt(compId));
    const comp = this.props.competitions[i];

    return (
      <div className="comp">
        <div className="comp-name">This is the individual competition:{comp.name}</div>
        <div>
          <img src={comp.image} alt={comp.name} className=""/>
        </div>
        {this.props.playlists.map((playlist,i) =>
          <Playlist {...this.props} key={i} i={i} playlist={playlist}/>
        )}
        <button>Add playlist</button>
      </div>
    )
  }
})

export default Comp;
