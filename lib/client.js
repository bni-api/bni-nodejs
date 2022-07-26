// BNI API HOSTNAME
const SANDBOX_BASE_URL = 'https://newapidev.bni.co.id';
const PRODUCTION_BASE_URL = 'https://api.bni.co.id';

class Client {

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * prod, clientId, clientSecret
   */
  constructor(options = {prod: false, clientId: '', clientSecret: ''}) {
    this.config = options;
  }

  /**
   * Return config stored
   * @return {Object} object contains prod, clientId, clientSecret
   */
  getConfig() {
    return this.config
  }

  /**
   * @return {String} api base url
   */
  getBaseUrl() {
    return this.config.prod ? PRODUCTION_BASE_URL : SANDBOX_BASE_URL;
  }
}

module.exports = Client;