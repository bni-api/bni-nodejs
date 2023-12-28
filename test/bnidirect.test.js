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
  describe('bniPopsCashAndCarry.js', () => {
    it('should return requestStatus 0', async () => {
      return bniPopsCashAndCarry().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('bniPopsProductAllocation.js', () => {
    it('should return requestStatus 0', async () => {
      return bniPopsProductAllocation().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('bniPopsResubmitCashAndCarry.js', () => {
    it('should return requestStatus 0', async () => {
      return bniPopsResubmitCashAndCarry().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('bniPopsResubmitProductAllocation.js', () => {
    it('should return requestStatus 0', async () => {
      return bniPopsResubmitProductAllocation().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('bulkGetStatus.js', () => {
    it('should return requestStatus 0', async () => {
      return bulkGetStatus().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('inquiryVirtualAccountTransaction.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryVirtualAccountTransaction().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('updateVirtualAccount.js', () => {
    it('should return requestStatus 0', async () => {
      return updateVirtualAccount().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('createVirtualAccount.js', () => {
    it('should return requestStatus 0', async () => {
      return createVirtualAccount().then((res) =>
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

const bniPopsCashAndCarry = async () => {
  const res = await bniDirect.bniPopsCashAndCarry({
    corporateId: 'companymb',
    userId: 'jenomaker',
    debitAccountNo: '108098391',
    salesOrganizationCode: '1001',
    distributionChannelCode: '10',
    productCode: '04',
    shipTo: '700258',
    debitOrCreditNoteNo: 'def',
    productInformationDetail: [
      {
        materialCode: 'A040900002',
        trip: '1',
        quantity: '2',
        deliveryDate: '20231228',
        transportir: 'abcd'
      }
    ]
  });
  return res;
};

const bniPopsProductAllocation = async () => {
  const res = await bniDirect.bniPopsProductAllocation({
    corporateId: 'companymb',
    userId: 'jenomaker',
    debitAccountNo: '115208364',
    salesOrganizationCode: '1002',
    distributionChannelCode: '10',
    productCode: '04',
    shipTo: '1123123',
    scheduleAggreementNo: '118282812',
    debitOrCreditNoteNo: '123231',
    productInformationDetail: [
      {
        materialCode: 'A040900001',
        trip: '1123123',
        quantity: '100',
        deliveryDate: '20231119',
        transportir: ''
      }
    ]
  });
  return res;
};

const bniPopsResubmitCashAndCarry = async () => {
  const res = await bniDirect.bniPopsResubmitCashAndCarry({
    corporateId: 'companymb',
    userId: 'jenomaker',
    transactionReferenceNo: '201809181708919534',
    SONumber: ''
  });
  return res;
};

const bniPopsResubmitProductAllocation = async () => {
  const res = await bniDirect.bniPopsResubmitProductAllocation({
    corporateId: 'companymb',
    userId: 'jenomaker',
    transactionReferenceNo: '201809181708919534',
    SONumber: ''
  });
  return res;
};

const bulkGetStatus = async () => {
  const res = await bniDirect.bulkGetStatus({
    corporateId: 'companymb',
    userId: 'jenomaker',
    fileRefNo: '',
    apiRefNo: '34ab87f29e88c23a'
  });
  return res;
};

const inquiryVirtualAccountTransaction = async () => {
  const res = await bniDirect.inquiryVirtualAccountTransaction({
    corporateId: 'companymb',
    userId: 'jenomaker',
    virtualAccountNo: '8310000011112323',
    fromDate: '20161015',
    toDate: '20201015'
  });
  return res;
};

const updateVirtualAccount = async () => {
  const res = await bniDirect.updateVirtualAccount({
    corporateId: 'companymb',
    userId: 'jenomaker',
    companyCode: '8310',
    virtualAccountNo: '8310888800009999',
    virtualAccountName: 'SHORT NAME',
    virtualAccountTypeCode: '7',
    billingAmount: '100000',
    varAmount1: '',
    varAmount2: '',
    expiryDate: '20201120',
    expiryTime: '10:10:10',
    mobilePhoneNo: '08712717272',
    statusCode: '1'
  });
  return res;
};

const createVirtualAccount = async () => {
  const res = await bniDirect.createVirtualAccount({
    corporateId: 'companymb',
    userId: 'jenomaker',
    companyCode: '98800011',
    virtualAccountNo: '16623254',
    virtualAccountName: 'Agus KEREN1',
    virtualAccountTypeCode: '7',
    billingAmount: '800000',
    varAmount1: '200000',
    varAmount2: '120000',
    expiryDate: '20201021',
    expiryTime: '11:09:08',
    mobilePhoneNo: '08432432432',
    statusCode: '1'
  });
  return res;
};
