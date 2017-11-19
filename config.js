var config = {};

config.env = 'dev';
config.web_api_url =
  config.env === 'dev' ? 'http://localhost:7770' : 'http://www.compify.com';
config.api_url =
  config.env === 'dev' ? 'http://localhost:3000/api' : 'http://api.compiy.com';
config.api_key_name = 'compify_api_key';
config.spotify_auth_scopes = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'user-follow-read'
];
config.client_id = process.env.spotifyClientId;
config.client_secret = process.env.spotifyClientSecret;
config.redirect_uri = config.web_api_url + '/callback';

module.exports = config;
