const R = require('ramda');

const ntfcTypes = {
  competition_winner: 0,
  friend_requested_added: 1
}

const getBlankNtfc = () => {
  return {
    title: '',
    message: '',
    position: 'tr',
    autoDismiss: 0
  }
}

// const notificationOpts = {
//   title: 'Hey, it\'s good to see you!',
//   message: 'Now you can see how easy it is to use notifications in React!',
//   position: 'tr',
//   autoDismiss: 0,
//   action: {
//     label: 'Click me!!',
//     callback: () => alert('clicked!')
//   }
// };

const createCompWinnerNtfc = (ntfcInfo, user) => {
  console.log('ntfcInfo', ntfcInfo.ids)
  console.log('user', user.data.friends[0])
  var winner = R.filter((f) => f.id === ntfcInfo.ids.userId, user.data.friends);
  var competition = R.filter((c) => c.id === ntfcInfo.ids.compId, user.data.competitions);
  var ntfc = getBlankNtfc();
  console.log('competition', competition)
  ntfc.title = 'Competition winner!';
  ntfc.message = winner[0].username + ' has won the competition ' + competition[0].name;
  console.log('ntfc', ntfc)
  return ntfc;
}

const createFriendRequestedNtfc = () => {
  return
}

const create = (ntfcInfo, user) => {
  console.log('create', ntfcInfo.type)
  switch (ntfcInfo.type) {
    case ntfcTypes.competition_winner:
      return createCompWinnerNtfc(ntfcInfo, user)
      break;
    case ntfcTypes.friend_requested:
      return createFriendRequestedNtfc(ntfcInfo, user)
      break;

    default:
      return null;
  }
}

module.exports = {
  create
};
