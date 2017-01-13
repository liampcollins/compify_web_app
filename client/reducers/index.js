import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playlists from './playlists';
import competitions from './competitions';
import user from './user';

const rootReducer = combineReducers({user, competitions, playlists, routing: routerReducer});

export default rootReducer;
