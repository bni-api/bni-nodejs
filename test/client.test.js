const bni = require('../index')
const assert = require('assert')

describe('client', () => {
  describe('getBaseUrl', () => {
    it(`should return https://newapidev.bni.co.id`, () => {
      const client = new bni.Client({prod: false, clientId: '', clientSecret: ''});
      assert.strictEqual(client.getBaseUrl(), 'https://newapidev.bni.co.id');
    })

    it(`should return https://api.bni.co.id`, () => {
      const client = new bni.Client({prod: true, clientId: '', clientSecret: ''});
      assert.strictEqual(client.getBaseUrl(), 'https://api.bni.co.id');
    })
  })

  describe('getConfig', () => {
    it(`should return {prod: false, clientId: 'test12345', clientSecret: 'test54321'}`, () => {
      const client = new bni.Client({prod: false, clientId: 'test12345', clientSecret: 'test54321'});
      assert.deepEqual(client.getConfig(), {prod: false, clientId: 'test12345', clientSecret: 'test54321'});
    })
  })
})