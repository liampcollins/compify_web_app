class Competitions {


  createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }



  static getAllComps() {
    return fetch('http://localhost:3000/api/user/1/competitions', {mode: 'cors'}).then((response) => {
      console.log('resp:::', response)
      return response.json();
    }).catch((error) => {
      return error;
    });
  }
}

export default Competitions;
