const SpotifyWebApi = require('spotify-web-api-node');
const clientId = process.env.spotifyClientId;
const clientSecret = process.env.spotifyClientSecret;
const redirectUri = 'http://localhost:7770/callback';
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
  redirectUri
});

const authorizationCodeGrant = (code) => {
  return spotifyApi.authorizationCodeGrant(code);
}

const createAuthorizeURL = (scope, state) => {
  return spotifyApi.createAuthorizeURL(scope, state)
}

const setAccessToken = (accessToken) => {
  return spotifyApi.setAccessToken(accessToken);
};

const setRefreshToken = (refresh_token) => {
  return spotifyApi.setRefreshToken(refresh_token);
};


const getMe = (name, defaultValue) => {
  return spotifyApi.getMe();
};


module.exports = {
  setAccessToken,
  setRefreshToken,
  getMe,
  createAuthorizeURL,
  authorizationCodeGrant,
  spotifyApi
};
