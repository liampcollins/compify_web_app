import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playlists from './playlists';
import competitions from './competitions';

const rootReducer = combineReducers({competitions, playlists, routing: routerReducer});

export default rootReducer;
