import Spotify from 'spotify-web-api-js';
import usersApi from '../api/users';

const spotifyApi = new Spotify();


// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const UPDATE_COMPETITIONS_STATE = 'UPDATE_COMPETITIONS_STATE';

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

/* get the user's info from the /me api */
export function getMyInfo() {
  return (dispatch) => {
    dispatch({ type: SPOTIFY_ME_BEGIN});
    return spotifyApi.getMe().then((data) => {
      return usersApi.upsertUser(data);
    }).then((user) => {
      dispatch({ type: UPDATE_USER_STATE, data: user.data });
      dispatch({ type: UPDATE_COMPETITIONS_STATE, comps: user.data.competitions });
    }).catch((e) => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
    });
  };
}
