const { BNIClient } = require('../index')
const assert = require('assert')

describe('bniClient.js', () => {
  describe('getBaseUrl', () => {
    it(`should return https://newapidev.bni.co.id`, () => {
      const client = new BNIClient({ prod: false, clientId: '', clientSecret: '', apiKey: '' });
      assert.strictEqual(client.getBaseUrl(), 'https://newapidev.bni.co.id');
    })

    it(`should return https://api.bni.co.id`, () => {
      const client = new BNIClient({ prod: true, clientId: '', clientSecret: '', apiKey: '' });
      assert.strictEqual(client.getBaseUrl(), 'https://api.bni.co.id');
    })
  })

  describe('getConfig', () => {
    it(`should return {prod: false, clientId: 'test12345', clientSecret: 'test54321', apiKey: '12345'}`, () => {
      const client = new BNIClient({ prod: false, clientId: 'test12345', clientSecret: 'test54321', apiKey: '12345' });
      assert.deepEqual(client.getConfig(), { prod: false, clientId: 'test12345', clientSecret: 'test54321', apiKey: '12345' });
    })
  })
})