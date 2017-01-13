'user strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const querystring = require('querystring');
const Spotify = require('spotify-web-api-node');
const app = express();
const compiler = webpack(config);
const clientId = 'c7603c0f841e4dbbabf1ae1b45a339b7';
const clientSecret = 'b6185192c0e14664aba51b4e2c3c3bc9';
const redirectUri = 'http://localhost:7770/callback';
const stateKey = 'spotify_auth_state';
const cookieParser = require('cookie-parser');
const scope = ['user-read-private', 'user-read-email'];
const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);
const spotifyApi = new Spotify({
  clientId,
  clientSecret,
  redirectUri
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(cookieParser());

app.get('/login', function(req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);
  res.redirect(spotifyApi.createAuthorizeURL(scope, state));
});

app.get('/callback', (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[stateKey] : null;
  if (state === null || state !== storedState) {
    res.redirect('/#/error/state mismatch');
  } else {
    res.clearCookie(stateKey);
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const { expires_in, access_token, refresh_token } = data.body;

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      res.redirect(`/competitions/${access_token}/${refresh_token}`);
    }).catch((err) => {
      res.redirect('/#/error/invalid token');
    });
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
