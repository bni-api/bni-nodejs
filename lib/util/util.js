const crypto = require('crypto');

const escape = (string) => {
  return string.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

module.exports = {
  generateSignature: (params = { body, apiSecret }) => {
    
    // generate JWT header
    const header = escape(Buffer.from('{"alg":"HS256","typ":"JWT"}').toString('base64'));

    // generate JWT payload
    const payload = escape(Buffer.from(JSON.stringify(params.body)).toString('base64'));

    // generate JWT signature
    const jwtSignature = crypto.createHmac('SHA256', params.apiSecret).update(`${header}.${payload}`).digest('base64');

    // return generated JWT token
    return escape(`${header}.${payload}.${jwtSignature}`);
  },

  generateClientId: (appName) => {
    return `IDBNI${Buffer.from(appName).toString('base64')}`;
  }
};