import usersApi from '../api/users';

export function userLogInSuccess() {
  return {
    type: 'USER_LOGIN'
  };
}

export function userLogIn() {
  return function(dispatch) {
    return usersApi.logIn()
    // .then(resp => {
    //   // dispatch(loadCompsSuccess(comps.data));
    // }).catch(error => {
    //   throw(error);
    // });
  };
}

export function userSignUp() {
  return {
    type: 'USER_SIGNUP'
  }
}
