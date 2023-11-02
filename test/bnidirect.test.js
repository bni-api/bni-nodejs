import { BniDirect, BNIClient } from '../src/index.js';
import { strictEqual } from 'assert';
import { constants } from './constant.js';

describe('bnidirect.js', () => {
  describe('balanceInquiry', () => {
    it('should return requestStatus 0', async () => {
      return balanceInquiry().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('domesticSingleBIFastTransfer.js', () => {
    it('should return requestStatus 0', async () => {
      return domesticSingleBIFastTransfer().then((res) =>
        strictEqual(res.requestStatus, '0')
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
  appName: constants.appName,
  bniDirectKey: constants.bniDirectKey
});

const bniDirect = new BniDirect(client);

const balanceInquiry = async () => {
  const res = await bniDirect.balanceInquiry({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
    accountList: ['116952891', '4447']
  });
  return res;
};

const domesticSingleBIFastTransfer = async () => {
  const res = await bniDirect.domesticSingleBIFastTransfer({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
    debitedAccountNo: '1000599764',
    amountCurrency: 'IDR',
    amount: '500000',
    exchangeRateCode: 'Cr',
    treasuryReferenceNo: '',
    chargeTo: 'OUR',
    remark1: 'BIFast-RMK1',
    remark2: 'BIFast-RMK1',
    remark3: 'BIFast-RMK1',
    remitterReferenceNo: 'UYYBI2103202314',
    finalizePaymentFlag: 'Y',
    beneficiaryReferenceNo: 'BENGTYRSD110',
    usedProxy: 'N',
    beneficiaryAccountNo: '9832132281',
    proxyId: '',
    beneficiaryBankCode: 'BBBAIDJA',
    beneficiaryBankName: 'Bank Permata',
    notificationFlag: 'N',
    beneficiaryEmail: '',
    transactionInstructionDate: '20231102',
    transactionPurposeCode: '01'
  });
  return res;
};
