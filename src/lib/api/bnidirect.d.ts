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
  createMpnG2BillingId(params?: {
    corporateId: string;
    userId: string;
    npwp: string;
    taxPayerName: string;
    taxPayerAddress1: string;
    taxPayerAddress2: string;
    taxPayerAddress3: string;
    taxPayerCity: string;
    NOP: string;
    MAPCode: string;
    depositTypeCode: string;
    wajibPungutNPWP: string;
    wajibPungutName: string;
    wajibPungutAddress1: string;
    wajibPungutAddress2: string;
    wajibPungutAddress3: string;
    participantId: string;
    assessmentTaxNumber: string;
    amountCurrency: string;
    amount: string;
    monthFrom: string;
    monthTo: string;
    year: string;
  });
  inquiryNpwp(params?: {
    corporateId: string;
    userId: string;
    npwp: string;
    NOP: string;
    MAPCode: string;
    depositTypeCode: string;
    currency: string;
  });
  iniquiryInhouseAndVaBeneficiaryName(params?: {
    corporateId: string;
    userId: string;
    accountNo: string;
  });
  inquiryLlgRtgsOnlineBeneficiaryName(params?: {
    corporateId: string;
    userId: string;
    beneficiaryAccountNo: string;
    beneficiaryBankCode: string;
  });
  inquiryAccountStatement(params?: {
    corporateId: string;
    userId: string;
    fromDate: string;
    toDate: string;
    transactionType: string;
    accountList: Array<String>;
  });
  inquiryBilling(params?: {
    corporateId: string;
    userId: string;
    debitedAccountNo: string;
    institution: string;
    customerInformation1: string;
    customerInformation2: string;
    customerInformation3: string;
    customerInformation4: string;
    customerInformation5: string;
  })
  inquiryBniPopsCashAndCarry(params?: {
    corporateId: string;
    userId: string;
    debitAccountNo: string;
    salesOrganizationCode: string;
    distributionChannelCode: string;
    productCode: string;
    shipTo: string;
    debitOrCreditNoteNo: string;
    productInformationDetail: string[];
  });
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
}
