import competitionsApi from '../api/competitions';
import playlistsApi from '../api/playlists';

export function loadCompsSuccess(comps) {
  return {
    type: 'UPDATE_COMPETITIONS_STATE',
    comps
  };
}

export function loadPlaylistsSuccess(playlists) {
  return {
    type: 'LOAD_PLAYLISTS_SUCCESS',
    playlists
  };
}

export function loadComps(userId) {
  return function(dispatch) {
    return competitionsApi.getAllComps(userId).then((comps) => {
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

export function addCompetition(comp) {
  return function(dispatch) {
    // dispatch for loading screen
    return competitionsApi.addCompetition(comp).then((resp) => {
      return resp.data;
    }).catch((error) => {
      throw(error);
    });
  };
}

export function deleteCompetition (i) {
  return {
    type: 'DELETE_COMPETITION',
    i
  }
}
