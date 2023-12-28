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

  describe('payrollMixed.js', () => {
    it('should return requestStatus 0', async () => {
      return payrollMixed().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });

  describe('callbackApi.js', () => {
    it('should return requestStatus 0', async () => {
      return callbackApi().then((res) => strictEqual(res.requestStatus, '0'));
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

  describe('inquiryChildAccount.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryChildAccount().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  
  describe('inquiryBIFastBeneficiaryName.js', () => {
    it('should return requestStatus 0', async () => {
      return inquiryBIFastBeneficiaryName().then((res) => strictEqual(res.requestStatus, '0'));
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
    corporateId: 'companymb',
    userId: 'jenomaker',
    accountList: ['116952891', '4447']
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

const callbackApi = async () => {
  const res = await bniDirect.callbackApi({
    corporateId: 'companymb',
    userId: 'jenomaker',
    apiRefNo: '2324dab653f',
    status: 'Executed Successfully'
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

const inquiryChildAccount = async () => {
  const res = await bniDirect.inquiryChildAccount({
    'corporateId': 'companymb',
    'userId': 'jenomaker',
    'accountNo': '1000599684'
  }
  );
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