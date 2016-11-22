class Users {


  static createCORSRequest(method, url) {
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



  static logIn() {
    var xhr = this.createCORSRequest('GET', 'https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:7770F%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09');
    if (!xhr) {
       throw new Error('CORS not supported');
    }
    xhr.onload = function() {
       var responseText = xhr.responseText;

       // process the response.
       console.log(responseText);
    };

    xhr.onerror = function() {
       console.log('There was an error!');
    };
    xhr.send();

    // return fetch('https://accounts.spotify.com/authorize?client_id=c7603c0f841e4dbbabf1ae1b45a339b7&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:7770&scope=user-read-private%20user-read-email&state=34fFs29kd09').then((response) => {
    //   return response.json();
    // }).catch((error) => {
    //   return error;
    // });
  }
}

export default Users;
