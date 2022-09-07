const BNIClient = require('../lib/bniClient');
const OneGatePayment = require('../lib/api/oneGatePayment');
const assert = require('assert');
const credential = require('./constant.json');

describe('oneGatePayment.js', () => {

  describe('getBalance', () => {

    it('should return responseCode 0001', () => {
      return getBalance().then((res) => {
        assert.strictEqual(res.getBalanceResponse.parameters.responseCode, '0001');
      });
    });

  });

  describe('getInHouseInquiry', () => {

    it('should return responseCode 0001', () => {
      return getInHouseInquiry().then((res) => {
        assert.strictEqual(res.getInHouseInquiryResponse.parameters.responseCode, '0001');
      });
    });

  });

  describe('doPayment', () => {

    it('should return responseCode 0001', () => {
      return doPayment().then((res) => {
        assert.strictEqual(res.doPaymentResponse.parameters.responseCode, '0001');
      });
    });

  });

  describe('getPaymentStatus', () => {

    it('should return responseCode 0001', () => {
      return getPaymentStatus().then((res) => {
        assert.strictEqual(res.getPaymentStatusResponse.parameters.responseCode, '0001');
      });
    });

  });

  describe('getInterBankInquiry', () => {
    it('should return responseCode 0001', () => {
      return getInterBankInquiry().then((res) => {
        assert.strictEqual(res.getInterbankInquiryResponse.parameters.responseCode, '0001');
      });
    });
  });

  describe('getInterBankPayment', () => {
    it('should return responseCode 0001', () => {
      return getInterBankPayment().then((res) => {
        assert.strictEqual(res.getInterbankPaymentResponse.parameters.responseCode, '0001');
      });
    });
  });

  describe('holdAmount', ()=>{
    it('should return responseCode 0001', ()=>{
      return holdAmount().then((res)=>{
        assert.strictEqual(res.holdAmountResponse.parameters.responseCode, '0001');
      });
    });
  });

  describe('holdAmountRelease', ()=>{
    it('should return responseCode 0001', ()=>{
      return holdAmountRelease().then((res)=>{
        assert.strictEqual(res.holdAmountReleaseResponse.parameters.responseCode, '0001');
      });
    });
  });
});

const client = new BNIClient({
  prod: false,
  clientId: credential.one_gate_payment.clientId,
  clientSecret: credential.one_gate_payment.clientSecret,
  apiKey: credential.one_gate_payment.apiKey,
  apiSecret: credential.one_gate_payment.apiSecret,
  appName: credential.one_gate_payment.appName
});

const getBalance = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getBalance({
    accountNo: '115471119'
  });
  return res;
};

const getInHouseInquiry = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getInHouseInquiry({
    accountNo: '115471119'
  });
  return res;
};

const doPayment = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.doPayment({
    customerReferenceNumber: '20170227000000000020',
    paymentMethod: '0',
    debitAccountNo: '113183203',
    creditAccountNo: '115471119',
    valueDate: '20170227000000000',
    valueCurrency: 'IDR',
    valueAmount: '100500',
    remark: '?',
    beneficiaryEmailAddress: '',
    beneficiaryName: 'Mr.X',
    beneficiaryAddress1: 'Jakarta',
    beneficiaryAddress2: '',
    destinationBankCode: 'CENAIDJAXXX',
    chargingModelId: 'OUR'
  });
  return res;
};

const getPaymentStatus = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getPaymentStatus({
    customerReferenceNumber: '20170227000000000020'
  });
  return res;
};

const getInterBankInquiry = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getInterBankInquiry({
    customerReferenceNumber: '20180930112233003',
    accountNum: '0115476117',
    destinationBankCode: '014',
    destinationAccountNum: '01400000'
  });
  return res;
};

const getInterBankPayment = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getInterBankPayment({
    customerReferenceNumber: '20180930112233005',
    amount: '12007',
    destinationAccountNum: '01400000',
    destinationAccountName: 'Bpk HANS',
    destinationBankCode: '014',
    destinationBankName: 'BCA',
    accountNum: '0316031099',
    retrievalReffNum: '100000000097'
  });
  return res;
};

const holdAmount = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.holdAmount({
    customerReferenceNumber: '20181001112233009',
    amount: '12007',
    accountNo: '0115476151',
    detail: 'testHold'
  });
  return res;
};

const holdAmountRelease = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.holdAmountRelease({
    'customerReferenceNumber': '20181001112233010',
    'amount': '12007',
    'accountNo': '0115476151',
    'bankReference': '657364',
    'holdTransactionDate': '31052010'
  });
  return res;
};