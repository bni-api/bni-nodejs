// import {BNIClient, Ecollection } from "../src/index.js";

// import { strictEqual } from 'assert';
// import sinon from 'sinon';

// const cred = {
//     clientId: "8-949",
//     clientSecret: "1acf2da3009e23d6e99055b0f047efa6",
//     apiKey: "{apiKey}",
//     apiSecret: "{apiSecret}",
//     appName: "{appName}"
// }

// const client = new BNIClient({
//     env: 'local',
//     clientId: cred.clientId,
//     clientSecret: cred.clientSecret,
//     apiKey: cred.apiKey,
//     apiSecret: cred.apiSecret,
//     appName: cred.appName
//   });

// const ecollection = new Ecollection(client)

// describe('ecollection.js', () => {
//     describe('createBilling', () => {    
//       it('should return statusCode 009', async () => {
//         // Create a sinon stub for the createBilling function
//         const createBillingStub = sinon.stub(ecollection, 'createBilling');
                
//         // Configure the stub to resolve with the mocked response
//         createBillingStub.resolves({
//             status: '009', // The response you want to mock
//             // Other properties as needed
//         });

//         const createBilling = async () => {
//           const res = await ecollection.createBilling({
//               customerName: "",
//               description: "",
//               trxAmount: "0",
//               billingType: "o",
//               customerEmail: "",
//               customerPhone: "",
//               datetimeExpired: "2023-12-31T23:59:59+07:00",
//               trxId: "Test-20230615-7",
//               type: "createbilling",
//               virtualAccount: ""
//           });
//           return res;
          
//         };
//         const res = await createBilling();
        
//         strictEqual(res.status, '009');
//         // Restore the stub to its original implementation after the test
//         createBillingStub.restore();
//       });

//       it('should return statusCode 105', async () => {
        
//         const createBillingStub = sinon.stub(ecollection, 'createBilling');
                
        
//         createBillingStub.resolves({
//             status: '105', 
//         });

//         const createBilling = async () => {
//           const res = await ecollection.createBilling({
//               customerName: "test",
//               description: "",
//               trxAmount: "1000",
//               billingType: "c",
//               customerEmail: "",
//               customerPhone: "",
//               datetimeExpired: "2023-08-12 11:47:44",
//               trxId: "12345678-sdk-1",
//               type: "createbilling",
//               virtualAccount: ""
//           });
//           return res;
//         };
//         const res = await createBilling();

//         strictEqual(res.status, '105');

//         createBillingStub.restore();
//       });

//       it('should return statusCode 000', async () => {

//         const createBillingStub = sinon.stub(ecollection, 'createBilling');
                
//         createBillingStub.resolves({
//             status: '000',
//         });

//         const createBilling = async () => {
//           return ecollection.createBilling({
//               customerName: "test pr",
//               description: "",
//               trxAmount: "1000",
//               billingType: "c",
//               customerEmail: "",
//               customerPhone: "",
//               datetimeExpired: "2023-08-23 11:47:44",
//               trxId: "12345678-sdk-111",
//               type: "createbilling",
//               virtualAccount: ""
//           });
//         };
//         const res = await createBilling();
        
//         strictEqual(res.status, '000');

//         createBillingStub.restore();
//       });
//     });

//     describe('inquiryBilling', () => {    
//       it('should return statusCode 009', async () => {
//         const inquiryBillingStub = sinon.stub(ecollection, 'inquiryBilling');
                
//         inquiryBillingStub.resolves({
//             status: '009', 
//         });

//         const inquiryBilling = async () => {
//           return ecollection.inquiryBilling({
//             trxId: "12345678-sdk-2",
//             type: "inquirybilling",
//           });          
//         };
//         const res = await inquiryBilling();
        
//         strictEqual(res.status, '009');

//         inquiryBillingStub.restore();
//       });

//       it('should return statusCode 000', async () => {
//         const inquiryBillingStub = sinon.stub(ecollection, 'inquiryBilling');
                
//         inquiryBillingStub.resolves({
//             status: '000', 
//         });

//         const inquiryBilling = async () => {
//           return ecollection.inquiryBilling({
//               trxId: "12345678-sdk-121",
//               type: "inquirybilling",
//           });          
//         };
//         const res = await inquiryBilling();
        
//         strictEqual(res.status, '000');
        
//         inquiryBillingStub.restore();
//       });

//       it('should return statusCode 996', async () => {
//         const inquiryBillingStub = sinon.stub(ecollection, 'inquiryBilling');
                
//         inquiryBillingStub.resolves({
//             status: '996',
//             message: 'Too many inquiry request per hour',
//         });

//         const inquiryBilling = async () => {
//           return ecollection.inquiryBilling({
//               trxId: "12345678-sdk-2",
//               type: "inquirybilling",
//           });          
//         };
//         const res = await inquiryBilling();
        
//         strictEqual(res.status, '996');
//         strictEqual(res.message, 'Too many inquiry request per hour');
        
//         inquiryBillingStub.restore();
//       });
//     });

//     describe('inactiveBilling', () => {    
//       it('should return statusCode 001', async () => {
//         const inactiveBillingStub = sinon.stub(ecollection, 'inactiveBilling');
                
//         inactiveBillingStub.resolves({
//             status: '001', 
//             message: 'Incomplete/invalid Parameter(s).',
//         });

//         const inactiveBilling = async () => {
//           return ecollection.inactiveBilling({
//             trxId: "12345678-sdk-2",
//             type: "inactivebilling",
//             virtualAccount: "123456789",
//           });          
//         };
//         const res = await inactiveBilling();
        
//         strictEqual(res.status, '001');
//         strictEqual(res.message, 'Incomplete/invalid Parameter(s).');

//         inactiveBillingStub.restore();
//       });

//       it('should return statusCode 000', async () => {
//         const inactiveBillingStub = sinon.stub(ecollection, 'inactiveBilling');
                
//         inactiveBillingStub.resolves({
//             status: '000', 
//         });

//         const inactiveBilling = async () => {
//           return ecollection.inactiveBilling({
//               trxId: "12345678-sdk-121",
//               type: "inactiveBilling",
//               virtualAccount: "8949230818133201",
//           });          
//         };
//         const res = await inactiveBilling();
        
//         strictEqual(res.status, '000');
        
//         inactiveBillingStub.restore();
//       });

//       it('should return statusCode 103', async () => {
//         const inactiveBillingStub = sinon.stub(ecollection, 'inactiveBilling');
                
//         inactiveBillingStub.resolves({
//             status: '103',
//             message: 'Billing has been expired.', 
//         });

//         const inactiveBilling = async () => {
//           return ecollection.inactiveBilling({
//               trxId: "12345678-sdk-5",
//               type: "inactiveBilling",
//               virtualAccount: "8949230815105101",
//           });          
//         };
//         const res = await inactiveBilling();
        
//         strictEqual(res.status, '103');
//         strictEqual(res.message, 'Billing has been expired.');
        
//         inactiveBillingStub.restore();
//       });
//     });

//     describe('updateBilling', () => {    
//       it('should return statusCode 012', async () => {
//         const updateBillingStub = sinon.stub(ecollection, 'updateBilling');
                
//         updateBillingStub.resolves({
//             status: '012', 
//             message: 'Invalid Expiry Datetime.',
//         });

//         const updateBilling = async () => {
//           return ecollection.updateBilling({
//             trxId: "12345678-sdk-5",
//             type: "updateBilling",
//             datetimeExpired: "2023-09-13 11:47:44",
//             trxAmount: "0",
//             customerName: "test name",
//             customerEmail: "mail@gmail.com",
//             customerPhone: "08122334455",
//             description: "test name",
//             virtualAccount: "1234567890",
//           });          
//         };
//         const res = await updateBilling();
        
//         strictEqual(res.status, '012');
//         strictEqual(res.message, 'Invalid Expiry Datetime.');

//         updateBillingStub.restore();
//       });

//       it('should return statusCode 000', async () => {
//         const updateBillingStub = sinon.stub(ecollection, 'updateBilling');
                
//         updateBillingStub.resolves({
//             status: '000', 
//         });

//         const updateBilling = async () => {
//           return ecollection.updateBilling({
//             trxId: "12345678-sdk-122",
//             type: "updateBilling",
//             datetimeExpired: "2023-09-13 11:47:44",
//             trxAmount: "1000",
//             customerName: "test name",
//             customerEmail: "mail@gmail.com",
//             customerPhone: "08122334455",
//             description: "test name",
//             virtualAccount: "8949230818133701",
//           });          
//         };
//         const res = await updateBilling();
//         strictEqual(res.status, '000');
        
//         updateBillingStub.restore();
//       });

//       it('should return statusCode 011', async () => {
//         const updateBillingStub = sinon.stub(ecollection, 'updateBilling');
                
//         updateBillingStub.resolves({
//             status: '011',
//             message: 'Billing type does not match billing amount.', 
//         });

//         const updateBilling = async () => {
//           return ecollection.updateBilling({
//             trxId: "12345678-sdk-6",
//             type: "updateBilling",
//             datetimeExpired: "2023-09-13 11:47:44",
//             trxAmount: "0",
//             customerName: "test name",
//             customerEmail: "mail@gmail.com",
//             customerPhone: "08122334455",
//             description: "test name",
//             virtualAccount: "1234567890",
//           });          
//         };
//         const res = await updateBilling();
        
//         strictEqual(res.status, '011');
//         strictEqual(res.message, 'Billing type does not match billing amount.');
        
//         updateBillingStub.restore();
//       });
//     });
// })