const axios = require('axios').default;
const qs = require('qs');

class HttpClient {

  constructor() {
    this.httpClient = axios.create();
  }

  tokenRequest(url, username, password) {
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': 'bni-nodejs/0.1.0'
    };

    return new Promise(async (resolve, reject) => {
      // TODO add request body validation

      try {
        const res = await this.httpClient({
          method: 'POST',
          headers: headers,
          url: url,
          auth: {
            username: username,
            password: password
          },
          data: qs.stringify({
            grant_type: "client_credentials"
          })
        });

        // TODO check and handle response error

        resolve(res.data);
      } catch (err) {
        // TODO handle error response

        reject(err);
      }
    })
  }

  request(method, apiKey, accessToken, url, data) {
    const headers = {
      'content-type': 'application/json',
      'user-agent': 'bni-nodejs/0.1.0',
      'x-api-key': apiKey
    };

    return new Promise(async (resolve, reject) => {
      // TODO add request body validation

      try {
        const res = await this.httpClient({
          method: method,
          headers: headers,
          url: url,
          params: { access_token: accessToken },
          data: data,
        });

        // TODO check and handle response error

        resolve(res.data);
      } catch (err) {
        // TODO handle error response

        reject(err);
      }
    })
  }
}

module.exports = HttpClient;