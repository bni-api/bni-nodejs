const crypto = require('crypto');

module.exports = {
  generateSignature: (params = { body, apiSecret }) => {
    // generate JWT header
    const header = Buffer.from('{"alg":"HS256","typ":"JWT"}').toString('base64');

    // generate JWT payload
    const payload = Buffer.from(JSON.stringify(params.body)).toString('base64');

    // generate JWT signature
    const jwtSignature = crypto.createHmac('SHA256', params.apiSecret).update(`${header}.${payload}`).digest('base64');

    // return generated JWT token
    return `${header}.${payload}.${jwtSignature}`.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  },

  generateClientId: (appName) => {
    return `IDBNI${Buffer.from(appName).toString('base64')}`;
  }
};