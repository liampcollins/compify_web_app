import {
  SPOTIFY_TOKENS, SPOTIFY_ME_BEGIN, SPOTIFY_ME_SUCCESS, SPOTIFY_ME_FAILURE
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
    case SPOTIFY_ME_BEGIN:
      return Object.assign({}, state, { loading: true });
    case SPOTIFY_ME_SUCCESS:
    return Object.assign({}, state, { loading: false }, { data: Object.assign({}, action.data)});
    // Add failure state
    case SPOTIFY_ME_FAILURE:
      return state;
    default:
      return state;
  }
}

export default user;
