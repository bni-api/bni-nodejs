export default OneGatePayment;
declare class OneGatePayment {
    constructor(client: any);
    client: any;
    config: any;
    httpClient: HttpClient;
    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * accountNo
     */
    getBalance(params?: {
        accountNo: any;
    }): Promise<any>;
    getInHouseInquiry(params?: {
        accountNo: any;
    }): Promise<any>;
    doPayment(params?: {
        customerReferenceNumber: any;
        paymentMethod: any;
        debitAccountNo: any;
        creditAccountNo: any;
        valueDate: any;
        valueCurrency: any;
        valueAmount: any;
        remark: string;
        beneficiaryEmailAddress: string;
        beneficiaryName: string;
        beneficiaryAddress1: string;
        beneficiaryAddress2: string;
        destinationBankCode: string;
        chargingModelId: string;
    }): Promise<any>;
    getPaymentStatus(params?: {
        customerReferenceNumber: any;
    }): Promise<any>;
    getInterBankInquiry(params?: {
        customerReferenceNumber: any;
        accountNum: any;
        destinationBankCode: any;
        destinationAccountNum: any;
    }): Promise<any>;
    getInterBankPayment(params?: {
        customerReferenceNumber: any;
        amount: any;
        destinationAccountNum: any;
        destinationAccountName: any;
        destinationBankCode: any;
        destinationBankName: any;
        accountNum: any;
        retrievalReffNum: any;
    }): Promise<any>;
    holdAmount(params?: {
        customerReferenceNumber: any;
        amount: any;
        accountNo: any;
        detail: string;
    }): Promise<any>;
    holdAmountRelease(params?: {
        customerReferenceNumber: any;
        amount: any;
        accountNo: any;
        bankReference: any;
        holdTransactionDate: any;
    }): Promise<any>;
}
import HttpClient from "../net/httpClient.js";
