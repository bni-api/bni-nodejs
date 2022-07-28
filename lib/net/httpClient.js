const axios = require('axios').default;
const qs = require('qs');
const https = require('https');

class HttpClient {

  constructor() {
    this.httpClient = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    });
  }

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * url, username, password
   * 
   * @return {Object} promse with resolve or reject
   * 
   */

  tokenRequest(options = { url, username, password }) {
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
          url: options.url,
          auth: {
            username: options.username,
            password: options.password
          },
          data: qs.stringify({
            grant_type: 'client_credentials'
          })
        });

        // TODO check and handle response error
        
        resolve(res.data);
      } catch (err) {
        // TODO handle error response

        reject(err);
      }
    });
  }

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * method, apiKey, accessToken, url, data
   * 
   * @return {Object} promse with resolve or reject
   * 
   */

  request(options = { method, apiKey, accessToken, url, data }) {
    const headers = {
      'content-type': 'application/json',
      'user-agent': 'bni-nodejs/0.1.0',
      'x-api-key': options.apiKey
    };

    return new Promise(async (resolve, reject) => {
      // TODO add request body validation

      try {
        const res = await this.httpClient({
          method: options.method,
          headers: headers,
          url: options.url,
          params: { access_token: options.accessToken },
          data: options.data,
        });

        // TODO check and handle response error

        resolve(res.data);
      } catch (err) {
        // TODO handle error response

        reject(err);
      }
    });
  }
}

module.exports = HttpClient;