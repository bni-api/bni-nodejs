import { BniDirect, BNIClient } from '../src/index.js';
import { strictEqual } from 'assert';
import { constants } from './constant.js';

describe('bniDirect.js', () => {
  describe('billingPayment.js', () => {
    it('should return requestStatus 0', async () => {
      return billingPayment().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('getPaymentStatus.js', () => {
    it('should return requestStatus 0', async () => {
      return getPaymentStatus().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('inhouseTransfer.js', () => {
    it('should return requestStatus 0', async () => {
      return inhouseTransfer().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('InquiryBniPOPSProductAllocation.js', () => {
    it('should return requestStatus 0', async () => {
      return InquiryBniPOPSProductAllocation().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('transferInternational.js', () => {
    it('should return requestStatus 0', async () => {
      return transferInternational().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('transferLLG.js', () => {
    it('should return requestStatus 0', async () => {
      return transferLLG().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('transferOnline.js', () => {
    it('should return requestStatus 0', async () => {
      return transferOnline().then((res) => strictEqual(res.requestStatus, '0'));
    });
  });
  describe('transferRTGS.js', () => {
    it('should return requestStatus 0', async () => {
      return transferRTGS().then((res) => strictEqual(res.requestStatus, '0'));
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

const bnidirect = new BniDirect(client);

const billingPayment = async () => {
  const res = await bnidirect.billingPayment(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitedAccountNo': '115208364',
      'institution': 'MPN',
      'payeeName': 'asdfasdf',
      'customerInformation1': '111222122212333',
      'customerInformation2': '',
      'customerInformation3': '',
      'customerInformation4': '',
      'customerInformation5': '',
      'billPresentmentFlag': 'N',
      'remitterRefNo': '1123123213',
      'finalizePaymentFlag': 'Y',
      'beneficiaryRefNo': '',
      'notificationFlag': 'N',
      'beneficiaryEmail': '',
      'transactionInstructionDate': '20231102',
      'amountCurrency': 'IDR',
      'amount': '2000000'
    }
  );
  return res;
};
const getPaymentStatus = async () => {
  const res = await bnidirect.getPaymentStatus(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitedAccountNo': '1000599764',
      'amountCurrency': 'IDR',
      'amount': '1000001',
      'treasuryReferenceNo': '',
      'transactionPurposeCode': '2012',
      'remark1': 'IH-TRF-RMK01',
      'remark2': 'IH-TRF-RMK02',
      'remark3': 'IH-TRF-RMK03',
      'remitterReferenceNo': 'UYX202309260002',
      'finalizePaymentFlag': 'Y',
      'beneficiaryReferenceNo': 'BEN202212IHT508',
      'toAccountNo': '108098391',
      'notificationFlag': 'Y',
      'beneficiaryEmail': 'wide.uatbeneficiary@gmail.com',
      'transactionInstructionDate': '20231107',
      'docUniqueId': ''
    }
  );
  return res;
};
const inhouseTransfer = async () => {
  const res = await bnidirect.inhouseTransfer(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitedAccountNo': '1000599764',
      'amountCurrency': 'IDR',
      'amount': '1000001',
      'treasuryReferenceNo': '',
      'transactionPurposeCode': '2012',
      'remark1': 'IH-TRF-RMK01',
      'remark2': 'IH-TRF-RMK02',
      'remark3': 'IH-TRF-RMK03',
      'remitterReferenceNo': 'UYX202309260002',
      'finalizePaymentFlag': 'Y',
      'beneficiaryReferenceNo': 'BEN202212IHT508',
      'toAccountNo': '108098391',
      'notificationFlag': 'Y',
      'beneficiaryEmail': 'wide.uatbeneficiary@gmail.com',
      'transactionInstructionDate': '20231107',
      'docUniqueId': ''
    }
  );
  return res;
};
const InquiryBniPOPSProductAllocation = async () => {
  const res = await bnidirect.InquiryBniPOPSProductAllocation(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitAccountNo': '115208364',
      'salesOrganizationCode': '1002',
      'distributionChannelCode': '10',
      'productCode': '04',
      'shipTo': '1123123',
      'scheduleAggreementNo': '118282812',
      'debitOrCreditNoteNo': '123231',
      'productInformationDetail': [
        {
          'materialCode': 'A040900001',
          'trip': '1123123',
          'quantity': '100',
          'deliveryDate': '20231109',
          'transportir': ''
        }
      ]
    }
  );
  return res;
};
const transferInternational = async () => {
  const res = await bnidirect.transferInternational(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitedAccountNo': '1000599764',
      'amountCurrency': 'USD',
      'amount': '10.55',
      'treasuryReferenceNo': '',
      'chargeTo': 'OUR',
      'remark1': 'INT TRF RMK1',
      'remark2': 'INT TRF RMK2',
      'remark3': 'INT TRF RMK3',
      'remitterReferenceNo': 'UYY26092023009',
      'finalizePaymentFlag': 'Y',
      'beneficiaryReferenceNo': 'BENHYUDTVGAVD',
      'beneficiaryAccountNo': '11123123',
      'beneficiaryAccountName': 'Janifree',
      'beneficiaryAddress1': 'MUNICH',
      'beneficiaryAddress2': 'GERMANY',
      'beneficiaryAddress3': '',
      'organizationDirectoryCode': 'BIC',
      'beneficiaryBankCode': 'SOGEDEFFXXX',
      'beneficiaryBankName': 'SOCIETE GENERALE - FRANKFURT',
      'beneficiaryBankBranchName': '',
      'beneficiaryBankAddress1': '',
      'beneficiaryBankAddress2': '',
      'beneficiaryBankAddress3': '',
      'beneficiaryBankCountryName': 'GERMANY',
      'correspondentBankName': '',
      'identicalStatusFlag': 'N',
      'beneficiaryResidentshipCode': 'ID',
      'beneficiaryCitizenshipCode': 'ID',
      'beneficiaryCategoryCode': 'C9',
      'transactorRelationship': 'Y',
      'transactionPurposeCode': '2012',
      'transactionDescription': 'TRX DESC',
      'notificationFlag': 'N',
      'beneficiaryEmail': '',
      'transactionInstructionDate': '20231102',
      'docUniqueId': ''
    }
  );
  return res;
};
const transferLLG = async () => {
  const res = await bnidirect.transferLLG(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitedAccountNo': '1000599764',
      'amountCurrency': 'IDR',
      'amount': '960000',
      'treasuryReferenceNo': '',
      'chargeTo': 'OUR',
      'remark1': 'LLG-RMK1',
      'remark2': 'LLG-RMK2',
      'remark3': 'LLG-RMK3',
      'remitterReferenceNo': 'UYY26092023005',
      'finalizePaymentFlag': 'Y',
      'beneficiaryReferenceNo': 'BEN202210LLG141',
      'beneficiaryAccountNo': '111282623',
      'beneficiaryAccountName': 'PAK BUDI',
      'beneficiaryAddress1': 'BENE ADDRESS1',
      'beneficiaryAddress2': 'BENE ADDRESS2',
      'beneficiaryAddress3': 'BENE ADDRESS3',
      'beneficiaryResidentshipCountryCode': 'ID',
      'beneficiaryCitizenshipCountryCode': 'ID',
      'beneficiaryType': '1',
      'beneficiaryBankCode': 'CENAIDJA',
      'beneficiaryBankName': 'BANK CENTRAL ASIA',
      'beneficiaryBankBranchCode': '0391',
      'beneficiaryBankBranchName': '',
      'beneficiaryBankCityName': 'WIL. KOTA JAKARTA PUSAT',
      'notificationFlag': 'Y',
      'beneficiaryEmail': 'wide.uatbeneficiary@gmail.com',
      'transactionInstructionDate': '20231102'
    }
  );
  return res;
};
const transferOnline = async () => {
  const res = await bnidirect.transferOnline(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitedAccountNo': '1000599764',
      'amountCurrency': 'IDR',
      'amount': '86000',
      'treasuryReferenceNo': '',
      'chargeTo': 'OUR',
      'remark1': 'OT-RMK1',
      'remark2': 'OT-RMK2',
      'remark3': 'OT-RMK3',
      'remitterReferenceNo': 'UYOT26092316',
      'finalizePaymentFlag': 'Y',
      'beneficiaryReferenceNo': 'BEN2022090OT253',
      'beneficiaryAccountNo': '123456789',
      'beneficiaryBankCode': '014',
      'beneficiaryBankName': 'BANK BCA',
      'notificationFlag': 'Y',
      'beneficiaryEmail': 'wide.uatbeneficiary@gmail.com',
      'transactionInstructionDate': '20231102'
    }
  );
  return res;
};
const transferRTGS = async () => {
  const res = await bnidirect.transferRTGS(
    {
      'corporateId': 'BNI_SIT',
      'userId': 'WTI_MAKER1',
      'debitedAccountNo': '1000599764',
      'amountCurrency': 'IDR',
      'amount': '100050000',
      'treasuryReferenceNo': '',
      'chargeTo': 'OUR',
      'remark1': 'RTGS-RMKUYY1',
      'remark2': 'RTGS-RMKUYY2',
      'remark3': 'RTGS-RMKUYY3',
      'remitterReferenceNo': 'UYY260920230003',
      'finalizePaymentFlag': 'Y',
      'beneficiaryReferenceNo': 'BEN202210RTGS064',
      'beneficiaryAccountNo': '10529373',
      'beneficiaryAccountName': 'PAK CHANDRA',
      'beneficiaryAddress1': 'BENE ADD 1',
      'beneficiaryAddress2': 'BENE ADD 2',
      'beneficiaryAddress3': 'BENE ADD 3',
      'beneficiaryResidentshipCountryCode': 'ID',
      'beneficiaryCitizenshipCountryCode': 'ID',
      'beneficiaryBankCode': 'CENAIDJA',
      'beneficiaryBankName': 'BANK CENTRAL ASIA',
      'beneficiaryBankBranchCode': '0391',
      'beneficiaryBankBranchName': '',
      'beneficiaryBankCityName': 'WIL. KOTA JAKARTA PUSAT',
      'notificationFlag': 'Y',
      'beneficiaryEmail': 'wide.uatbeneficiary@gmail.com',
      'transactionInstructionDate': '20231102'
    }
  );
  return res;
};