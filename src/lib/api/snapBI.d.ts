export default SnapBI;
declare class SnapBI {
    constructor(client: any, options?: {
        privateKeyPath: any;
        channelId: any;
        ipAddress: string;
        latitude: string;
        longitude: string;
    });
    client: any;
    config: any;
    httpClient: HttpClient;
    configSnap: {
        privateKeyPath: any;
        channelId: any;
        ipAddress: string;
        latitude: string;
        longitude: string;
    };
    getTokenSnapBI(): Promise<any>;
    balanceInquiry(params?: {
        partnerReferenceNo: string;
        accountNo: any;
    }): Promise<any>;
    bankStatement(params?: {
        partnerReferenceNo: string;
        accountNo: any;
        fromDateTime: string;
        toDateTime: string;
    }): Promise<any>;
    internalAccountInquiry(params?: {
        partnerReferenceNo: string;
        beneficiaryAccountNo: any;
    }): Promise<any>;
    transactionStatusInquiry(params?: {
        originalPartnerReferenceNo: string;
        originalReferenceNo: any;
        originalExternalId: string;
        serviceCode: any;
        transactionDate: string;
        amount: {
            value: any;
            currency: any;
        };
        additionalInfo: {
            deviceId: string;
            channel: string;
        };
    }): Promise<any>;
    transferIntraBank(params?: {
        partnerReferenceNo: any;
        amount: {
            value: any;
            currency: any;
        };
        beneficiaryAccountNo: any;
        beneficiaryEmail: string;
        currency: string;
        customerReference: string;
        feeType: string;
        remark: string;
        sourceAccountNo: any;
        transactionDate: string;
        additionalInfo: {
            deviceId: string;
            channel: string;
        };
    }): Promise<any>;
    transferRTGS(params?: {
        partnerReferenceNo: any;
        amount: {
            value: any;
            currency: any;
        };
        beneficiaryAccountName: any;
        beneficiaryAccountNo: any;
        beneficiaryAddress: string;
        beneficiaryBankCode: any;
        beneficiaryBankName: string;
        beneficiaryCustomerResidence: any;
        beneficiaryCustomerType: any;
        beneficiaryEmail: string;
        currency: string;
        customerReference: any;
        feeType: string;
        kodePos: string;
        recieverPhone: string;
        remark: string;
        senderCustomerResidence: string;
        senderCustomerType: string;
        senderPhone: string;
        sourceAccountNo: any;
        transactionDate: string;
        additionalInfo: {
            deviceId: string;
            channel: string;
        };
    }): Promise<any>;
    transferSKNBI(params?: {
        partnerReferenceNo: any;
        amount: {
            value: any;
            currency: any;
        };
        beneficiaryAccountName: any;
        beneficiaryAccountNo: any;
        beneficiaryAddress: string;
        beneficiaryBankCode: any;
        beneficiaryBankName: string;
        beneficiaryCustomerResidence: any;
        beneficiaryCustomerType: any;
        beneficiaryEmail: string;
        currency: string;
        customerReference: any;
        feeType: string;
        kodePos: string;
        recieverPhone: string;
        remark: string;
        senderCustomerResidence: string;
        senderCustomerType: string;
        senderPhone: string;
        sourceAccountNo: any;
        transactionDate: string;
        additionalInfo: {
            deviceId: string;
            channel: string;
        };
    }): Promise<any>;
    externalAccountInquiry(params?: {
        beneficiaryBankCode: any;
        beneficiaryAccountNo: any;
        partnerReferenceNo: string;
        additionalInfo: {
            deviceId: string;
            channel: string;
        };
    }): Promise<any>;
    transferInterBank(params?: {
        partnerReferenceNo: any;
        amount: {
            value: any;
            currency: any;
        };
        beneficiaryAccountName: any;
        beneficiaryAccountNo: any;
        beneficiaryAddress: string;
        beneficiaryBankCode: any;
        beneficiaryBankName: string;
        beneficiaryEmail: string;
        currency: string;
        customerReference: string;
        sourceAccountNo: any;
        transactionDate: string;
        feeType: string;
        additionalInfo: {
            deviceId: string;
            channel: string;
        };
    }): Promise<any>;
}
import HttpClient from "../net/httpClient.js";
