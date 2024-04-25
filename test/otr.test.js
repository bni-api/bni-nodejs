import { BNIClient, OTR } from '../src/index.js';
import { strictEqual } from 'assert';
import { constants } from './constant.js';

describe('OTR Remittance', () => {
  // describe('bankAndCurrencyLimitation.js', () => {
  //   it('should return statusCode 0', async () => {
  //     return bankAndCurrencyLimitation().then((res) => strictEqual(res.statusCode, 0));
  //   });
  // });
  // describe('chargesAndRateInquiry.js', () => {
  //   it('should return statusCode 0', async () => {
  //     return chargesAndRateInquiry().then((res) =>
  //       strictEqual(res.statusCode, 0)
  //     );
  //   });
  // });
  // describe('transactionOverbooking.js', () => {
  //   it('should return statusCode 0', async () => {
  //     return transactionOverbooking().then((res) =>
  //       strictEqual(res.statusCode, 0)
  //     );
  //   });
  // });
  describe('trackingTransaction.js', () => {
    it('should return statusCode 0', async () => {
      return trackingTransaction().then((res) =>
        strictEqual(res.statusCode, 0)
      );
    });
  });
});

const client = new BNIClient({
  env: 'dev',
  clientId: constants.clientId,
  clientSecret: constants.clientSecret,
  apiKey: constants.apiKey,
  apiSecret: constants.apiSecret,
  appName: constants.appName
});

const otr = new OTR(client, {
  channelId: constants.channelId
});

const bankAndCurrencyLimitation = async () => {
  const res = await otr.bankAndCurrencyLimitation({
    serviceType: 'SWIFT',
    country: 'IDN'
  });
  return res;
};
const chargesAndRateInquiry = async () => {
  const res = await otr.chargesAndRateInquiry({
    orderingId: 'RESTTEST04',
    bic: 'INITU123456',
    serviceType: 'SWIFT',
    sourceCcy: 'SGD',
    orderingCcy: 'USD',
    detailCharges: 'SHA',
    orderingAmount: 5000
  });
  return res;
};
const transactionOverbooking = async () => {
  const res = await otr.transactionOverbooking({
    referenceNumber: 'string',
    orderingId: 'string',
    orderingBic: 'string',
    orderingName: 'string',
    orderingAddress: 'string',
    orderingEmail: 'string',
    orderingPhoneNumber: 'string',
    beneficiaryAccount: 'string',
    beneficiaryName: 'string',
    beneficiaryAddress: 'string',
    beneficiaryPhoneNumber: 'string',
    accountWithInstCode: 'string',
    accountWithInstBic: 'string',
    accountWithInstName: 'string',
    remittanceInfo: 'string',
    invoiceNumber: 'string',
    invoiceAmount: 1234
  });
  return res;
};
const trackingTransaction = async () => {
  const res = await otr.trackingTransaction();
  return res;
};
