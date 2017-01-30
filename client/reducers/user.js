import {
  SPOTIFY_TOKENS, GET_ME_BEGIN, UPDATE_USER_STATE, SPOTIFY_ME_FAILURE
} from '../actions/actionCreators';


const initialState = {
  accessToken: null,
  refreshToken: null,
  loading: false,
  data: {
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,

  }
};

function user(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_TOKENS:
      const {accessToken, refreshToken} = action;
      return Object.assign({}, state, {accessToken, refreshToken});
    case GET_ME_BEGIN:
      return Object.assign({}, state, { loading: true });
    case UPDATE_USER_STATE:
    console.log('UPDATE_USER_STATE', action)
      return Object.assign({}, state, { loading: false }, { data: Object.assign({}, action.data)});
    // Add failure state
    case SPOTIFY_ME_FAILURE:
      return state;
    default:
      return state;
  }
}

export default user;
