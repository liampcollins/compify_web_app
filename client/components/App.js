import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
console.log('actionCreators', actionCreators)
function mapStateToProps(state) {
  return {
    competitions: state.competitions,
    playlists: state.playlists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const  App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
