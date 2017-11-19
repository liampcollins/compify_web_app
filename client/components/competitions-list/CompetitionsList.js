import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from '../common/page-header/PageHeader.js';
import CompInGrid from './competition-preview/CompetitionPreview.js';
import compImage from '../../images/boombox.jpg';
import { connect } from 'react-redux';
import spotifyApi from '../../../spotify';
import Notifications, { success } from 'react-notification-system-redux';
import notificationCreator from '../../utils/notificationCreator';

import {
  getMyInfo,
  setTokens,
  loadComps,
  notify
} from '../../actions/actionCreators';

const notificationOpts = {
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};

const Competitions = React.createClass({
  createNotifications(user) {
    // if (user && user.notifications) {
    //   console.log('this.props.user.data.notifications', user.notifications)
    //   const notifications = [];
    //   for (var i = 0; i < user.notifications.length; i++) {
    //     notifications.push(notificationCreator.create(user.notifications[i]))
    //     user.notifications[i]
    //   }
    // }
    // this.props.dispatch(
    //   success(notificationOpts)
    // );
  },
  componentDidMount() {},
  render() {
    // const { user } = this.props;

    if (this.props.user) {
      this.createNotifications(this.props.user.data);
    }
    // const notificationData = {type: 0, ids: {compId: 5, userId: 39}}
    //
    // notificationCreator.create(notificationData, this.user);

    let notifications;
    if (this.user && this.user.notifications) {
      notifications = (
        <div>
          {this.user.notifications &&
            this.user.notifications.map((u, i) => <span>u</span>)}
        </div>
      );
    } else {
      notifications = <div />;
    }
    return (
      <div className="competitions">
        <PageHeader headerStart="Your" headerEnd="Competitions" />
        <div className="grid">
          {this.props.competitions.map((comp, i) => (
            <CompInGrid {...this.props} key={i} i={i} comp={comp} />
          ))}
        </div>
      </div>
    );
  }
});

export default connect((state) => state)(Competitions);
