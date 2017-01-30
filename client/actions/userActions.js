import Spotify from 'spotify-web-api-js';
import usersApi from '../api/users';

export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const GET_ME_BEGIN = 'GET_ME_BEGIN';
export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const UPDATE_COMPETITIONS_STATE = 'UPDATE_COMPETITIONS_STATE';

// export function setTokens({accessToken, refreshToken}) {
  // if (accessToken) {
  //   spotifyApi.setAccessToken(accessToken);
  // }
  // return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
// }

export function getUserInfo(id) {
  return (dispatch) => {
    dispatch({ type: GET_ME_BEGIN});
    return usersApi.getUser(id)
    .then((user) => {
      dispatch({ type: UPDATE_USER_STATE, data: user });
      dispatch({ type: UPDATE_COMPETITIONS_STATE, comps: user.competitions });
    }).catch((e) => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
    });
  };
}
