function competitions(state = [], action) {
  switch (action.type) {
    case 'ADD_COMPETITION':
      return [...state, action.comp];
    case 'DELETE_COMPETITION':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
      break;
    // case 'LOAD_COMPS_SUCCESS':
    //   return action.comps
    //   break;
    default:
      return state;
  }
  return state
}

export default competitions;
