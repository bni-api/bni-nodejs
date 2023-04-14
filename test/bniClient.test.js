import { BNIClient } from '../src/index.js';
import { strictEqual, deepEqual } from 'assert';

describe('bniClient.js', () => {
  describe('getBaseUrl', () => {
    it('should return https://newapidev.bni.co.id:8066', () => {
      const client = new BNIClient({ env: 'dev', clientId: '', clientSecret: '', apiKey: '' });
      strictEqual(client.getBaseUrl(), 'https://newapidev.bni.co.id:8066');
    });

    it('should return https://sandbox.bni.co.id', () => {
      const client = new BNIClient({ env: 'sandbox', clientId: '', clientSecret: '', apiKey: '' });
      strictEqual(client.getBaseUrl(), 'https://sandbox.bni.co.id');
    });

    it('should return https://api.bni.co.id', () => {
      const client = new BNIClient({ env: 'prod', clientId: '', clientSecret: '', apiKey: '' });
      strictEqual(client.getBaseUrl(), 'https://api.bni.co.id');
    });

    it('should return http://192.168.152.220:58066', () => {
      const client = new BNIClient({ env: 'sandbox-dev', clientId: '', clientSecret: '', apiKey: '' });
      strictEqual(client.getBaseUrl(), 'http://192.168.152.220:58066');
    });
  });

  describe('getConfig', () => {
    it('should return { env: \'Sandbox\', appName: \'Test APP\', clientId: \'test12345\', clientSecret: \'test54321\', apiKey: \'12345\' }', () => {
      const client = new BNIClient({
        env: 'sandbox',
        appName: 'Test APP',
        clientId: 'test12345',
        clientSecret: 'test54321',
        apiKey: '12345'
      });

      deepEqual(client.getConfig(), {
        env: 'sandbox',
        appName: 'Test APP',
        clientId: 'test12345',
        clientSecret: 'test54321',
        apiKey: '12345'
      });
    });
  });
});