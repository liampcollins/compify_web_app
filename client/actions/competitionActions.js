import competitionsApi from '../api/competitions';
import playlistsApi from '../api/playlists';

export function loadCompsSuccess(comps) {
  return {
    type: 'LOAD_COMPS_SUCCESS',
    comps
  };
}

export function loadPlaylistsSuccess(playlists) {
  return {
    type: 'LOAD_PLAYLISTS_SUCCESS',
    playlists
  };
}

export function loadComps() {
  return function(dispatch) {
    return competitionsApi.getAllComps().then((comps) => {
      dispatch(loadCompsSuccess(comps.data));
    }).catch((error) => {
      throw(error);
    });
  };
}

export function loadCompPlaylists(compId) {
  return function(dispatch) {
    return playlistsApi.getAllPlaylists(compId).then((playlists) => {
      dispatch(loadPlaylistsSuccess(playlists.data));
    }).catch((error) => {
      throw(error);
    });
  };
}

export function addCompetition (comp) {
  return {
    type: 'ADD_COMPETITION',
    comp
  }
}

export function deleteCompetition (i) {
  return {
    type: 'DELETE_COMPETITION',
    i
  }
}
