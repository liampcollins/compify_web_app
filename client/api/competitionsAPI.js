class CompetitionsAPI {
  static getAllComps() {
    return fetch('http://localhost:3000/api/competitions', {mode: 'cors'}).then((response) => {
      console.log('resp:::', response)
      return response.json();
    }).catch((error) => {
      return error;
    });
  }
}

export default CompetitionsAPI;
