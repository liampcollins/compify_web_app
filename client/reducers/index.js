import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playlists from './playlists';
import competitions from './competitions';
import users from './users';

const rootReducer = combineReducers({users, competitions, playlists, routing: routerReducer});

export default rootReducer;
