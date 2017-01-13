import competitionsApi from '../api/competitions';
const userActions = require('./userActions');
const competitionActions = require('./competitionActions');
const playlistActions = require('./playlistActions');
const R = require('ramda');
const all = R.mergeAll([userActions, competitionActions, playlistActions]);

module.exports = all;
