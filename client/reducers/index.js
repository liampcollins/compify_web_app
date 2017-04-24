import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playlists from './playlists';
import competitions from './competitions';
import user from './user';
import friends from './friends';

const rootReducer = combineReducers({user, playlists, competitions, friends, routing: routerReducer});

export default rootReducer;
