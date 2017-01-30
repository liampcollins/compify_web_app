const request = require('request');
const rp = require('request-promise');

const User = {
  upsertUser: (spotifyData) => {
    return request({
      url: 'http://localhost:3000/api/users',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spotifyData)
    }, function(error, response, body) {
      return body.data;
    });
  },
  getUser: (id) => {
    return rp.get('http://localhost:3000/api/users/' + id,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        json: true
      }
    ).then((resp) => {
      console.log('RESP', resp)
      return resp.data;
    }).catch((err) => {
      console.log('Error getting user data', err)
    })
  }
}

module.exports = User;
