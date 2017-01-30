function playlists(state = [], action) {
  switch (action.type) {
    case 'GET_PLAYLISTS_BEGIN':
      return state;
      break;
    case 'GET_PLAYLISTS_SUCCESS':
      return action.data.items;
      break;
    default:
      return state;
  }
  return state
}

export default playlists;
