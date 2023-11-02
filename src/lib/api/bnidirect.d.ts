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
}
