const BNIClient = require("../lib/bniClient");
const OneGatePayment = require("../lib/api/oneGatePayment");
const assert = require('assert');
const { doesNotMatch } = require("assert");

describe("oneGatePayment.js", () => {

  describe("getBalance", () => {

    it(`should return responseCode 0001`, () => {
      return getBalance().then((res) => {
        assert.strictEqual(res.getBalanceResponse.parameters.responseCode,"0001");
      });
    });
    
  });

  describe("getInHouseInquiry", () => {

    it(`should return responseCode 0001`, () => {
      return getInHouseInquiry().then((res) => {
        assert.strictEqual(res.getInHouseInquiryResponse.parameters.responseCode,"0001");
      });
    });
    
  });

  describe("doPayment", () => {

    it(`should return responseCode 0001`, () => {
      return doPayment().then((res) => {
        assert.strictEqual(res.doPaymentResponse.parameters.responseCode,"0001");
      });
    });
    
  });

  describe("getPaymentStatus", () => {

    it(`should return responseCode 0001`, () => {
      return getPaymentStatus().then((res) => {
        assert.strictEqual(res.getPaymentStatusResponse.parameters.responseCode,"0001");
      });
    });
    
  });
});

const client = new BNIClient({
  prod: false,
  clientId: "ff19bcb7-3a15-4d0b-97b1-f36f9cf9bdb2",
  clientSecret: "d227997a-3525-442d-b80e-2ab2e7d908f0",
  apiKey: "98c4277f-866d-46b0-ba83-d3e0e37e667e",
  apiSecret: "b3b58219-8a88-401f-89c0-f2dc5bb7ce21",
  appName: "Test Wawat",
});

const getBalance = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getBalance({ accountNo: "115471119" });
  return res;
};

const getInHouseInquiry = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getInHouseInquiry({ accountNo: "115471119" });
  return res;
};

const doPayment = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.doPayment({
    customerReferenceNumber: "20170227000000000020",
    paymentMethod: "0",
    debitAccountNo: "113183203",
    creditAccountNo: "115471119",
    valueDate: "20170227000000000",
    valueCurrency: "IDR",
    valueAmount: 100500,
    remark: "?",
    beneficiaryEmailAddress: "",
    beneficiaryName: "Mr.X",
    beneficiaryAddress1: "Jakarta",
    beneficiaryAddress2: "",
    destinationBankCode: "CENAIDJAXXX",
    chargingModelId: "OUR",
  });
  return res;
};

const getPaymentStatus = async () => {
  const ogp = new OneGatePayment(client);
  const res = await ogp.getPaymentStatus({
    customerReferenceNumber: "20170227000000000020",
  });
  return res;
};