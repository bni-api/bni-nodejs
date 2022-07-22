// BNI API HOSTNAME
const SANDBOX_BASE_URL = 'https://newapidev.bni.co.id';
const PRODUCTION_BASE_URL = 'https://api.bni.co.id';

class Client {

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * prod, client_id, client_secret
   */
  constructor(options = {prod: false, client_id: '', client_secret: ''}) {
    this.config = options;
  }

  /**
   * Return config stored
   * @return {Object} object contains prod, client_id, client_secret
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