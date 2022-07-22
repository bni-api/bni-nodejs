const assert = require('assert')
const bni = require('../index')

describe('client', () => {
  describe('getBaseUrl', () => {
    it(`should return https://newapidev.bni.co.id`, () => {
      const client = new bni.Client({prod: false, client_id: '', client_secret: ''});
      assert.strictEqual(client.getBaseUrl(), 'https://newapidev.bni.co.id');
    })

    it(`should return https://api.bni.co.id`, () => {
      const client = new bni.Client({prod: true, client_id: '', client_secret: ''});
      assert.strictEqual(client.getBaseUrl(), 'https://api.bni.co.id');
    })
  })

  describe('getConfig', () => {
    it(`should return {prod: false, client_id: 'test12345', client_secret: 'test54321'}`, () => {
      const client = new bni.Client({prod: false, client_id: 'test12345', client_secret: 'test54321'});
      assert.deepEqual(client.getConfig(), {prod: false, client_id: 'test12345', client_secret: 'test54321'});
    })
  })
})