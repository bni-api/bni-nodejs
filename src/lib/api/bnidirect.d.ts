export default BNIDIRECT;
declare class BNIDIRECT {
  constructor(client: any);
  client: any;
  config: any;
  timeStamp: any;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */
  billingPayment(params?: {
      corporateId:string;
      userId:string;
      debitedAccountNo:string;
      institution:string;
      payeeName:string;
      customerInformation1:string;
      customerInformation2:string;
      customerInformation3:string;
      customerInformation4:string;
      customerInformation5:string;
      billPresentmentFlag:string;
      remitterRefNo:string;
      finalizePaymentFlag:string;
      beneficiaryRefNo:string;
      notificationFlag:string;
      beneficiaryEmail:string;
      transactionInstructionDate:string;
      amountCurrency:string;
      amount:string;
  }): Promise<any>;
  InquiryBniPOPSProductAllocation(params?: {
      corporateId:string;
      userId:string;
      debitAccountNo:string;
      salesOrganizationCode:string;
      distributionChannelCode:string;
      productCode:string;
      shipTo:string;
      scheduleAggreementNo:string;
      debitOrCreditNoteNo:string;
      productInformationDetail:string[];
  }): Promise<any>;
  getPaymentStatus(params?: { 
      corporateId:string;
      userId: string;
      transactionReferenceNo:string;
      remitterReferenceNo:string;
  }): Promise<any>;
  inhouseTransfer(params?: { 
      corporateId:string;
      userId: string;
      debitedAccountNo: string;
      amountCurrency:string;
      amount: string;
      treasuryReferenceNo: string;
      transactionPurposeCode: string;
      remark1: string;
      remark2: string;
      remark3: string;
      remitterReferenceNo: string;
      finalizePaymentFlag: string;
      beneficiaryReferenceNo: string;
      toAccountNo: string;
      notificationFlag: string;
      beneficiaryEmail: string;
      transactionInstructionDate: string;
      docUniqueId: string;
  }): Promise<any>;
  transferInternational(params?: { 
      corporateId: string;
      userId: string;
      debitedAccountNo: string;
      amountCurrency: string;
      amount: string;
      treasuryReferenceNo: string;
      chargeTo: string;
      remark1:string;
      remark2: string;
      remark3: string;
      remitterReferenceNo: string;
      finalizePaymentFlag: string;
      beneficiaryReferenceNo: string;
      beneficiaryAccountNo: string;
      beneficiaryAccountName: string;
      beneficiaryAddress1: string;
      beneficiaryAddress2: string;
      beneficiaryAddress3: string;
      organizationDirectoryCode: string;
      beneficiaryBankCode: string;
      beneficiaryBankName: string;
      beneficiaryBankBranchName: string;
      beneficiaryBankAddress1: string;
      beneficiaryBankAddress2: string;
      beneficiaryBankAddress3: string;
      beneficiaryBankCountryName: string;
      correspondentBankName: string;
      identicalStatusFlag: string;
      beneficiaryResidentshipCode: string;
      beneficiaryCitizenshipCode: string;
      beneficiaryCategoryCode:string;
      transactorRelationship:string;
      transactionPurposeCode: string;
      transactionDescription: string;
      notificationFlag: string;
      beneficiaryEmail: string;
      transactionInstructionDate: string;
      docUniqueId: string;
  }): Promise<any>;
  transferLLG(params?: { 
      corporateId:string;
      userId: string;
      debitedAccountNo:string;
      amountCurrency: string;
      amount:string;
      treasuryReferenceNo: string;
      chargeTo:string;
      remark1:string;
      remark2: string;
      remark3: string;
      remitterReferenceNo: string;
      finalizePaymentFlag: string;
      beneficiaryReferenceNo: string;
      beneficiaryAccountNo:string;
      beneficiaryAccountName:string;
      beneficiaryAddress1: string;
      beneficiaryAddress2: string;
      beneficiaryAddress3: string;
      beneficiaryResidentshipCountryCode: string;
      beneficiaryCitizenshipCountryCode: string;
      beneficiaryType: string;
      beneficiaryBankCode: string;
      beneficiaryBankName: string;
      beneficiaryBankBranchCode: string;
      beneficiaryBankBranchName:string;
      beneficiaryBankCityName: string;
      notificationFlag: string;
      beneficiaryEmail: string;
      transactionInstructionDate: string;
  }): Promise<any>;
  transferOnline(params?: { 
      corporateId: string;
      userId: string;
      debitedAccountNo: string;
      amountCurrency:string;
      amount:string;
      treasuryReferenceNo: string;
      chargeTo: string;
      remark1:string;
      remark2: string;
      remark3: string;
      remitterReferenceNo: string;
      finalizePaymentFlag: string;
      beneficiaryReferenceNo: string;
      beneficiaryAccountNo: string;
      beneficiaryBankCode: string;
      beneficiaryBankName: string;
      notificationFlag: string;
      beneficiaryEmail: string;
      transactionInstructionDate: string;
  }): Promise<any>;
  transferRTGS(params?: {
      corporateId: string;
      userId: string;
      debitedAccountNo: string;
      amountCurrency: string;
      amount: string;
      treasuryReferenceNo: string;
      chargeTo: string;
      remark1: string;
      remark2: string;
      remark3: string;
      remitterReferenceNo: string;
      finalizePaymentFlag: string;
      beneficiaryReferenceNo: string;
      beneficiaryAccountNo: string;
      beneficiaryAccountName: string;
      beneficiaryAddress1: string;
      beneficiaryAddress2: string;
      beneficiaryAddress3: string;
      beneficiaryResidentshipCountryCode: string;
      beneficiaryCitizenshipCountryCode: string;
      beneficiaryBankCode: string;
      beneficiaryBankName: string;
      beneficiaryBankBranchCode: string;
      beneficiaryBankBranchName: string;
      beneficiaryBankCityName: string;
      notificationFlag: string;
      beneficiaryEmail: string;
      transactionInstructionDate: string;
  }): Promise<any>;
}