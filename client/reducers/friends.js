import {
  GET_FRIENDS_BEGIN,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE
} from '../actions/actionCreators';

function friends(state = [], action) {
  switch (action.type) {
    case GET_FRIENDS_BEGIN:
      return state;
      break;
    case GET_FRIENDS_SUCCESS:
      return action.data;
      break;
    case GET_FRIENDS_FAILURE:
    return state;
    break;
    default:
      return state;
  }
  return state
}

export default friends;
