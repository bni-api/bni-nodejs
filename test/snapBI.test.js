const BNIClient = require('../lib/bniClient');
const SnapBI = require('../lib/api/snapBI');
const assert = require('assert');

describe('snapBI.js', () => {

  // describe('getBalanceInquiry', () => {

  //   it('should return responseCode 2000000', () => {
  //     return getBalanceInquiry().then((res) => {
  //       assert.strictEqual(res.responseCode, '2000000');
  //     });
  //   });

  // });

  // describe('getBankStatement', () => {

  //   it('should return responseCode 2001400', () => {
  //     return getBankStatement().then((res) => {
  //       console.log(res);
  //       assert.strictEqual(res.responseCode, '2001400');
  //     });
  //   });

  // });

  // describe('getInternalAccountInquiry', () => {

  //   it('should return responseCode 2001500', () => {
  //     return getInternalAccountInquiry().then((res) => {
  //       assert.strictEqual(res.responseCode, '2001500');
  //     });
  //   });

  // });

  // describe('getTransactionStatusInquiry', () => {

  //   it('should return responseCode 2003600', () => {
  //     return getTransactionStatusInquiry().then((res) => {
  //       assert.strictEqual(res.responseCode, '2003600');
  //     });
  //   });

  // });

//   describe('getTransferIntraBank', () => {

//     it('should return responseCode 2001700', () => {
//       return getTransferIntraBank().then((res) => {
//         assert.strictEqual(res.responseCode, '2001700');
//       });
//     });

//   });

//   describe('getTransferRTGS', () => {

//     it('should return responseCode 2002200', () => {
//       return getTransferRTGS().then((res) => {
//         assert.strictEqual(res.responseCode, '2002200');
//       });
//     });

//   });

//   describe('getTransferSKNBI', () => {

//     it('should return responseCode 2002300', () => {
//       return getTransferSKNBI().then((res) => {
//         assert.strictEqual(res.responseCode, '2002300');
//       });
//     });

//   });

    describe('getExternalAccountInquiry', () => {

        it('should return responseCode 2001600', () => {
        return getExternalAccountInquiry().then((res) => {
            assert.strictEqual(res.responseCode, '2001600');
        });
        });

    });

    // describe('getTransferInterBank', () => {

    //     it('should return responseCode 2001800', () => {
    //     return getTransferInterBank().then((res) => {
    //         assert.strictEqual(res.responseCode, '2001800');
    //     });
    //     });

    // });

});

const client = new BNIClient({
  prod: false,
  clientId: '0bed55cb-c25d-4f07-9c5f-78f7c8aac9da',
  clientSecret: '46987047-6d56-410d-b43c-abdd247abac2',
  apiKey: '91ea86f6-387a-49f9-bc55-670e4d2ef67b',
  apiSecret: 'cc914c89-6b65-475d-a450-58ee4199a1b2',
  appName: 'Test Wawat'
});

const getBalanceInquiry = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.balanceInquiry({
    partnerReferenceNo: '202010290000000000002',
    accountNo: '0115476117'
  });
  return res;
};

const getBankStatement = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.bankStatement({
    partnerReferenceNo: '202102102021',
    accountNo: '115233527',
    fromDateTime: '2010-01-01T12:08:56+07:00',
    toDateTime: '2011-01-01T12:08:56+07:00'
  });
  return res;
};

  
const getInternalAccountInquiry = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.internalAccountInquiry({
    partnerReferenceNo: '202010290000000000002',
    beneficiaryAccountNo: '0115476151'
  });
  return res;
};

const getTransactionStatusInquiry = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transactionStatusInquiry({
    originalPartnerReferenceNo: '202201911020000121',
    originalReferenceNo: '220531103343739748',
    originalExternalId: '20220531103340',
    serviceCode: '17',
    transactionDate: '2022-05-31',
    amount: {
      value: '15000.00',
      currency: 'IDR'
    },
    additionalInfo: {
      deviceId: '123456',
      channel: 'mobilephone'
    }
  });
  return res;
};

const getTransferIntraBank = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferIntraBank({
    partnerReferenceNo: '20220902170737356700',
    amount: {
      value: '55000.00',
      currency: 'IDR'
    },
    beneficiaryAccountNo: '0115476151',
    beneficiaryEmail: '',
    currency: 'IDR',
    customerReference: '20220902170737356700',
    feeType: 'OUR',
    remark: 'DANA20220426170737356898YuliantoSariputra',
    sourceAccountNo: '0115476117',
    transactionDate: '2022-09-02T11:43:36+07:00',
    additionalInfo: {
      deviceId: '123456',
      channel: 'mobilephone'
    }
  });
  return res;
};

const getTransferRTGS = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferRTGS({
    partnerReferenceNo: '20220513095840015788857',
    amount: {
      value: '100000001.00',
      currency: 'IDR'
    },
    beneficiaryAccountName: 'PTZomatoMediaIndonesia',
    beneficiaryAccountNo: '3333333333',
    beneficiaryAccountAddress: 'JlGatotSubrotoNoKav18RW1KuninganBarKecMampangPrptKotaJakartaSelatanDaerahKhususIbukotaJakarta12710',
    beneficiaryBankCode: 'CENAIDJA',
    beneficiaryBankName: 'PTBANKCENTRALASIATbk',
    beneficiaryCustomerResidence: '1',
    beneficiaryCustomerType: '2',
    beneficiaryEmail: '',
    currency: 'IDR',
    customerReference: '20220513095840015788857',
    feeType: 'OUR',
    kodePos: '-',
    recieverPhone: '-',
    remark: 'DANA20220513095840015788857PTZomatoMediaIndonesia',
    senderCustomerResidence: '-',
    senderCustomerType: '-',
    senderPhone: '',
    sourceAccountNo: '0115476151',
    transactionDate: '2020-06-17T01:03:04+07:00',
    additionalInfo: {
      deviceId: '',
      channel: ''
    }
  });
  return res;
};

const getTransferSKNBI = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferSKNBI({
    partnerReferenceNo: '20220523150428586179325',
    amount: {
      value: '10000001.00',
      currency: 'IDR'
    },
    beneficiaryAccountName: 'PTZomatoMediaIndonesia',
    beneficiaryAccountNo: '0115476117',
    beneficiaryAddress: 'JlGatotSubrotoNoKav18RW1KuninganBarKecMampangPrptKotaJakartaSelatanDaerahKhususIbukotaJakarta12710',
    beneficiaryBankCode: 'CENAIDJAXXX',
    beneficiaryBankName: 'PTBANKCENTRALASIATbk',
    beneficiaryCustomerResidence: '1',
    beneficiaryCustomerType: '2',
    beneficiaryEmail: '',
    currency: 'IDR',
    customerReference: '20220523150428586179325',
    feeType: 'OUR',
    kodePos: '',
    recieverPhone: '',
    remark: 'DANA20220523150428586179325PTZomatoMediaIndonesia',
    senderCustomerResidence: '',
    senderCustomerType: '',
    senderPhone: '',
    sourceAccountNo: '0115476151',
    transactionDate: '2020-06-17T01:03:04+07:00',
    additionalInfo: {
      deviceId: '',
      channel: ''
    }
  });
  return res;
};

const getExternalAccountInquiry = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.externalAccountInquiry({
    beneficiaryBankCode: '002',
    beneficiaryAccountNo: '888801000157508',
    partnerReferenceNo: '2020102900000000000001',
    additionalInfo: {
      deviceId: '123456',
      channel: 'mobilephone'
    }
  });
  return res;
};

const getTransferInterBank = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferInterBank({
    partnerReferenceNo: '2022090254000000000021',
    amount: {
      value: '55000',
      currency: 'IDR'
    },
    beneficiaryAccountName: 'BONIFASIUSPRIOKO',
    beneficiaryAccountNo: '3333333333',
    beneficiaryAddress: 'Palembang',
    beneficiaryBankCode: '014',
    beneficiaryBankName: 'BCA',
    beneficiaryEmail: 'yories.yolanda@work.bri.co.id',
    currency: 'IDR',
    customerReference: '10052025',
    sourceAccountNo: '0115476151',
    transactionDate: '2022-06-14T12:08:56+07:00',
    feeType: 'OUR',
    additionalInfo: {
      deviceId: '12345679237',
      channel: 'mobilephone'
    }
  });
  return res;
};
