class Users {
  static upsertUser(spotifyData) {
    const request = new Request('http://localhost:3000/api/users', {
    	method: 'POST',
    	mode: 'cors',
      headers: new Headers({
    		'Content-Type': 'application/json'
    	}),
      body: JSON.stringify(spotifyData)
    });
    return fetch(request).then((response) => {
      return response.json();
    }).catch((error) => {
      console.log('errorx', error)
      return error;
    });
  }
}

export default Users;
