const BNIClient = require('../lib/bniClient');
const SnapBI = require('../lib/api/snapBI');
const assert = require('assert');
const credential = require('./constant.json');

describe('snapBI.js', () => {

  describe('getBalanceInquiry', () => {

    it('should return responseCode 2001100', () => {
      return getBalanceInquiry().then((res) => {
        assert.strictEqual(res.responseCode, '2001100');
      });
    });

  });

  describe('getBalanceInquiryFailed', () => {

    it('should return responseCode 4001102', () => {
      return getBalanceInquiryFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4001102');
      });
    });

  });

  describe('getBankStatement', () => {

    it('should return responseCode 2001400', () => {
      return getBankStatement().then((res) => {
        assert.strictEqual(res.responseCode, '2001400');
      });
    });

  });

  describe('getBankStatementFailed', () => {

    it('should return responseCode 4001402', () => {
      return getBankStatementFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4001402');
      });
    });

  });

  describe('getInternalAccountInquiry', () => {

    it('should return responseCode 2001500', () => {
      return getInternalAccountInquiry().then((res) => {
        assert.strictEqual(res.responseCode, '2001500');
      });
    });

  });

  describe('getInternalAccountInquiryFailed', () => {

    it('should return responseCode 4001502', () => {
      return getInternalAccountInquiryFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4001502');
      });
    });

  });

  describe('getTransactionStatusInquiry', () => {

    it('should return responseCode 2003600', () => {
      return getTransactionStatusInquiry().then((res) => {
        assert.strictEqual(res.responseCode, '2003600');
      });
    });

  });

  describe('getTransactionStatusInquiryFailed', () => {

    it('should return responseCode 4003602', () => {
      return getTransactionStatusInquiryFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4003602');
      });
    });

  });

  describe('getTransferIntraBank', () => {

    it('should return responseCode 2001700', () => {
      return getTransferIntraBank().then((res) => {
        assert.strictEqual(res.responseCode, '2001700');
      });
    });

  });

  describe('getTransferIntraBankFailed', () => {

    it('should return responseCode 4001702', () => {
      return getTransferIntraBankFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4001702');
      });
    });

  });

  describe('getTransferRTGS', () => {

    it('should return responseCode 2002200', () => {
      return getTransferRTGS().then((res) => {
        assert.strictEqual(res.responseCode, '2002200');
      });
    });

  });

  describe('getTransferRTGSFailed', () => {

    it('should return responseCode 4002202', () => {
      return getTransferRTGSFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4002202');
      });
    });

  });

  describe('getTransferSKNBI', () => {

    it('should return responseCode 2002300', () => {
      return getTransferSKNBI().then((res) => {
        assert.strictEqual(res.responseCode, '2002300');
      });
    });

  });

  describe('getTransferSKNBIFailed', () => {

    it('should return responseCode 4002302', () => {
      return getTransferSKNBIFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4002302');
      });
    });

  });

  describe('getExternalAccountInquiry', () => {

    it('should return responseCode 2001600', () => {
      return getExternalAccountInquiry().then((res) => {
        assert.strictEqual(res.responseCode, '2001600');
      });
    });

  });

  describe('getExternalAccountInquiryFailed', () => {

    it('should return responseCode 4001602', () => {
      return getExternalAccountInquiryFailed().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4001602');
      });
    });

  });

  describe('getTransferInterBank', () => {

    it('should return responseCode 2001800', () => {
      return getTransferInterBank().then((res) => {
        assert.strictEqual(res.responseCode, '2001800');
      });
    });

  });

  describe('getTransferInterBankFailed', () => {

    it('should return responseCode 4001802', () => {
      return getTransferInterBank().then().catch((err) => {
        assert.strictEqual(err.response.data.responseCode, '4001802');
      });
    });
  });

});

const client = new BNIClient({
  prod: false,
  clientId: credential.snap_bi.clientId,
  clientSecret: credential.snap_bi.clientSecret,
  apiKey: credential.snap_bi.apiKey,
  apiSecret: credential.snap_bi.apiSecret,
  appName: credential.snap_bi.appName
});

const getBalanceInquiry = async () => {
  const snap = new SnapBI(client, { privateKeyPath: credential.snap_bi.privateKey, channelId: credential.snap_bi.channelId });
  const res = await snap.balanceInquiry({
    partnerReferenceNo: '202010290000000000002',
    accountNo: '0115476117'
  });
  return res;
};

const getBalanceInquiryFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: credential.snap_bi.privateKey, channelId: credential.snap_bi.channelId });
  const res = await snap.balanceInquiry({
    partnerReferenceNo: '202010290000000000002ssss',
    accountNo: '0115476117ssss'
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

const getBankStatementFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.bankStatement({
    partnerReferenceNo: '202102102021sssss',
    accountNo: '115233527ssss',
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

const getInternalAccountInquiryFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.internalAccountInquiry({
    partnerReferenceNo: '202010290000000000002ssss',
    beneficiaryAccountNo: '0115476151sssss'
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

const getTransactionStatusInquiryFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transactionStatusInquiry({
    originalPartnerReferenceNo: '202201911020000121ss',
    originalReferenceNo: '220531103343739748ss',
    originalExternalId: '20220531103340ss',
    serviceCode: '17ss',
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
    partnerReferenceNo: '207113OO00842662',
    amount: {
      value: '500000.00',
      currency: 'IDR'
    },
    beneficiaryAccountNo: '1000161562',
    beneficiaryEmail: '',
    currency: 'IDR',
    customerReference: '207113OO00842662',
    feeType: 'OUR',
    remark: 'DANA20220426170737356898YuliantoSariputra',
    sourceAccountNo: '1000164314',
    transactionDate: '2022-09-05T10:29:57+07:00',
    additionalInfo: {
      deviceId: '123456',
      channel: 'mobilephone'
    }
  });
  return res;
};

const getTransferIntraBankFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferIntraBank({
    partnerReferenceNo: '207113OO00842662sss',
    amount: {
      value: '500000.00',
      currency: 'IDR'
    },
    beneficiaryAccountNo: '1000161562ss',
    beneficiaryEmail: '',
    currency: 'IDR',
    customerReference: '207113OO00842662ss',
    feeType: 'OUR',
    remark: 'DANA20220426170737356898YuliantoSariputra',
    sourceAccountNo: '1000164314',
    transactionDate: '2022-09-05T10:29:57+07:00',
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

const getTransferRTGSFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferRTGS({
    partnerReferenceNo: '20220513095840015788857asd',
    amount: {
      value: '100000001.00',
      currency: 'IDR'
    },
    beneficiaryAccountName: 'PTZomatoMediaIndonesia',
    beneficiaryAccountNo: '3333333333ssss',
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
    sourceAccountNo: '0115476151ss',
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

const getTransferSKNBIFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferSKNBI({
    partnerReferenceNo: '20220523150428586179325ss',
    amount: {
      value: '10000001.00',
      currency: 'IDR'
    },
    beneficiaryAccountName: 'PTZomatoMediaIndonesia',
    beneficiaryAccountNo: '0115476117sss',
    beneficiaryAddress: 'JlGatotSubrotoNoKav18RW1KuninganBarKecMampangPrptKotaJakartaSelatanDaerahKhususIbukotaJakarta12710',
    beneficiaryBankCode: 'CENAIDJAXXX',
    beneficiaryBankName: 'PTBANKCENTRALASIATbk',
    beneficiaryCustomerResidence: '1',
    beneficiaryCustomerType: '2',
    beneficiaryEmail: '',
    currency: 'IDR',
    customerReference: '20220523150428586179325ss',
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

const getExternalAccountInquiryFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.externalAccountInquiry({
    beneficiaryBankCode: '002',
    beneficiaryAccountNo: '888801000157508ss',
    partnerReferenceNo: '2020102900000000000001ss',
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

const getTransferInterBankFailed = async () => {
  const snap = new SnapBI(client, { privateKeyPath: './private.key', channelId: '95221' });
  const res = await snap.transferInterBank({
    partnerReferenceNo: '2022090254000000000021ss',
    amount: {
      value: '55000',
      currency: 'IDR'
    },
    beneficiaryAccountName: 'BONIFASIUSPRIOKO',
    beneficiaryAccountNo: '3333333333ss',
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
