// import { BNIClient, SnapBI } from '../src/index.js';
// import { strictEqual } from 'assert';
// import { constants } from './constant.js';

// describe('snapBI.js', () => {

//   describe('getBalanceInquiry', () => {

//     it('should return responseCode 2000000', async () => {
//       const res = await getBalanceInquiry();
//       strictEqual(res.responseCode, '2001100');
//     });

//   });

//   describe('getInternalAccountInquiry', () => {

//     it('should return responseCode 2001500', async () => {
//       const res = await getInternalAccountInquiry();
//       strictEqual(res.responseCode, '2001500');
//     });

//   });

//   describe('getTransactionStatusInquiry', () => {

//     it('should return responseCode 2003600', async () => {
//       const res = await getTransactionStatusInquiry();
//       strictEqual(res.responseCode, '2003600');
//     });

//   });

//   describe('getTransferIntraBank', () => {

//     it('should return responseCode 2001700', async () => {
//       const res = await getTransferIntraBank();
//       strictEqual(res.responseCode, '2001700');
//     });

//   });

//   describe('getTransferRTGS', () => {

//     it('should return responseCode 2002200', async () => {
//       const res = await getTransferRTGS();
//       strictEqual(res.responseCode, '2002200');
//     });

//   });

//   describe('getTransferSKNBI', () => {

//     it('should return responseCode 2002300', async () => {
//       const res = await getTransferSKNBI();
//       strictEqual(res.responseCode, '2002300');
//     });

//   });

//   describe('getExternalAccountInquiry', () => {

//     it('should return responseCode 2001600', async () => {
//       const res = await getExternalAccountInquiry();
//       strictEqual(res.responseCode, '2001600');
//     });

//   });

//   describe('getTransferInterBank', () => {

//     it('should return responseCode 2001800', async () => {
//       const res = await getTransferInterBank();
//       strictEqual(res.responseCode, '2001800');
//     });

//   });

// });

// const client = new BNIClient({
//   env: 'dev',
//   clientId: constants.clientId,
//   clientSecret: constants.clientSecret,
//   apiKey: constants.apiKey,
//   apiSecret: constants.apiSecret,
//   appName: constants.appName,
//   privateKeyPath: constants.privateKeyPath
// });
// const snap = new SnapBI(
//   client, {
//     privateKeyPath: constants.privateKey,
//     channelId: constants.channelId,
//     ipAddress: constants.ipAddress,
//     latitude: constants.latitude,
//     longitude: constants.longitude 
//   });

// const getBalanceInquiry = async () => {
//   const res = await snap.balanceInquiry({
//     partnerReferenceNo: '202010290000000000002',
//     accountNo: '0115476117'
//   });
//   return res;
// };
// const getInternalAccountInquiry = async () => {
//   const res = await snap.internalAccountInquiry({
//     partnerReferenceNo: '2023062601000000000509',
//     beneficiaryAccountNo: '317125693'
//   });
//   return res;
// };
// const getTransactionStatusInquiry = async () => {
//   const res = await snap.transactionStatusInquiry({
//     originalPartnerReferenceNo: '202310271020300006',
//     originalReferenceNo: '',
//     originalExternalId: '',
//     serviceCode: '22',
//     transactionDate: '',
//     amount: {
//       value: '110000010',
//       currency: 'IDR'
//     },
//     additionalInfo: {
//       deviceId: '09864ADCASA',
//       channel: 'API'
//     }
//   });
//   return res;
// };
// const getTransferIntraBank = async () => {
//   const res = await snap.transferIntraBank({
//     partnerReferenceNo: '20220426170737356898',
//     amount: {
//       value: '55000.00',
//       currency: 'IDR'
//     },
//     beneficiaryAccountNo: '0115476151',
//     beneficiaryEmail: '',
//     currency: 'IDR',
//     customerReference: '20220426170737356898',
//     feeType: 'OUR',
//     remark: '20220426170737356898',
//     sourceAccountNo: '0115476117',
//     transactionDate: '2022-04-26T17:07:36+07:00',
//     additionalInfo: {
//       deviceId: '123456',
//       channel: 'mobilephone'
//     }
//   });
//   return res;
// };
// const getTransferRTGS = async () => {
//   const res = await snap.transferRTGS({
//     partnerReferenceNo: '20220513095840015788857',
//     amount: {
//       value: '100000001.00',
//       currency: 'IDR'
//     },
//     beneficiaryAccountName: 'PTZomatoMediaIndonesia',
//     beneficiaryAccountNo: '3333333333',
//     beneficiaryAccountAddress: 'JlGatotSubrotoNoKav18RW1KuninganBarKecMampangPrptKotaJakartaSelatanDaerahKhususIbukotaJakarta12710',
//     beneficiaryBankCode: 'CENAIDJA',
//     beneficiaryBankName: 'PTBANKCENTRALASIATbk',
//     beneficiaryCustomerResidence: '1',
//     beneficiaryCustomerType: '2',
//     beneficiaryEmail: '',
//     currency: 'IDR',
//     customerReference: '20220513095840015788857',
//     feeType: 'OUR',
//     kodePos: '-',
//     recieverPhone: '-',
//     remark: 'DANA20220513095840015788857PTZomatoMediaIndonesia',
//     senderCustomerResidence: '-',
//     senderCustomerType: '-',
//     senderPhone: '',
//     sourceAccountNo: '0115476151',
//     transactionDate: '2020-06-17T01:03:04+07:00',
//     additionalInfo: {
//       deviceId: '',
//       channel: ''
//     }
//   });
//   return res;
// };
// const getTransferSKNBI = async () => {
//   const res = await snap.transferSKNBI({
//     partnerReferenceNo: '20220523150428586179325',
//     amount: {
//       value: '10000001.00',
//       currency: 'IDR'
//     },
//     beneficiaryAccountName: 'PTZomatoMediaIndonesia',
//     beneficiaryAccountNo: '0115476117',
//     beneficiaryAddress: 'JlGatotSubrotoNoKav18RW1KuninganBarKecMampangPrptKotaJakartaSelatanDaerahKhususIbukotaJakarta12710',
//     beneficiaryBankCode: 'CENAIDJAXXX',
//     beneficiaryBankName: 'PTBANKCENTRALASIATbk',
//     beneficiaryCustomerResidence: '1',
//     beneficiaryCustomerType: '2',
//     beneficiaryEmail: '',
//     currency: 'IDR',
//     customerReference: '20220523150428586179325',
//     feeType: 'OUR',
//     kodePos: '',
//     recieverPhone: '',
//     remark: 'DANA20220523150428586179325PTZomatoMediaIndonesia',
//     senderCustomerResidence: '',
//     senderCustomerType: '',
//     senderPhone: '',
//     sourceAccountNo: '0115476151',
//     transactionDate: '2020-06-17T01:03:04+07:00',
//     additionalInfo: {
//       deviceId: '',
//       channel: ''
//     }
//   });
//   return res;
// };
// const getExternalAccountInquiry = async () => {
//   const res = await snap.externalAccountInquiry({
//     partnerReferenceNo: '20240226163135663',
//     beneficiaryBankCode: 'CENAIDJAXXX',
//     beneficiaryAccountNo: '123456789',
//     additionalInfo: {
//       deviceId: '09864ADCASA',
//       channel: 'API'
//     }
//   });
//   return res;
// };
// const getTransferInterBank = async () => {
//   const res = await snap.transferInterBank({
//     partnerReferenceNo: '20240226163731861',
//     amount: {
//       value: '20000',
//       currency: 'IDR'
//     },
//     beneficiaryAccountName: 'SRI ANGGRAINI',
//     beneficiaryAccountNo: '0000000986',
//     beneficiaryAddress: 'Palembang',
//     beneficiaryBankCode: '014',
//     beneficiaryBankName: 'Bank BCA',
//     beneficiaryEmail: 'customertes@outlook.com',
//     currency: 'IDR',
//     customerReference: '20231219085',
//     sourceAccountNo: '1000161562',
//     transactionDate: '2024-01-04T08:37:08+07:00',
//     feeType: 'OUR',
//     additionalInfo: {
//       deviceId: '09864ADCASA',
//       channel: 'API'
//     }
//   });
//   return res;
// };
