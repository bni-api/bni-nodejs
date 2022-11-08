import { generateSignature, generateClientId } from '../src/lib/util/util.js';
import { strictEqual } from 'assert';

describe('util.js', () => {
  const clientId = generateClientId('Test APP');
  describe('generateClientId', () => {
    it('should return IDBNIVGVzdCBBUFA=', () => {
      strictEqual(clientId, 'IDBNIVGVzdCBBUFA=');
    });
  });

  describe('generateSignature', () => {
    it('should return eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IklEQk5JVkdWemRDQkJVRkE9IiwiYWNjb3VudE5vIjoiMDExNTQ3NjExNyJ9.ljWtFHL0dHhLPw97U8SVWsFV3fRIJItHlQ-HPqCRUwc', () => {
      const token = generateSignature({ body: { clientId: clientId, accountNo: '0115476117' }, apiSecret: 'test-secret' });
      strictEqual(token, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IklEQk5JVkdWemRDQkJVRkE9IiwiYWNjb3VudE5vIjoiMDExNTQ3NjExNyJ9.ljWtFHL0dHhLPw97U8SVWsFV3fRIJItHlQ-HPqCRUwc');
    });
  });
});