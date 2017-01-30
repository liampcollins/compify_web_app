class Playlists {

  static addPlaylist(data) {
    const request = new Request('http://localhost:3000/api/competition/' + data.competition_id + '/playlists', {
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

export default Playlists;
