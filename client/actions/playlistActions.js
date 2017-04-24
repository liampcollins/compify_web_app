import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();
import playlistsApi from '../api/playlists';

export function savePlaylist(data) {
  return (dispatch) => {
    dispatch({ type: 'ADD_PLAYLISTS_BEGIN'});
    return playlistsApi.addPlaylist(data).then(() => {
      dispatch({ type: 'ADD_PLAYLISTS_SUCCESS', data });
    }).catch((e) => {
      dispatch({ type: 'ADD_PLAYLISTS_FAILURE', error: e });
    });
  };
};
