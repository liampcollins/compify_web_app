'user strict';
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var querystring = require('querystring');
var request = require('request'); // "Request" library

var app = express();
var compiler = webpack(config);

const client_id = '';
const client_secret = '';
const redirect_uri = 'http://localhost:7770/callback';
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/login', function(req, res) {

console.log('at login', res)
  // var state = generateRandomString(16);
  var state = '2343fsefsdfe'
  // res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id,
      scope,
      redirect_uri,
      state
    }));
});

app.get('/callback', function(req, res) {
  console.log('REQ:', req.query)
  var code = req.query.code || null;
  var state = req.query.state || null;
  // var storedState = req.cookies ? req.cookies[stateKey] : null;

  // if (state === null || state !== storedState) {
  if (false) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    // res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      console.log('BODY: ', body)
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          if (error) {
            res.redirect('/');
            // some error notification
          }
          // save user if doesn't exist (for now, just ensure userId and username mapping)
          console.log('body - ', body);

          var userDetails = {
            url: 'http://localhost:3000/api/users',
            form: {
              username: body.id,
              email: body.email,
              spotify_token: access_token
            },
            json: true
          };

          request.post(userDetails, function(error, response, body) {
            if (!error && response.statusCode === 200) {
            }
            if (response) {
              console.log('response', response)
              res.redirect('/')
            }
            if (body) {
              console.log('body2', body)
              res.redirect('/')
            }
          })
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/' +
          querystring.stringify({
            access_token,
            refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
})

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
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
