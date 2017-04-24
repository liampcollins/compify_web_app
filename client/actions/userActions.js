import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();
import usersApi from '../api/users';

export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const GET_ME_BEGIN = 'GET_ME_BEGIN';
export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const UPDATE_COMPETITIONS_STATE = 'UPDATE_COMPETITIONS_STATE';
export const GET_PLAYLISTS_BEGIN = 'GET_PLAYLISTS_BEGIN';
export const GET_PLAYLISTS_SUCCESS = 'GET_PLAYLISTS_SUCCESS';
export const GET_PLAYLISTS_FAILURE = 'GET_PLAYLISTS_FAILURE';
export const GET_FRIENDS_BEGIN = 'GET_FRIENDS_BEGIN';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';
export const ADD_FRIEND_BEGIN = 'ADD_FRIEND_BEGIN';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';


export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}


export function getUserPlaylists(user) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYLISTS_BEGIN});
    return usersApi.getUserPlaylists(user).then((data) => {
      dispatch({ type: GET_PLAYLISTS_SUCCESS, data });
    }).catch((e) => {
      console.log('Error getting user playlists', e)
      dispatch({ type: GET_PLAYLISTS_FAILURE, e });
    });
  };
}

export function getUserFriends(user) {
  return (dispatch) => {
    dispatch({ type: GET_FRIENDS_BEGIN});
    return usersApi.getUserFriends(user).then((data) => {
      dispatch({ type: GET_FRIENDS_SUCCESS, data });
    }).catch((e) => {
      console.log('Error getting user friends', e)
      dispatch({ type: GET_FRIENDS_FAILURE, e });
    });
  };
}

export function addFriend(info) {
  return usersApi.addFriend(info).then((resp) => {
    return resp.data;
  }).catch((error) => {
    throw(error);
  });
}

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
