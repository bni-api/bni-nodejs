export default BNIMove;
declare class BNIMove {
  constructor(
    client: any,
    options?: {
      channelId: any;
    }
  );
  client: any;
  config: any;
  timeStamp: any;
  configOtr: {
    channelId: any;
  };
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */
  bankAndCurrencyLimitation(params?: {
    serviceType: 'SWIFT' | 'NON-SWIFT';
    country: string;
  });
  chargesAndRateInquiry(params?: {
    orderingId: string;
    bic: string;
    serviceType: string;
    sourceCcy: string;
    orderingCcy: string;
    detailCharges: string;
    orderingAmount: number;
  });
  transactionOverbooking(params?: {
    referenceNumber: string;
    orderingId: string;
    orderingBic: string;
    orderingName: string;
    orderingAddress: string;
    orderingEmail: string;
    orderingPhoneNumber: string;
    beneficiaryAccount: string;
    beneficiaryName: string;
    beneficiaryAddress: string;
    beneficiaryPhoneNumber: string;
    accountWithInstCode: string;
    accountWithInstBic: string;
    accountWithInstName: string;
    remittanceInfo: string;
    invoiceNumber: string;
    invoiceAmount: number;
  });
  trackingTransaction(params?: any);
}
