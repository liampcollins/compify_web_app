import competitionsApi from '../api/competitions';

export function loadCompsSuccess(comps) {
  return {
    type: 'LOAD_COMPS_SUCCESS',
    comps
  };
}

export function loadComps() {
  return function(dispatch) {
    return competitionsApi.getAllComps().then(comps => {
      dispatch(loadCompsSuccess(comps.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addCompetition (comp) {
  console.log('comp: ', comp)
  return {
    type: 'ADD_COMPETITION',
    comp
  }
}

export function deleteCompetition (i) {
  console.log('i: ', i)
  return {
    type: 'DELETE_COMPETITION',
    i
  }
}
