const HttpClient = require('./net/httpClient');

// BNI API HOSTNAME
const SANDBOX_BASE_URL = 'https://sandbox.bni.co.id';
const PRODUCTION_BASE_URL = 'https://api.bni.co.id';

class BNIClient {

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * prod, clientId, clientSecret, apiKey
   */
  constructor(options = { prod: false, appName, clientId, clientSecret, apiKey, apiSecret }) {
    this.config = options;
    this.httpClient = new HttpClient;
  }

  /**
   * Return config stored
   * @return {Object} object contains prod, clientId, clientSecret
   */
  getConfig() {
    return this.config;
  }

  /**
   * @return {String} api base url
   */
  getBaseUrl() {
    return this.config.prod ? PRODUCTION_BASE_URL : SANDBOX_BASE_URL;
  }

  async getToken() {
    const token = await this.httpClient.tokenRequest({
      url: `${this.getBaseUrl()}/api/oauth/token`,
      username: this.config.clientId,
      password: this.config.clientSecret
    });

    return token.access_token;
  }

}

module.exports = BNIClient;