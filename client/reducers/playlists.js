import {
  GET_PLAYLISTS_BEGIN,
  GET_PLAYLISTS_SUCCESS,
  GET_PLAYLISTS_FAILURE
} from '../actions/actionCreators';

function playlists(state = [], action) {
  switch (action.type) {
    case GET_PLAYLISTS_BEGIN:
      return state;
      break;
    case GET_PLAYLISTS_SUCCESS:
      return action.data.items;
      break;
    case GET_PLAYLISTS_FAILURE:
    return state;
    break;
    default:
      return state;
  }
  return state
}

export default playlists;
