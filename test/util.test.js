// const { generateSignature, generateClientId } = require('../lib/util/util');
// const assert = require('assert');

// describe('util.js', () => {
//   const clientId = generateClientId('Test APP');
//   describe('generateClientId', () => {
//     it('should return IDBNIVGVzdCBBUFA=', () => {
//       assert.strictEqual(clientId, 'IDBNIVGVzdCBBUFA=');
//     });
//   });

//   describe('generateSignature', () => {
//     it('should return eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IklEQk5JVkdWemRDQkJVRkE9IiwiYWNjb3VudE5vIjoiMDExNTQ3NjExNyJ9.ljWtFHL0dHhLPw97U8SVWsFV3fRIJItHlQ-HPqCRUwc', () => {
//       const token = generateSignature({ body: { clientId: clientId, accountNo: '0115476117' }, clientSecret: 'test-secret' });
//       assert.strictEqual(token, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IklEQk5JVkdWemRDQkJVRkE9IiwiYWNjb3VudE5vIjoiMDExNTQ3NjExNyJ9.ljWtFHL0dHhLPw97U8SVWsFV3fRIJItHlQ-HPqCRUwc');
//     });
//   });
// });