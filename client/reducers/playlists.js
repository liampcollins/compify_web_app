function playlists(state = [], action) {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return [...state, action.playlist];
    case 'DELETE_PLAYLIST':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
      break;
    case 'LOAD_PLAYLISTS_SUCCESS':
      return action.playlists
      break;
    default:
      return state;
  }
  return state
}

export default playlists;
