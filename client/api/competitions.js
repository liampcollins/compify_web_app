const config = require('../../config');
const baseUrl = config.api_url;

class Competitions {
  static addCompetition(data) {
    const request = new Request(baseUrl + '/api/user/' + data.user_id + '/competitions', {
    	method: 'POST',
    	mode: 'cors',
      headers: new Headers({
    		'Content-Type': 'application/json'
    	}),
      body: JSON.stringify(data)
    });
    return fetch(request).then((response) => {
      return response.json();
    }).catch((error) => {
      console.log('error', error)
      return error;
    });
  }

  static addPlaylistToComp(data) {
    const request = new Request(baseUrl + '/api/competition/' + data.competition_id + '/playlists', {
    	method: 'POST',
    	mode: 'cors',
      headers: new Headers({
    		'Content-Type': 'application/json'
    	}),
      body: JSON.stringify(data)
    });
    return fetch(request).then((response) => {
      return response.json();
    }).catch((error) => {
      console.log('error', error)
      return error;
    });
  }
}

export default Competitions;
