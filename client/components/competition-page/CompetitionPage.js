import React from 'react';
import PageHeader from '../common/page-header/PageHeader';
import Playlist from '../playlists/Playlist';
import PlaylistSelector from './playlist-selector/PlaylistSelector';
import UserSelector from '../users/UserSelector';
import { connect } from 'react-redux';
import { getUserPlaylists, getUserFriends } from '../../actions/actionCreators';

const Comp = React.createClass({
  getInitialState() {
    let compTabs = {
      compPlaylists: true,
      userPlaylists: false,
      compUsers: false
    };
    return { compTabs };
  },
  toggleTab(tab) {
    this.state = this.state || {};
    let compTabs = {
      compPlaylists: tab === 'compPlaylists',
      userPlaylists: tab === 'userPlaylists',
      compUsers: tab === 'compUsers'
    };
    this.setState({
      compTabs
    });
  },
  componentDidMount() {
    const { params, user, competitions, dispatch } = this.props;
    dispatch(getUserPlaylists(this.props.user.data));
    dispatch(getUserFriends(this.props.user.data));
  },
  render() {
    const { params, user, competitions, dispatch } = this.props;
    const compId = params.compId;
    const i = competitions.findIndex((comp) => comp.id === parseInt(compId));
    const comp = competitions[i];
    if (!comp) return <div />;
    // let showButton = true;

    let playlistAdded = false;
    if (comp && comp.playlists && comp.playlists.length) {
      comp.playlists.forEach((playlist) => {
        if (playlist.user_id === user.data.id) {
          playlistAdded = true;
        }
      });
    }

    // let compPlaylists;

    // let addUserButton = (
    //   <div>
    //     <button onClick={this.toggleUserSelector} className="add-user-button">
    //       + Add Player
    //     </button>
    //   </div>
    // );

    // if (comp && comp.playlists && comp.playlists.length) {
    // } else {
    //   compPlaylists = (
    //     <div>
    //       <div className="no-playlists">No playlists</div>
    //     </div>
    //   );
    // }
    return (
      <div className="comp">
        <PageHeader headerStart={comp.name} headerEnd="" />
        <div className="competition-panel center-block">
          <ul className="nav nav-tabs" role="tablist">
            <li
              role="presentation"
              className={this.state.compTabs.compPlaylists ? 'active' : ''}
              id="compPlaylists"
              onClick={() => this.toggleTab('compPlaylists')}
            >
              <a
                href="#playlists"
                aria-controls="playlists"
                role="tab"
                data-toggle="tab"
              >
                Playlists
              </a>
            </li>
            {playlistAdded && (
              <li
                role="presentation"
                id="userPlaylists"
                className={this.state.compTabs.userPlaylists ? 'active' : ''}
                onClick={() => this.toggleTab('userPlaylists')}
              >
                <a
                  href="#addplaylist"
                  aria-controls="addplaylist"
                  role="tab"
                  data-toggle="tab"
                >
                  Add Playlist
                </a>
              </li>
            )}
            <li
              role="presentation"
              id="compUsers"
              className={this.state.compTabs.compUsers ? 'active' : ''}
              onClick={() => this.toggleTab('compUsers')}
            >
              <a
                href="#users"
                aria-controls="users"
                role="tab"
                data-toggle="tab"
              >
                Users
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel">
              {this.state &&
                this.state.compTabs.compPlaylists && (
                  <PlaylistSelector
                    {...this.props}
                    type={"comp"}
                    key={i}
                    i={i}
                    comp={comp}
                  />
                )}
            </div>
            <div role="tabpanel">
              {this.state &&
                this.state.compTabs.userPlaylists && (
                  <PlaylistSelector
                    {...this.props}
                    type={"user"}
                    key={i + 1}
                    i={i}
                    comp={comp}
                  />
                )}
            </div>
            <div role="tabpanel">
              {this.state &&
                this.state.compTabs.compUsers && (
                  <UserSelector
                    {...this.props}
                    key={i + 1000}
                    i={i}
                    comp={comp}
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect((state) => state)(Comp);
