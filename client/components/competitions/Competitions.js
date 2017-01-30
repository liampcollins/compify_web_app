import React from 'react';
import CompInGrid from './CompInGrid'
import compImage from '../../images/boombox.jpg';
import { connect } from 'react-redux';
import spotifyApi from '../../../spotify';

import {
  getMyInfo,
  setTokens,
  loadComps
} from '../../actions/actionCreators';

const Competitions = React.createClass({
  render() {
    const { user } = this.props;
    return (
      <div className="competitions">
        <h2 className="grid-title">Your competitions</h2>
        <div className="competitions-grid">
          {this.props.competitions.map((comp,i) =>
            <CompInGrid {...this.props} key={i} i={i} comp={comp}/>
          )}
        </div>
      </div>
    )
  }
})

export default connect((state) => state)(Competitions);
