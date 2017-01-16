class Competitions {

  static getAllComps(userId) {
    return fetch('http://localhost:3000/api/user/' + userId + '/competitions', {mode: 'cors'}).then((response) => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  }


  static addCompetition(data) {
    console.log('data - ', data)
    const request = new Request('http://localhost:3000/api/user/' + data.user_id + '/competitions', {
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
