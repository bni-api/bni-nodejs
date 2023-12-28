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
  balanceInquiry(params?: {
    corporateId: string;
    userId: string;
    accountList: Array<string>;
  });
  domesticSingleBIFastTransfer(params?: {
    corporateId: string;
    userId: string;
    debitedAccountNo: string;
    amountCurrency: string;
    amount: string;
    exchangeRateCode: string;
    treasuryReferenceNo?: string;
    chargeTo: string;
    remark1: string;
    remark2: string;
    remark3: string;
    remitterReferenceNo: string;
    finalizePaymentFlag: string;
    beneficiaryReferenceNo: string;
    usedProxy: string;
    beneficiaryAccountNo: string;
    proxyId?: string;
    beneficiaryBankCode: string;
    beneficiaryBankName: string;
    notificationFlag: string;
    beneficiaryEmail?: string;
    transactionInstructionDate: string;
    transactionPurposeCode: string;
  });

  bniPopsCashAndCarry(params?: {
    corporateId: string;
    userId: string;
    debitedAccountNo: string;
    salesOrganizationCode: string;
    distributionChannelCode: string;
    productCode: string;
    shipTo: string;
    debitOrCreditNoteNo: string;
    productInformationDetail: string[];
  });

  bniPopsProductAllocation(params?: {
    corporateId: string;
    userId: string;
    debitedAccountNo: string;
    salesOrganizationCode: string;
    distributionChannelCode: string;
    productCode: string;
    shipTo: string;
    scheduleAggreementNo: string;
    debitOrCreditNoteNo: string;
    productInformationDetail: string[];
  });

  bniPopsResubmitCashAndCarry(params?: {
    corporateId: string;
    userId: string;
    transactionReferenceNo: string;
    SONumber: string;
  });

  bniPopsResubmitProductAllocation(params?: {
    corporateId: string;
    userId: string;
    transactionReferenceNo: string;
    SONumber: string;
  });

  bulkGetStatus(params?: {
    corporateId: string;
    userId: string;
    fileRefNo: string;
    apiRefNo: string;
  });

  inquiryVirtualAccountTransaction(params?: {
    corporateId: string;
    userId: string;
    virtualAccountNo: string;
    fromDate: string;
    toDate: string;
  });

  updateVirtualAccount(params?: {
    corporateId: string;
    userId: string;
    companyCode: string;
    virtualAccountNo: string;
    virtualAccountName: string;
    virtualAccountTypeCode: string;
    billingAmount: string;
    varAmount1: string;
    varAmount2: string;
    expiryDate: string;
    expiryTime: string;
    mobilePhoneNo: string;
    statusCode: string;
  });

  createVirtualAccount(params?: {
    corporateId: string;
    userId: string;
    companyCode: string;
    virtualAccountNo: string;
    virtualAccountName: string;
    virtualAccountTypeCode: string;
    billingAmount: string;
    varAmount1: string;
    varAmount2: string;
    expiryDate: string;
    expiryTime: string;
    mobilePhoneNo: string;
    statusCode: string;
  });

  bulkPaymentMixed(params?: {
    corporateId: string;
    userId: string;
    apiRefNo: string;
    instructionDate: string;
    session: string;
    serviceType: string;
    debitAcctNo: string;
    amount: string;
    currency: string;
    chargeTo: string;
    residenceCode: string;
    citizenCode: string;
    category: string;
    transactionType: string;
    accountNmValidation: string;
    remark: string;
    childContent: string;
  });
  callbackApi(params?: {
    corporateId: string;
    userId: string;
    apiRefNo: string;
    status: string;
  });
  inquiryChildAccount(params?: {
    corporateId: string;
    userId: string;
    accountNo: string;
  });
  inquiryForexRate(params?: {
    corporateId: string;
    userId: string;
    currencyList: string[];
  });
  inquiryBIFastBeneficiaryName(params?: {
    corporateId: string;
    userId: string;
    usedProxy: string;
    beneficiaryAccountNo: string;
    proxyId: string;
    beneficiaryBankCode: string;
  });
  payrollMixed(params?: {
    corporateId: string;
    userId: string;
    apiRefNo: string;
    instructionDate: string;
    session: string;
    serviceType: string;
    debitAcctNo: string;
    amount: string;
    currency: string;
    chargeTo: string;
    residenceCode: string;
    citizenCode: string;
    category: string;
    transactionType: string;
    accountNmValidation: string;
    remark: string;
    childContent: string;
  });
}
