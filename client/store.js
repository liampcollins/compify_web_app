import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


// import the route reducer
import rootReducer from './reducers/index';

import competitions from './data/competitions';
import playlists from './data/playlists';
import {loadComps} from './actions/actionCreators';
var thunk = require('redux-thunk').default
// create object for default data
const defaultState = {
  competitions,
  playlists
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk), enhancers);
store.dispatch(loadComps());

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
