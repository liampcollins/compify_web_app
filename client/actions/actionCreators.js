import competitionsApi from '../api/competitionsApi';

export function loadCompsSuccess(comps) {
  return {
    type: 'LOAD_COMPS_SUCCESS',
    comps
  };
}

export function loadComps() {
  console.log('load comps!')
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return competitionsApi.getAllComps().then(comps => {
      dispatch(loadCompsSuccess(comps));
    }).catch(error => {
      throw(error);
    });
  };
}


// add competition
export function addCompetition (comp) {
  console.log('comp: ', comp)
  return {
    type: 'ADD_COMPETITION',
    comp
  }
}

// delete competition
export function deleteCompetition (i) {
  console.log('i: ', i)
  return {
    type: 'DELETE_COMPETITION',
    i
  }
}
