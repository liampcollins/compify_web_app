const request = require('request');
const rp = require('request-promise');
const Spotify = require('spotify-web-api-js');
const spotifyApi = new Spotify();
const config = require('../../config');
const baseUrl = config.api_url;
const webBaseUrl = config.web_api_url;

const getPlaylists = ((user) => {
  return spotifyApi.getUserPlaylists(user).then((data) => {
    return data;
  })
});

const User = {
  getUserPlaylists: (user) => {
    return getPlaylists(user).then().catch((e) => {
      console.log('error getting user playlists', e)
      if (e.status === 401) {
        // window.location = ('/login');
      }
    })
  },
  getUserFriends: (user) => {
    return rp.get(baseUrl + '/users/' + user.id + '/friends',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        json: true
      }
    ).then((resp) => {
      return resp.data;
    }).catch((err) => {
      console.log('Error getting user friends', err)
    })
  },
  upsertUser: (spotifyData) => {
    return rp.post(baseUrl + '/user',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(spotifyData)
      }
    ).then((resp) => {
      return resp;
    }).catch((err) => {
      console.log('Error upserting user', err)
    });
  },
  getUser: (id) => {
    return rp.get(baseUrl + '/users/' + id,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        json: true
      }
    ).then((resp) => {
      return resp.data;
    }).catch((err) => {
      console.log('Error getting user data', err)
    })
  },
  addFriend: (data) => {
    return rp.post(baseUrl + '/users/' + data.id + '/friend/new',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({info: data.info})
      }
    ).then((resp) => {
      return {data: JSON.parse(resp)};
    }).catch((err) => {
      console.log('Error adding friend', err)
    });
  }
}

module.exports = User;
