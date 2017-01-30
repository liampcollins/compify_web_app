'user strict';
const path = require('path');
const express = require('express');
const session = require('express-session');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const querystring = require('querystring');
const app = express();
const compiler = webpack(config);
const stateKey = 'spotify_auth_state';
const cookieParser = require('cookie-parser');
const scope = ['user-read-private', 'user-read-email', 'playlist-read-private'];
const generateRandomString = (N) => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);
const usersApi = require('./client/api/users');
const spotifyApi = require('./spotify').spotifyApi;
const session_token = generateRandomString(16);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(cookieParser());
app.use(session({
  secret: process.env.compifySessionSecret,
  resave: false,
  saveUninitialized: true
}))

app.get('/spotifylogin', function(req, res) {
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
    spotifyApi.authorizationCodeGrant(code).then((data) => {
      const { expires_in, access_token, refresh_token } = data.body;
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);
      return spotifyApi.getMe().then((spotifyData) => {
        const body = Object.assign(spotifyData.body, {access_token, refresh_token, session_token});
        return usersApi.upsertUser(body);
      }).then((resp) => {
        const id = JSON.parse(resp.body).id;
        req.session.userId = id;
        res.redirect('/user/' + id);
      });
    }).catch((err) => {
      res.redirect('/#/error/invalid token');
    });
  }
});

app.get('/', function(req, res) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  return res.redirect('/user/' + req.session.userId);
});


app.get('/user/:id', function(req, res) {
  if (req.params.id !== req.session.userId) {
    return res.redirect('/login');
  }
  return res.redirect('/user/' + req.session.userId + '/competitions');
});

app.get('/user/:id/competitions/*', function(req, res) {
  console.log('dev server')
  if (req.params.id !== req.session.userId) {
    return res.redirect('/login');
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
