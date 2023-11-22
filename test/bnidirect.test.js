import { BniDirect, BNIClient } from '../src/index.js';
import { strictEqual } from 'assert';
import { constants } from './constant.js';

describe('bnidirect.js', () => {
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
  describe('createVirtualAccount.js', () => {
    it('should return requestStatus 0', async () => {
      return createVirtualAccount().then((res) =>
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
  describe('inquiryVirtualAccountTransaction.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryVirtualAccountTransaction().then((res) =>
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
  describe('balanceInquiry', () => {
    it('should return requestStatus 0', async () => {
      return balanceInquiry().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('inquiryForexRate.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryForexRate().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('bulkPaymentMixed.js', () => {
    it('should return requestStatus 0', async () => {
      return bulkPaymentMixed().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('payrollMixed.js', () => {
    it('should return requestStatus 0', async () => {
      return payrollMixed().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('domesticSingleBIFastTransfer.js', () => {
    it('should return requestStatus 0', async () => {
      return domesticSingleBIFastTransfer().then((res) =>
        strictEqual(res.requestStatus, '0')
      );
    });
  });
  describe('inquiryBIFastBeneficiaryName.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryBIFastBeneficiaryName().then((res) =>
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

const bniPopsCashAndCarry = async () => {
  const res = await bniDirect.bniPopsCashAndCarry({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
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
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
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
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
    transactionReferenceNo: '201809181708919534',
    SONumber: ''
  });
  return res;
};
const bniPopsResubmitProductAllocation = async () => {
  const res = await bniDirect.bniPopsResubmitProductAllocation({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
    transactionReferenceNo: '201809181708919534',
    SONumber: ''
  });
  return res;
};
const createVirtualAccount = async () => {
  const res = await bniDirect.createVirtualAccount({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
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
const updateVirtualAccount = async () => {
  const res = await bniDirect.updateVirtualAccount({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
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
const inquiryVirtualAccountTransaction = async () => {
  const res = await bniDirect.inquiryVirtualAccountTransaction({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
    virtualAccountNo: '8310000011112323',
    fromDate: '20161015',
    toDate: '20201015'
  });
  return res;
};
const bulkGetStatus = async () => {
  const res = await bniDirect.bulkGetStatus({
    corporateId: 'BNI_SIT',
    userId: 'WTI_MAKER1',
    fileRefNo: '',
    apiRefNo: '34ab87f29e88c23a'
  });
  return res;
};
const balanceInquiry = async () => {
  const res = await bniDirect.balanceInquiry({
    corporateId: 'companymb',
    userId: 'jenomaker',
    accountList: ['116952891', '4447']
  });
  return res;
};
const inquiryForexRate = async () => {
  const res = await bniDirect.inquiryForexRate({
    corporateId: 'companymb',
    userId: 'jenomaker',
    currencyList: [
      'IDR',
      'USD'
    ]
  });
  return res;
};
const bulkPaymentMixed = async () => {
  const res = await bniDirect.bulkPaymentMixed({
    'corporateId': 'companymb',
    'userId': 'jenomaker',
    'apiRefNo': 'TRX029SEPT23009971301',
    'instructionDate': '20230929',
    'session': '',
    'serviceType': 'MXD',
    'debitAcctNo': '',
    'amount': '',
    'currency': '',
    'chargeTo': '',
    'residenceCode': '',
    'citizenCode': '',
    'category': '',
    'transactionType': 'D',
    'accountNmValidation': 'Y',
    'remark': 'BULK PAYMENT MXD',
    'childContent': '9832132281,NAMA ILMPPJTNU,100001,,REMARK1-HWBM,REMARK2-YFFW,REMARK3-UNBJ,Bene Address 1,Bene Address 2,Bene Address 3,BBBAIDJA,Bank Permata,Bank Permata|Branch Jl. Kapten Tendean 12-14A,Jl. Kapten Tendean 12-14A,Jakarta 12790,Jakarta Selatan,Jakarta,Indonesia,ID,ID,wide.beneficiary@gmail.com,,,,,,,,,REM70587148UDMW,Y,BEN70587148UDMW,EXDET1,EXDET2,EXDET3,EXDET4,EXDET5,,BF,IDR,108098391,OUR,ID,ID,C9,N,N,085317773020,01'
  });
  return res;
};
const payrollMixed = async () => {
  const res = await bniDirect.payrollMixed({
    corporateId: 'companymb',
    userId: 'jenomaker',
    apiRefNo: 'TRX029SEPT23009912',
    instructionDate: '20230929',
    session: '',
    serviceType: 'MXD',
    debitAcctNo: '',
    amount: '',
    currency: '',
    chargeTo: '',
    residenceCode: '',
    citizenCode: '',
    category: '',
    transactionType: 'D',
    accountNmValidation: 'Y',
    remark: 'BULK PAYMENT MXD',
    childContent:
      '889213621,NAMA SWQUTGLHR,101,,REMARK1-IGTE,REMARK2-QEZQ,REMARK3-TYXH,Bene Address 1,Bene Address 2,Bene Address 3,,,,,,,,,,,wide.beneficiary@gmail.com,,,,2012,,,,,REM38060584AHIQ,Y,BEN38060584AHIQ,EXDET1,EXDET2,EXDET3,EXDET4,EXDET5,,IHT,IDR,108098391,OUR,ID,ID,C9,N,,,|@|889213622,NAMA VONGVHDPW,100002,,REMARK1-TLHU,REMARK2-RNWB,REMARK3-BOYN,Bene Address 1,Bene Address 2,Bene Address 3,BRINIDJA,Bank Raykat Indonesia,Bank Raykat Indonesia|Branch Jl. M.H Thamrin No. 1,Jl. M.H Thamrin No. 1,Jakarta 10310,Jakarta Pusat,Jakarta,Indonesia,ID,ID,wide.beneficiary@gmail.com,,,,,,,,,REM67021138WHQM,Y,BEN67021138WHQM,EXDET1,EXDET2,EXDET3,EXDET4,EXDET5,2,LLG,IDR,108098391,OUR,ID,ID,C9,N,,,|@|889213623,NAMA CFOJGYSCN,100000002,,REMARK1-JIEV,REMARK2-EPMP,REMARK3-ZXFR,Bene Address 1,Bene Address 2,Bene Address 3,BRINIDJA,Bank Raykat Indonesia,Bank Raykat Indonesia|Branch Jl. M.H Thamrin No. 1,Jl. M.H Thamrin No. 1,Jakarta 10310,Jakarta Pusat,Jakarta,Indonesia,ID,ID,wide.beneficiary@gmail.com,,,,,,,,,REM53427300BHQC,Y,BEN53427300BHQC,EXDET1,EXDET2,EXDET3,EXDET4,EXDET5,,RTGS,IDR,108098391,OUR,ID,ID,C9,N,,,|@|889213624,NAMA YPEGAUEUJ,100003,,REMARK1-NXHV,REMARK2-DMNV,REMARK3-RNMI,Bene Address 1,Bene Address 2,Bene Address 3,002,Bank Raykat Indonesia,Bank Raykat Indonesia|Branch Jl. M.H Thamrin No. 1,Jl. M.H Thamrin No. 1,Jakarta 10310,Jakarta Pusat,Jakarta,Indonesia,ID,ID,wide.beneficiary@gmail.com,,,,,,,,,REM87661139PXGR,Y,BEN87661139PXGR,EXDET1,EXDET2,EXDET3,EXDET4,EXDET5,,OT,IDR,108098391,OUR,ID,ID,C9,N,,,|@|1150007270863,NAMA TAQMEAMLE,100001,,REMARK1-UZAB,REMARK2-RXWS,REMARK3-UWPS,Bene Address 1,Bene Address 2,Bene Address 3,BMRIIDJA,BANK MANDIRI,BANK MANDIRI BRANCH,Jl. Kapten Tendean 12-14A,Jakarta 12790,Jakarta Selatan,Jakarta,Indonesia,ID,ID,wide.beneficiary@gmail.com,,,,,,,,,REM96734911GLBT,Y,BEN96734911GLBT,EXDET1,EXDET2,EXDET3,EXDET4,EXDET5,,BF,IDR,108098391,OUR,ID,ID,C9,N,N,6281280533832,03|@|889213626,NAMA QVBCZETAV,102,,REMARK1-SBUR,REMARK2-URWV,REMARK3-HBSC,Bene Address 1,Bene Address 2,Bene Address 3,BIC|ABBYGB2LXXX,Abbey National,Abbey National|Branch 2 Triton Square,2 Triton Square,Regent\'s Place NW1 3AN,London,London,United Kingdom,ID,ID,wide.beneficiary@gmail.com,085317773020,021991826,Bank BNI,2012,N,N,C9,LLD Desc,REM61083690MDPP,Y,BEN61083690MDPP,EXDET1,EXDET2,EXDET3,EXDET4,EXDET5,,IFT,USD,108098391,OUR,ID,ID,C9,N,,,'
  });
  return res;

};
const domesticSingleBIFastTransfer = async () => {
  const res = await bniDirect.domesticSingleBIFastTransfer({
    corporateId: 'companymb',
    userId: 'jenomaker',
    debitedAccountNo: '1000599764',
    amountCurrency: 'IDR',
    amount: '500000',
    exchangeRateCode: 'Cr',
    treasuryReferenceNo: '',
    chargeTo: 'OUR',
    remark1: 'BIFast-RMK1',
    remark2: 'BIFast-RMK1',
    remark3: 'BIFast-RMK1',
    remitterReferenceNo: 'GSYBI2103202314',
    finalizePaymentFlag: 'Y',
    beneficiaryReferenceNo: 'BENGTYRSD110',
    usedProxy: 'N',
    beneficiaryAccountNo: '9832132281',
    proxyId: '',
    beneficiaryBankCode: 'BBBAIDJA',
    beneficiaryBankName: 'Bank Permata',
    notificationFlag: 'N',
    beneficiaryEmail: '',
    transactionInstructionDate: '20231109',
    transactionPurposeCode: '01'
  });
  return res;
};
const inquiryBIFastBeneficiaryName = async () => {
  const res = await bniDirect.inquiryBIFastBeneficiaryName({
    'corporateId': 'companymb',
    'userId': 'jenomaker',
    'usedProxy': 'N',
    'beneficiaryAccountNo': '9832132281',
    'proxyId': '',
    'beneficiaryBankCode': 'BBBAIDJA'
  });
  return res;
};










