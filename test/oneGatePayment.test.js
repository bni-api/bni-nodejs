const BNIClient = require('../lib/bniClient');
const OneGatePayment = require('../lib/api/oneGatePayment');

describe('oneGatePayment.js', () => {
  describe('getBalance', () => {
    const client = new BNIClient({ prod: false, clientId: '', clientSecret: '' });
    const ogp = new OneGatePayment(client);
    ogp.getBalance({accountNo: '115471119'})
  })
})