import competitionsApi from '../api/competitions';
const userActions = require('./userActions');
const competitionActions = require('./competitionActions');
const R = require('ramda');
const all = R.mergeAll([userActions, competitionActions]);

console.log('all', all)
module.exports = all;
