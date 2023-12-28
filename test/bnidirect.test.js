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
  describe('createMpnG2BillingId.js', () => {
    it('should return requestStatus 0', async () => {
      return createMpnG2BillingId().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('inquiryNpwp.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryNpwp().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('inquiryInHouseAndVaBeneficiaryName.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryInHouseAndVaBeneficiaryName().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('inquiryLLG/RTGS/OnlineBeneficiaryName.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryLlgRtgsOnlineBeneficiaryName().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });  
  describe('inquiryAccountStatement.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryAccountStatement().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });  
  describe('inquiryBilling.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryBilling().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });  
  describe('inquiryBniPopsCashAndCarry.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryBniPopsCashAndCarry().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });  
});

const client = new BNIClient({
  env: 'dev-2',
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

const createMpnG2BillingId = async () => {
  const res = await bniDirect.createMpnG2BillingId({
    corporateId: 'jenomaker',
    userId: 'companymb',
    npwp: '111929199928123',
    taxPayerName: 'NAMA NPWP',
    taxPayerAddress1: 'ALAMAT 1',
    taxPayerAddress2: '',
    taxPayerAddress3: '',
    taxPayerCity: 'JAKARTA',
    NOP: '',
    MAPCode: '411122',
    depositTypeCode: '111',
    wajibPungutNPWP: '',
    wajibPungutName: '',
    wajibPungutAddress1: '',
    wajibPungutAddress2: '',
    wajibPungutAddress3: '',
    participantId: '111828293938',
    assessmentTaxNumber: '',
    amountCurrency: 'IDR',
    amount: '100000',
    monthFrom: '01',
    monthTo: '12',
    year: '2019' 
  }); 
  return res;
};

const inquiryNpwp = async () => {
  const res = await bniDirect.inquiryNpwp({
    corporateId: 'jenomaker',
    userId: 'companymb',
    npwp: '111822839281234',
    NOP: '',
    MAPCode: '411112',
    depositTypeCode: '123511',
    currency: 'USD'
  });
  return res;
};

const inquiryInHouseAndVaBeneficiaryName = async () => {
  const res = await bniDirect.inquiryInHouseAndVaBeneficiaryName({
    corporateId: 'jenomaker',
    userId: 'companymb',
    accountNo: '113183203'
  });
  return res;
};

const inquiryLlgRtgsOnlineBeneficiaryName = async () => {
  const res = await bniDirect.inquiryLlgRtgsOnlineBeneficiaryName({
    corporateId: 'jenomaker',
    userId: 'companymb',
    beneficiaryAccountNo: '10541448',
    beneficiaryBankCode: '002'
  });
  return res;
};

const inquiryAccountStatement = async () => {
  const res = await bniDirect.inquiryAccountStatement({
    corporateId: 'companymb',
    userId: 'jenomaker',
    fromDate: '20220328',
    toDate: '20190903',
    transactionType: 'All',
    accountList: ['113183203', '115208364']
  });
  return res;
};

const inquiryBilling = async () => {
  const res = await bniDirect.inquiryBilling({
    corporateId: 'companymb',
    userId: 'jenomaker',
    debitedAccountNo: '115208364',
    institution: 'MPN',
    customerInformation1: '11129192812818',
    customerInformation2: '0316031099',
    customerInformation3: '',
    customerInformation4: '',
    customerInformation5: ''
  });
  return res;
};

const inquiryBniPopsCashAndCarry = async () => {
  const res = await bniDirect.inquiryBniPopsCashAndCarry({
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