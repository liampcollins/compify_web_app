import React from 'react';
import CompInGrid from './CompInGrid'
import compImage from '../../images/boombox.jpg';
import { connect } from 'react-redux';
import {
  getMyInfo,
  setTokens,
  loadComps
} from '../../actions/actionCreators';

const Competitions = React.createClass({
  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {dispatch, params} = this.props;
    const {accessToken, refreshToken} = params;
    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getMyInfo());
  },
  render() {
    const { accessToken, refreshToken, user } = this.props;
    const { display_name, images, id, email, external_urls, href, country, product } = user.data;
    // const imageUrl = images[0] ? images[0].url : '';
    if (user.loading) {
      return <h2>Loading...</h2>;
    }
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
