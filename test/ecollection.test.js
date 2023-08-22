// import { Rdl, BNIClient, Ecollection } from '../src/index.js';
// import { strictEqual, deepEqual } from 'assert';
// import { cred_rdl } from './constant.js';

// describe('ecollection.js', () => {
//     describe('inquiryAccountInfo', () => {
//         it('should return responseCode 0001', async () => {
//             const res = await inquiryAccountInfo();
//             strictEqual(res.response.responseCode, '0001');
//         });
//     });
// });

// const ecollection = new Ecollection(client);

// const inquiryAccountInfo = async () => {
//     const res = await Ecollection.inquiryAccountInfo({
//         type: "createbilling",
//         client_id: "001",
//         trx_id: "1230000001",
//         trx_amount: "100000",
//         billing_type: "c",
//         customer_name: "Mr. X",
//         customer_email: "xxx@email.com",
//         customer_phone: "08123123123",
//         virtual_account: "8001000000000001",
//         datetime_expired: "2016-03-01T16:00:00+07:00",
//         description: "Payment of Trx 123000001"
//     });
//     return res;
// };
