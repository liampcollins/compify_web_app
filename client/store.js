import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


// import the route reducer
import rootReducer from './reducers/index';

var thunk = require('redux-thunk').default
// create object for default data
const defaultState = {
  playlists: [],
  competitions: [],
  user: {},
  friends: [],
  notifications: []
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk),
  enhancers,
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
