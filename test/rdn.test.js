import { Rdn, BNIClient } from '../src/index.js';
import { strictEqual } from 'assert';
import { constants } from './constant.js';

describe('rdn.js', () => {
  describe('registerInvestor', () => {
        
    it('should return responseCode 0001', async () => {
      return registerInvestor().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('registerInvestorFailed', () => {
        
    it('should return responseCode 9430', async () => {
      return registerInvestorFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '9430'));
    });
  });

  describe('faceRecognition', async () => {
        
    it('should return responseCode 0001', async () => {
      return faceRecognition().then(res =>  strictEqual(res.response.responseCode, '0001'));
    });
  });


  describe('checkSID', () => {
        
    it('should return ackStatus OK', async () => {
      return checkSID().then(res => strictEqual(res.response.ackStatus, 'OK'));
    });
  });
  describe('checkSIDActN', () => {
        
    it('should return ackStatus undefined', async () => {
      return checkSIDActN().then(res => strictEqual(res.response.ackStatus, undefined));
    });
  });
    
  describe('registerInvestorAccount', () => {
        
    it('should return responseCode 0001', async () => {
      return registerInvestorAccount().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('registerInvestorAccountFailed', () => {
        
    it('should return responseCode 0169', async () => {
      return registerInvestorAccountFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '0169'));
    });
  });

  describe('sendDataStatic', () => {
        
    it('should return sendResponse 0', async () => {
      return sendDataStatic().then(res =>  strictEqual(res.sendResponse, '0'));
     
    });
  });

  describe('sendDataStaticFailed', () => {
        
    it('should return responseCode 9412', async () => {
      return sendDataStaticFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '9412'));
    });
  });

  describe('inquiryAccountInfo', () => {
        
    it('should return responseCode 0001', async () => {
      return inquiryAccountInfo().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('inquiryAccountInfoFailed', () => {
        
    it('should return responseCode 9412', async () => {
      return inquiryAccountInfoFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '0108'));
    });
  });

  describe('inquiryAccountBalance', () => {
        
    it('should return responseCode 0001', async () => {
      return inquiryAccountBalance().then(res => strictEqual(res.response.responseCode, '0001'));
      
    });
  });

  describe('inquiryAccountBalanceFailed', () => {
        
    it('should return responseCode 9412', async () => {
      return inquiryAccountBalanceFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '0108'));
    });
  });

  describe('inquiryAccountHistory', () => {
        
    it('should return responseCode 0001', async () => {
      return inquiryAccountHistory().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('inquiryAccountHistoryFailed', () => {
        
    it('should return responseCode 9409', async () => {
      return inquiryAccountHistoryFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '9409'));
    });
  });

  describe('paymentUsingTransfer', () => {
        
    it('should return responseCode 0001', async () => {
      return paymentUsingTransfer().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('paymentUsingTransferFailed', () => {
        
    it('should return responseCode 0266', async () => {
      return paymentUsingTransferFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '0266'));
    });
  });

  describe('inquiryPaymentStatus', () => {
        
    it('should return responseCode 0001', async () => {
      return inquiryPaymentStatus().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('inquiryPaymentStatusFailed', () => {
        
    it('should return responseCode 0188', async () => {
      return inquiryPaymentStatusFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '0188'));
    });
  });

  describe('paymentUsingClearing', () => {
        
    it('should return responseCode 0001', async () => {
      return paymentUsingClearing().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('paymentUsingClearingFailed', () => {
        
    it('should return responseCode 9409', async () => {
      return paymentUsingClearingFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '9409'));
    });
  });

  describe('paymentUsingRTGS', () => {
        
    it('should return responseCode 0001', async () => {
      return paymentUsingRTGS().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('paymentUsingRTGSFailed', () => {
        
    it('should return responseCode 9409', async () => {
      return paymentUsingRTGSFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '9409'));
    });
  });

  describe('inquiryInterbankAccount', () => {
        
    it('should return responseCode 0001', async () => {
      return inquiryInterbankAccount().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('inquiryInterbankAccountFailed', () => {
        
    it('should return responseCode 0169', async () => {
      return inquiryInterbankAccountFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '0169'));
    });
  });

  describe('paymentUsingInterbank', () => {
        
    it('should return responseCode 0001', async () => {
      return paymentUsingInterbank().then(res => strictEqual(res.response.responseCode, '0001'));
    });
  });

  describe('paymentUsingInterbankFailed', () => {
        
    it('should return responseCode 9409', async () => {
      return paymentUsingInterbankFailed().then().catch(err => strictEqual(err.response.data.response.responseCode, '9409'));
    });
  });
});

const client = new BNIClient({
  env: 'sandbox',
  clientId: constants.clientId,
  clientSecret: constants.clientSecret,
  apiKey: constants.apiKey,
  apiSecret: constants.apiSecret,
  appName: constants.appName
});

const rdn = new Rdn(client);

const registerInvestor = async () => {
  const res = await rdn.registerInvestor({
    'companyId': 'SANDBOX',
    'parentCompanyId': 'STI_CHS',
    'requestUuid': '40FCB72E71D35C81',
    'uuidFaceRecog': '492F33851D634CFB',
    'title': '01',
    'firstName': 'Agus',
    'middleName': '',
    'lastName': 'Saputra',
    'optNPWP': '1',
    'NPWPNum': '001058893408123',
    'nationality': 'ID',
    'domicileCountry': 'ID',
    'religion': '2',
    'birthPlace': 'Semarang',
    'birthDate': '14081982',
    'gender': 'M',
    'isMarried': 'S',
    'motherMaidenName': 'Dina Maryati',
    'jobCode': '01',
    'education': '07',
    'idType': '01',
    'idNumber': '4147016201959998',
    'idIssuingCity': 'Jakarta Barat',
    'idExpiryDate': '26102099',
    'addressStreet': 'Jalan Mawar Melati',
    'addressRtRwPerum': '003009Sentosa',
    'addressKel': 'Cengkareng Barat',
    'addressKec': 'Cengkareng/Jakarta Barat',
    'zipCode': '11730',
    'homePhone1': '0214',
    'homePhone2': '7459',
    'officePhone1': '',
    'officePhone2': '',
    'mobilePhone1': '0812',
    'mobilePhone2': '12348331',
    'faxNum1': '',
    'faxNum2': '',
    'email': 'agus.saputra@gmail.com',
    'monthlyIncome': '8000000',
    'branchOpening': '0259',
    'institutionName': 'PT. BNI SECURITIES',
    'sid': 'IDD280436215354',
    'employerName': 'Salman',
    'employerAddDet': 'St Baker',
    'employerAddCity': 'Arrandelle',
    'jobDesc': 'Pedagang',
    'ownedBankAccNo': '0337109074',
    'idIssuingDate': '10122008'
  }
  );
  return res;
};
const registerInvestorFailed = async () => {
  const res = await rdn.registerInvestor({
    'companyId': 'SANDBOX',
    'parentCompanyId': 'STI_CHS',
    'requestUuid': '70HCB72E71D34F14',
    'uuidFaceRecog': '492F33851D634CFB',
    'title': '01',
    'firstName': 'Agus',
    'middleName': '',
    'lastName': 'Saputra',
    'optNPWP': '1',
    'NPWPNum': '001058893408123',
    'nationality': 'ID',
    'domicileCountry': 'ID',
    'religion': '2',
    'birthPlace': 'Semarang',
    'birthDate': '14081982',
    'gender': 'M',
    'isMarried': 'S',
    'motherMaidenName': 'Dina Maryati',
    'jobCode': '01',
    'education': '07',
    'idType': '01',
    'idNumber': '4147016201959999',
    'idIssuingCity': 'Jakarta Barat',
    'idExpiryDate': '26102099',
    'addressStreet': 'Jalan Mawar Melati',
    'addressRtRwPerum': '003009Sentosa',
    'addressKel': 'Cengkareng Barat',
    'addressKec': 'Cengkareng/Jakarta Barat',
    'zipCode': '11730',
    'homePhone1': '0214',
    'homePhone2': '7459',
    'officePhone1': '',
    'officePhone2': '',
    'mobilePhone1': '0812',
    'mobilePhone2': '12348331',
    'faxNum1': '',
    'faxNum2': '',
    'email': 'agus.saputra@gmail.com',
    'monthlyIncome': '8000000',
    'branchOpening': '0259',
    'institutionName': 'PT. BNI SECURITIES',
    'sid': 'IDD280436215354',
    'employerName': 'Salman',
    'employerAddDet': 'St Baker',
    'employerAddCity': 'Arrandelle',
    'jobDesc': 'Pedagang',
    'ownedBankAccNo': '0337109074',
    'idIssuingDate': '10122008'
  }
  );
  return res;
};

const faceRecognition = async () => {
  const res = await rdn.faceRecognition({
    'companyId': 'SANDBOX',
    'parentCompanyId': 'STI_CHS',
    'firstName': 'MOHAMMAD',  
    'middleName': 'BAQER',  
    'lastName': 'ZALQAD', 
    'idNumber': '0141111121260118', 
    'birthDate': '29-09-2021', 
    'birthPlace': 'BANDUNG', 
    'gender': 'M', 
    'cityAddress': 'Bandung', 
    'stateProvAddress': 'Jawa Barat', 
    'addressCountry': 'ID', 
    'streetAddress1': 'bandung', 
    'streetAddress2': 'bandung', 
    'postCodeAddress': '40914', 
    'country': 'ID',
    'selfiePhoto': '29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuP'
  });
  return res;
};

const checkSID = async () => {
  const res = await rdn.checkSID({
    'companyId': 'NI001', 
    'parentCompanyId': 'KSEI', 
    'requestUuid': '52D3E26AA18D4FCA', 
    'participantId': 'NI001', 
    'sidNumber': 'IDD1206M9527805', 
    'accountNumberOnKsei': 'NI001CRKG00146', 
    'branchCode': '0259', 
    'ack': 'Y' 
  });
  return res;
};
const checkSIDActN = async () => {
  const res = await rdn.checkSID({
    'companyId': 'NI001', 
    'parentCompanyId': 'KSEI', 
    'requestUuid': '52D3E26AA18D4FCA', 
    'participantId': 'NI001',
    'sidNumber': 'IDD1206M9527805',
    'accountNumberOnKsei': 'NI001CRKG00146',
    'branchCode': '0259',
    'ack': 'N'
  });
  return res;
};

const registerInvestorAccount = async () => {
  const res = await rdn.registerInvestorAccount({
    'companyId': 'SANDBOX', 
    'parentCompanyId': 'STI_CHS', 
    'requestUuid': 'A2E6973748U84BB8', 
    'cifNumber': '9100749959', 
    'currency': 'IDR', 
    'openAccountReason': '2', 
    'sourceOfFund': '1', 
    'branchId': '0259', 
    'bnisId': '19050813401', 
    'sre': 'NI001CX5U00109' 
  });
  return res;
};
const registerInvestorAccountFailed = async () => {
  const res = await rdn.registerInvestorAccount({
    'companyId': ' NI001',
    'parentCompanyId': 'KSEI',
    'cifNumber': '10123456781',
    'currency': 'IDR',
    'openAccountReason': '2',
    'sourceOfFund': '1',
    'branchId': '0259',
    'bnisId': '19050813401',
    'sre': 'NI001CX5U00109'
  });
  return res;
};

const sendDataStatic = async () => {
  const res = await rdn.sendDataStatic({
    'companyId': 'SPS App', 
    'parentCompanyId': 'KSEI', 
    'requestUuid': '52D3E26AA18D4FCA',
    'participantCode': 'NI001', 
    'participantName': 'PT. BNI SECURITIES', 
    'investorName': 'SUMARNO', 
    'investorCode': 'IDD250436742277', 
    'investorAccountNumber': 'NI001042300155', 
    'bankAccountNumber': '242345393', 
    'activityDate': '20180511', 
    'activity': 'O'
  });
  return res;
};
const sendDataStaticFailed = async () => {
  const res = await rdn.sendDataStatic({
    'companyId': '', 
    'parentCompanyId': 'XYZ', 
    'requestUuid': '52D3E26AA18D4FCA',
    'participantCode': 'IF001', 
    'participantName': 'PT. XYZ', 
    'investorName': 'JOHNNY SMITH', 
    'investorCode': 'CPD260240076808', 
    'investorAccountNumber': 'AK001ERNI00134', 
    'bankAccountNumber': '0317720623', 
    'activityDate': '20220510', 
    'activity': 'O'
  });
  return res;
};

const inquiryAccountInfo = async () => {
  const res = await rdn.inquiryAccountInfo({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'E26DB4C8F6484E72',
    'accountNumber': '0115476117'
  });
  return res;
};
const inquiryAccountInfoFailed = async () => {
  const res = await rdn.inquiryAccountInfo({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'E26DB4C8F6484E72',
    'accountNumber': '1122334455'
  });
  return res;
};

const inquiryAccountBalance = async () => {
  const res = await rdn.inquiryAccountBalance({
    'companyId': 'SANDBOX',
    'parentCompanyId': 'STI_CHS',
    'requestUuid': 'E26DB4C8F6484E72',
    'accountNumber': '0115476117'
  });
  return res;
};
const inquiryAccountBalanceFailed = async () => {
  const res = await rdn.inquiryAccountBalance({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'E26DB4C8F6484E72',
    'accountNumber': '0221869561'
  });
  return res;
};

const inquiryAccountHistory = async () => {
  const res = await rdn.inquiryAccountHistory({
    'companyId': 'SANDBOX',
    'parentCompanyId': 'STI_CHS',
    'requestUuid': 'E26DB4C8F6484E72',
    'accountNumber': '0115476117'
  });
  return res;
};
const inquiryAccountHistoryFailed = async () => {
  const res = await rdn.inquiryAccountHistory({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'E26DB4C8F6484E72',
    'accountNumber': '0315617904'
  });
  return res;
};

const paymentUsingTransfer = async () => {
  const res = await rdn.paymentUsingTransfer({
    'companyId': 'SANDBOX', 
    'parentCompanyId': 'STI_CHS', 
    'requestUuid': 'E8C6E0027F6E429F', 
    'accountNumber': '0115476117', 
    'beneficiaryAccountNumber': '0115471119', 
    'currency': 'IDR', 
    'amount': '11500', 
    'remark': 'Test RDN'
  });
  return res;
};
const paymentUsingTransferFailed = async () => {
  const res = await rdn.paymentUsingTransfer({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'accountNumber': '1000152671',
    'beneficiaryAccountNumber': '0316031099',
    'currency': 'IDR',
    'amount': '30000000',
    'remark': 'Test RDN'
  });
  return res;
};

const inquiryPaymentStatus = async () => {
  const res = await rdn.inquiryPaymentStatus({
    'companyId': 'SANDBOX', 
    'parentCompanyId': 'STI_CHS', 
    'requestUuid': '106323AEB63D4FF0',
    'requestedUuid': 'E8C6E0027F6E429F'
  });
  return res;
};
const inquiryPaymentStatusFailed = async () => {
  const res = await rdn.inquiryPaymentStatus({
    'companyId': 'NI001', 
    'parentCompanyId': 'KSEI', 
    'requestUuid': '106323AEB63D4FF0',
    'requestedUuid': '123456AAAAAABBB0'
  });
  return res;
};

const paymentUsingClearing = async () => {
  const res = await rdn.paymentUsingClearing({
    'companyId': 'SANDBOX', 
    'parentCompanyId': 'STI_CHS', 
    'requestUuid': 'F980D79CB0EB41D7', 
    'accountNumber': '0115476117', 
    'beneficiaryAccountNumber': '3333333333', 
    'beneficiaryAddress1': 'Jakarta', 
    'beneficiaryAddress2': '', 
    'beneficiaryBankCode': '140397', 
    'beneficiaryName': 'Panji Samudra', 
    'currency': 'IDR', 
    'amount': '15000', 
    'remark': 'Test kliring', 
    'chargingType': 'OUR'
  });
  return res;
};
const paymentUsingClearingFailed = async () => {
  const res = await rdn.paymentUsingClearing({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'accountNumber': '1122334455',
    'beneficiaryAccountNumber': '3333333333',
    'beneficiaryAddress1': 'Jakarta',
    'beneficiaryAddress2': '',
    'beneficiaryBankCode': '140397',
    'beneficiaryName': 'Panji Samudra',
    'currency': 'IDR',
    'amount': '900000000',
    'remark': 'Test kliring',
    'chargingType': 'OUR'
  });
  return res;
};

const paymentUsingRTGS = async () => {
  const res = await rdn.paymentUsingRTGS({
    'companyId': 'SANDBOX', 
    'parentCompanyId': 'STI_CHS', 
    'requestUuid': 'F980D79CB0EB41D7', 
    'accountNumber': '0115476117', 
    'beneficiaryAccountNumber': '3333333333', 
    'beneficiaryAddress1': 'Jakarta', 
    'beneficiaryAddress2': '', 
    'beneficiaryBankCode': '140397', 
    'beneficiaryName': 'Panji Samudra', 
    'currency': 'IDR', 
    'amount': '150000000', 
    'remark': 'Test kliring', 
    'chargingType': 'OUR'
  });
  return res;
};
const paymentUsingRTGSFailed = async () => {
  const res = await rdn.paymentUsingRTGS({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'accountNumber': '1122334455',
    'beneficiaryAccountNumber': '3333333333',
    'beneficiaryAddress1': 'Jakarta',
    'beneficiaryAddress2': '',
    'beneficiaryBankCode': 'CENAIDJA',
    'beneficiaryName': 'Panji Samudra',
    'currency': 'IDR',
    'amount': '150000000',
    'remark': 'Test rtgs',
    'chargingType': 'OUR'
  });
  return res;
};

const inquiryInterbankAccount = async () => {
  const res = await rdn.inquiryInterbankAccount({
    'companyId': 'NI001', 
    'parentCompanyId': 'KSEI', 
    'requestUuid': 'C202946D99844E59',
    'accountNumber': '0115476117', 
    'beneficiaryBankCode': '013', 
    'beneficiaryAccountNumber': '01300000'
  });
  return res;
};
const inquiryInterbankAccountFailed = async () => {
  const res = await rdn.inquiryInterbankAccount({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'accountNumber': '0115476117',
    'beneficiaryBankCode': '019',
    'beneficiaryAccountNumber': '01900000'
  });
  return res;
};

const paymentUsingInterbank = async () => {
  const res = await rdn.paymentUsingInterbank({
    'companyId': 'NI001', 
    'parentCompanyId': 'KSEI', 
    'requestUuid': '52D3E26AA18D4FCA',
    'accountNumber': '0115476117', 
    'beneficiaryAccountNumber': '3333333333', 
    'beneficiaryAccountName': 'KEN AROK', 
    'beneficiaryBankCode': '014', 
    'beneficiaryBankName': 'BANK BCA', 
    'amount': '15000'
  });
  return res;
};
const paymentUsingInterbankFailed = async () => {
  const res = await rdn.paymentUsingInterbank({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'accountNumber': '0315617904',
    'beneficiaryAccountNumber': '3333333333',
    'beneficiaryAccountName': 'KEN AROK',
    'beneficiaryBankCode': '014',
    'beneficiaryBankName': 'BANK BCA',
    'amount': '15000'
  });
  return res;
};