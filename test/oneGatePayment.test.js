// import { BNIClient, OneGatePayment } from '../src/index.js';
// import { strictEqual } from 'assert';
// import { constants } from './constant.js';

// describe('oneGatePayment.js', () => {

//   describe('getBalance', () => {

//     it('should return responseCode 0001', async () => {
//       const res = await getBalance();
//       strictEqual(res.getBalanceResponse.parameters.responseCode, '0001');
//     });

//   });

//   describe('getInHouseInquiry', () => {

//     it('should return responseCode 0001', async () => {
//       const res = await getInHouseInquiry();
//       strictEqual(res.getInHouseInquiryResponse.parameters.responseCode, '0001');
//     });

//   });

//   describe('doPayment', () => {

//     it('should return responseCode 0001', async () => {
//       const res = await doPayment();
//       strictEqual(res.doPaymentResponse.parameters.responseCode, '0001');
//     });

//   });

//   describe('getPaymentStatus', () => {

//     it('should return responseCode 0001', async () => {
//       const res = await getPaymentStatus();
//       strictEqual(res.getPaymentStatusResponse.parameters.responseCode, '0001');
//     });

//   });

//   describe('getInterBankInquiry', () => {
//     it('should return responseCode 0001', async () => {
//       const res = await getInterBankInquiry();
//       strictEqual(res.getInterbankInquiryResponse.parameters.responseCode, '0001');
//     });
//   });

//   describe('getInterBankPayment', () => {
//     it('should return responseCode 0001', async () => {
//       const res = await getInterBankPayment();
//       strictEqual(res.getInterbankPaymentResponse.parameters.responseCode, '0001');
//     });
//   });

//   describe('holdAmount', () => {
//     it('should return responseCode 0001', async () => {
//       const res = await holdAmount();
//       strictEqual(res.holdAmountResponse.parameters.responseCode, '0001');
//     });
//   });

//   describe('holdAmountRelease', () => {
//     it('should return responseCode 0001', async () => {
//       const res = await holdAmountRelease();
//       strictEqual(res.holdAmountReleaseResponse.parameters.responseCode, '0001');
//     });
//   });
// });

// const client = new BNIClient({
//   env: 'sandbox',
//   clientId: constants.clientId,
//   clientSecret: constants.clientSecret,
//   apiKey: constants.apiKey,
//   apiSecret: constants.apiSecret,
//   appName: constants.appName
// });
// const ogp = new OneGatePayment(client);

// const getBalance = async () => {
//   const res = await ogp.getBalance({
//     accountNo: '115471119'
//   });
//   return res;
// };

// const getInHouseInquiry = async () => {
//   const res = await ogp.getInHouseInquiry({
//     accountNo: '115471119'
//   });
//   return res;
// };

// const doPayment = async () => {
//   const res = await ogp.doPayment({
//     customerReferenceNumber: '20170227000000000020',
//     paymentMethod: '0',
//     debitAccountNo: '113183203',
//     creditAccountNo: '115471119',
//     valueDate: '20170227000000000',
//     valueCurrency: 'IDR',
//     valueAmount: '100500',
//     remark: '?',
//     beneficiaryEmailAddress: '',
//     beneficiaryName: 'Mr.X',
//     beneficiaryAddress1: 'Jakarta',
//     beneficiaryAddress2: '',
//     destinationBankCode: 'CENAIDJAXXX',
//     chargingModelId: 'OUR'
//   });
//   return res;
// };

// const getPaymentStatus = async () => {
//   const res = await ogp.getPaymentStatus({
//     customerReferenceNumber: '20170227000000000020'
//   });
//   return res;
// };

// const getInterBankInquiry = async () => {
//   const res = await ogp.getInterBankInquiry({
//     customerReferenceNumber: '20180930112233003',
//     accountNum: '0115476117',
//     destinationBankCode: '014',
//     destinationAccountNum: '01400000'
//   });
//   return res;
// };

// const getInterBankPayment = async () => {
//   const res = await ogp.getInterBankPayment({
//     customerReferenceNumber: '20180930112233005',
//     amount: '12007',
//     destinationAccountNum: '01400000',
//     destinationAccountName: 'Bpk HANS',
//     destinationBankCode: '014',
//     destinationBankName: 'BCA',
//     accountNum: '0316031099',
//     retrievalReffNum: '100000000097'
//   });
//   return res;
// };

// const holdAmount = async () => {
//   const res = await ogp.holdAmount({
//     customerReferenceNumber: '20181001112233009',
//     amount: '12007',
//     accountNo: '0115476151',
//     detail: 'testHold'
//   });
//   return res;
// };

// const holdAmountRelease = async () => {
//   const res = await ogp.holdAmountRelease({
//     'customerReferenceNumber': '20181001112233010',
//     'amount': '12007',
//     'accountNo': '0115476151',
//     'bankReference': '657364',
//     'holdTransactionDate': '31052010'
//   });
//   return res;
// };