import Spotify from 'spotify-web-api-js';
import usersApi from '../api/users';

const spotifyApi = new Spotify();


// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';

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
      dispatch({ type: SPOTIFY_ME_SUCCESS, data: user.data });
    }).catch((e) => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
    });
  };
}
