const crypto = require('crypto');

module.exports = {
  generateSignature: (params = { body, apiSecret }) => {
    // generate JWT header
    let header = Buffer.from('{"alg":"HS256","typ":"JWT"}').toString('base64');
    header = header.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

    // generate JWT payload
    let payload = Buffer.from(JSON.stringify(params.body)).toString('base64');
    payload = payload.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

    // generate JWT signature
    const jwtSignature = crypto.createHmac('SHA256', params.apiSecret).update(`${header}.${payload}`).digest('base64');

    // return generated JWT token
    return `${header}.${payload}.${jwtSignature}`.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  },

  generateClientId: (appName) => {
    return `IDBNI${Buffer.from(appName).toString('base64')}`;
  }
};