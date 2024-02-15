import { Rdf, BNIClient } from '../src/index.js';
import { strictEqual, deepEqual } from 'assert';
import { constants } from './constant.js';

// describe('rdf.js', () => {
//   describe('registerInvestor', () => {
//     it('should return responseCode 0001', async () => {
//       const res = await registerInvestor();
//       strictEqual(res.response.responseCode, '0001');
//     });
//   });
// });

// describe('faceRecognition', async () => {
//   it('should return responseCode 0001', async () => {
//     const res = await faceRecognition();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('registerInvestorAccount', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await registerInvestorAccount();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('inquiryAccountInfo', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await inquiryAccountInfo();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('inquiryAccountBalance', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await inquiryAccountBalance();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('inquiryAccountHistory', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await inquiryAccountHistory();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('paymentUsingTransfer', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await paymentUsingTransfer();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('inquiryPaymentStatus', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await inquiryPaymentStatus();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('paymentUsingClearing', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await paymentUsingClearing();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('paymentUsingRTGS', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await paymentUsingRTGS();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('inquiryInterbankAccount', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await inquiryInterbankAccount();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

// describe('paymentUsingInterbank', () => {
//   it('should return responseCode 0001', async () => {
//     const res = await paymentUsingInterbank();
//     strictEqual(res.response.responseCode, '0001');
//   });
// });

const client = new BNIClient({
  env: 'dev',
  clientId: constants.clientId,
  clientSecret: constants.clientSecret,
  apiKey: constants.apiKey,
  apiSecret: constants.apiSecret,
  appName: constants.appName
});

const rdf = new Rdf(client);

// positif case

const registerInvestor = async () => {
  const res = await rdf.registerInvestor({
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

const faceRecognition = async () => {
  const res = await rdf.faceRecognition({
    'companyId': 'SANDBOX',
    'parentCompanyId': 'STI_CHS',
    'requestUuid': '2HMKB2LFKR1CF61Y',
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

const registerInvestorAccount = async () => {
  const res = await rdf.registerInvestorAccount({
    'companyId': ' NI001',
    'parentCompanyId': 'KSEI',
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

const inquiryAccountInfo = async () => {
  const res = rdf.inquiryAccountInfo({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'E26DB4C8F7384E72',
    'accountNumber': '0115476117'
  });
  return res;
};

const inquiryAccountBalance = async () => {
  const res = rdf.inquiryAccountBalance({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'E26DB4C8F6484E72',
    'accountNumber': ' 0115476117 '

  });
  return res;
};

const inquiryAccountHistory = async () => {
  const res = rdf.inquiryAccountHistory({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': '413DDF336A174F81',
    'accountNumber': '0115476117'
  });
  return res;
};

const paymentUsingTransfer = async () => {
  const res = rdf.paymentUsingTransfer({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'E8C6E0027F6E429F',
    'accountNumber': '0115476117',
    'beneficiaryAccountNumber': '0115471119',
    'currency': 'IDR',
    'amount': '11500',
    'remark': 'Test RDN'

  });
  return res;
};

const inquiryPaymentStatus = async () => {
  const res = rdf.inquiryPaymentStatus({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': '106323AEB63D4FF0',
    'requestedUuid': 'E8C6E0027F6E429F'
  });
  return res;
};

const paymentUsingClearing = async () => {
  const res = rdf.paymentUsingClearing({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'F980D79CB0EB41D7',
    'accountNumber': '0115476117',
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
  const res = rdf.paymentUsingRTGS({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': '871BFD631BBB4798',
    'accountNumber': '0115476117',
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
  const res = rdf.inquiryInterbankAccount({
    'companyId': 'NI001',
    'parentCompanyId': 'KSEI',
    'requestUuid': 'C202946D99844E59',
    'accountNumber': '0115476117',
    'beneficiaryBankCode': '013',
    'beneficiaryAccountNumber': '01300000'

  });
  return res;
};

const paymentUsingInterbank = async () => {
  const res = rdf.paymentUsingInterbank({
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

// negative case

// const registerInvestor = async () => {
//   const res = await rdf.registerInvestor({
//     'companyId': 'SANDBOX',
//     'parentCompanyId': 'STI_CHS',
//     'requestUuid': '40FCB72E71D35C81',
//     'uuidFaceRecog': '492F33851D634CFB',
//     'title': '01',
//     'firstName': 'Agus',
//     'middleName': '',
//     'lastName': 'Saputra',
//     'optNPWP': '1',
//     'NPWPNum': '001058893408123',
//     'nationality': 'ID',
//     'domicileCountry': 'ID',
//     'religion': '2',
//     'birthPlace': 'Semarang',
//     'birthDate': '14081982',
//     'gender': 'M',
//     'isMarried': 'S',
//     'motherMaidenName': 'Dina Maryati',
//     'jobCode': '01',
//     'education': '07',
//     'idType': '01',
//     'idNumber': '4147016201959999',
//     'idIssuingCity': 'Jakarta Barat',
//     'idExpiryDate': '26102099',
//     'addressStreet': 'Jalan Mawar Melati',
//     'addressRtRwPerum': '003009Sentosa',
//     'addressKel': 'Cengkareng Barat',
//     'addressKec': 'Cengkareng/Jakarta Barat',
//     'zipCode': '11730',
//     'homePhone1': '0214',
//     'homePhone2': '7459',
//     'officePhone1': '',
//     'officePhone2': '',
//     'mobilePhone1': '0812',
//     'mobilePhone2': '12348331',
//     'faxNum1': '',
//     'faxNum2': '',
//     'email': 'agus.saputra@gmail.com',
//     'monthlyIncome': '8000000',
//     'branchOpening': '0259',
//     'institutionName': 'PT. BNI SECURITIES',
//     'sid': 'IDD280436215354',
//     'employerName': 'Salman',
//     'employerAddDet': 'St Baker',
//     'employerAddCity': 'Arrandelle',
//     'jobDesc': 'Pedagang',
//     'ownedBankAccNo': '0337109074',
//     'idIssuingDate': '10122008'
//   }
//   );
//   return res;
// };

// const faceRecognition = async () => {
//   const res = await rdf.faceRecognition({
//     'companyId': 'SANDBOX',
//     'parentCompanyId': 'STI_CHS',
//     'requestUuid': '2HMKB2LFKR1CF61Y',
//     'firstName': 'MOHAMMAD',
//     'middleName': 'BAQER',
//     'lastName': 'ZALQAD',
//     'idNumber': '0141111121260118',
//     'birthDate': '29-09-2021',
//     'birthPlace': 'BANDUNG',
//     'gender': 'M',
//     'cityAddress': 'Bandung',
//     'stateProvAddress': 'Jawa Barat',
//     'addressCountry': 'ID',
//     'streetAddress1': 'bandung',
//     'streetAddress2': 'bandung',
//     'postCodeAddress': '40914',
//     'country': 'ID',
//     'selfiePhoto': '29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuP'
//   });
//   return res;
// };

// const registerInvestorAccount = async () => {
//   const res = await rdf.registerInvestorAccount({
//     'companyId': ' NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': 'A2E6973748U84BB8',
//     'cifNumber': '10123456781',
//     'currency': 'IDR',
//     'openAccountReason': '2',
//     'sourceOfFund': '1',
//     'branchId': '0259',
//     'bnisId': '19050813401',
//     'sre': 'NI001CX5U00109'
//   }
//   );
//   return res;
// };

// const inquiryAccountInfo = async () => {
//   const res = rdf.inquiryAccountInfo({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': 'E26DB4C8F7384E72',
//     'accountNumber': '1122334455'
//   });
//   return res;
// };

// const inquiryAccountBalance = async () => {
//   const res = rdf.inquiryAccountBalance({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': 'E26DB4C8F6484E72',
//     'accountNumber': '0221869561'

//   });
//   return res;
// };

// const inquiryAccountHistory = async () => {
//   const res = rdf.inquiryAccountHistory({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': '413DDF336A174F81',
//     'accountNumber': '0315617904'
//   });
//   return res;
// };

// const paymentUsingTransfer = async () => {
//   const res = rdf.paymentUsingTransfer({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': 'E8C6E0027F6E429F',
//     'accountNumber': '1000152671',
//     'beneficiaryAccountNumber': '0316031099',
//     'currency': 'IDR',
//     'amount': '30000000',
//     'remark': 'Test RDN'
//   });
//   return res;
// };

// const inquiryPaymentStatus = async () => {
//   const res = rdf.inquiryPaymentStatus({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': '106323AEB63D4FF0',
//     'requestedUuid': '123456AAAAAABBB0'

//   });
//   return res;
// };

// const paymentUsingClearing = async () => {
//   const res = rdf.paymentUsingClearing({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': 'F980D79CB0EB41D7',
//     'accountNumber': '1122334455',
//     'beneficiaryAccountNumber': '3333333333',
//     'beneficiaryAddress1': 'Jakarta',
//     'beneficiaryAddress2': '',
//     'beneficiaryBankCode': '140397',
//     'beneficiaryName': 'Panji Samudra',
//     'currency': 'IDR',
//     'amount': '900000000',
//     'remark': 'Test kliring',
//     'chargingType': 'OUR'
//   });
//   return res;
// };

// const paymentUsingRTGS = async () => {
//   const res = rdf.paymentUsingRTGS({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': '871BFD631BBB4798',
//     'accountNumber': '1122334455',
//     'beneficiaryAccountNumber': '3333333333',
//     'beneficiaryAddress1': 'Jakarta',
//     'beneficiaryAddress2': '',
//     'beneficiaryBankCode': 'CENAIDJA',
//     'beneficiaryName': 'Panji Samudra',
//     'currency': 'IDR',
//     'amount': '150000000',
//     'remark': 'Test rtgs',
//     'chargingType': 'OUR'
//   });
//   return res;
// };

// const inquiryInterbankAccount = async () => {
//   const res = rdf.inquiryInterbankAccount({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': 'C202946D99844E59',
//     'accountNumber': '0115476117',
//     'beneficiaryBankCode': '019',
//     'beneficiaryAccountNumber': '01900000'
//   });
//   return res;
// };

// const paymentUsingInterbank = async () => {
//   const res = rdf.paymentUsingInterbank({
//     'companyId': 'NI001',
//     'parentCompanyId': 'KSEI',
//     'requestUuid': '52D3E26AA18D4FCA',
//     'accountNumber': '0315617904',
//     'beneficiaryAccountNumber': '3333333333',
//     'beneficiaryAccountName': 'KEN AROK',
//     'beneficiaryBankCode': '014',
//     'beneficiaryBankName': 'BANK BCA',
//     'amount': '15000'
//   });
//   return res;
// };
