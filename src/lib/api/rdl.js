import HttpClient from '../net/httpClient.js';
import { responseRDL } from '../util/response.js';
import { generateSignature, generateClientId, generateUUID } from '../util/util.js';

class RDL {
    constructor(client) {
        this.client = client;
        this.config = client.getConfig();
        this.httpClient = new HttpClient();
        this.timeStamp = new Date().toISOString();
    }

    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * accountNo
     */

    async registerInvestor(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            uuidFaceRecog,
            title,
            firstName,
            middleName,
            lastName,
            optNPWP,
            NPWPNum,
            nationality,
            domicileCountry,
            religion,
            birthPlace,
            birthDate,
            gender,
            isMarried,
            motherMaidenName,
            jobCode,
            jobDesc,
            education,
            idNumber,
            idIssuingCity,
            idExpiryDate,
            addressStreet,
            addressRtRwPerum,
            addressKel,
            addressKec,
            zipCode,
            homePhone1,
            homePhone2,
            employerName,
            officePhone1,
            officePhone2,
            mobilePhone1,
            mobilePhone2,
            employerAddDet,
            employerAddCity,
            faxNum1,
            faxNum2,
            email,
            monthlyIncome,
            branchOpening,
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID()
            },
            uuidFaceRecog: params.uuidFaceRecog,
            title: params.title,
            firstName: params.firstName,
            middleName: params.middleName,
            lastName: params.lastName,
            optNPWP: params.optNPWP,
            NPWPNum: params.NPWPNum,
            nationality: params.nationality,
            domicileCountry: params.domicileCountry,
            religion: params.religion,
            birthPlace: params.birthPlace,
            birthDate: params.birthDate,
            gender: params.gender,
            isMarried: params.isMarried,
            motherMaidenName: params.motherMaidenName,
            jobCode: params.jobCode,
            jobDesc: params.jobDesc,
            education: params.education,
            idNumber: params.idNumber,
            idIssuingCity: params.idIssuingCity,
            idExpiryDate: params.idExpiryDate,
            addressStreet: params.addressStreet,
            addressRtRwPerum: params.addressRtRwPerum,
            addressKel: params.addressKel,
            addressKec: params.addressKel,
            zipCode: params.zipCode,
            homePhone1: params.homePhone1,
            homePhone2: params.homePhone2,
            employerName: params.employerName,
            officePhone1: params.officePhone1,
            officePhone2: params.officePhone2,
            mobilePhone1: params.mobilePhone1,
            mobilePhone2: params.mobilePhone2,
            employerAddDet: params.employerAddDet,
            employerAddCity: params.employerAddCity,
            faxNum1: params.faxNum1,
            faxNum2: params.faxNum2,
            email: params.email,
            monthlyIncome: params.monthlyIncome,
            branchOpening: params.branchOpening,
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/register/investor`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });
        return responseRDL({ res: res });
    }

    async registerInvestorAccount(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            cifNumber,
            currency,
            openAccountReason,
            sourceOfFund,
            branchId,
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID()
            },
            cifNumber: params.cifNumber,
            currency: params.currency,
            openAccountReason: params.openAccountReason,
            sourceOfFund: params.sourceOfFund,
            branchId: params.branchId
        };


        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/register/investor/account`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async inquiryAccountInfo(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber
        }
    ) {
        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/inquiry/account/info`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async inquiryAccountBalance(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber
        };
        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/inquiry/account/balance`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });

    }

    async inquiryAccountHistory(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.request({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/inquiry/account/history`,
            signature: signature.split('.')[2],
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async paymentUsingTransfer(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber,
            beneficiaryAccountNumber,
            currency,
            amount,
            remark
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber,
            beneficiaryAccountNumber: params.beneficiaryAccountNumber,
            currency: params.currency,
            amount: params.amount,
            remark: params.remark,
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/payment/transfer`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async inquiryPaymentStatus(
        params = {
            requestedUuid,
            companyId,
            parentCompanyId,
            requestUuid,
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            requestedUuid: params.requestedUuid,
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/inquiry/payment/status`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async paymentUsingClearing(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber,
            beneficiaryAccountNumber,
            beneficiaryAddress1,
            beneficiaryAddress2,
            beneficiaryBankCode,
            beneficiaryName,
            currency,
            amount,
            remark,
            chargingType
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber,
            beneficiaryAccountNumber: params.beneficiaryAccountNumber,
            beneficiaryAddress1: params.beneficiaryAddress1,
            beneficiaryAddress2: params.beneficiaryAddress2,
            beneficiaryBankCode: params.beneficiaryBankCode,
            beneficiaryName: params.beneficiaryName,
            currency: params.currency,
            amount: params.amount,
            remark: params.remark,
            chargingType: params.chargingType
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/payment/clearing`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async paymentUsingRTGS(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber,
            beneficiaryAccountNumber,
            beneficiaryAddress1,
            beneficiaryAddress2,
            beneficiaryBankCode,
            beneficiaryName,
            currency,
            amount,
            remark,
            chargingType
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber,
            beneficiaryAccountNumber: params.beneficiaryAccountNumber,
            beneficiaryAddress1: params.beneficiaryAddress1,
            beneficiaryAddress2: params.beneficiaryAddress2,
            beneficiaryBankCode: params.beneficiaryBankCode,
            beneficiaryName: params.beneficiaryName,
            currency: params.currency,
            amount: params.amount,
            remark: params.remark,
            chargingType: params.chargingType
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/payment/rtgs`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async inquiryInterbankAccount(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber,
            beneficiaryBankCode,
            beneficiaryAccountNumber
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber,
            beneficiaryBankCode: params.beneficiaryBankCode,
            beneficiaryAccountNumber: params.beneficiaryAccountNumber
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/inquiry/interbank/account`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

    async paymentUsingInterbank(
        params = {
            companyId,
            parentCompanyId,
            requestUuid,
            accountNumber,
            beneficiaryAccountNumber,
            beneficiaryAccountName,
            beneficiaryBankCode,
            beneficiaryBankName,
            amount
        }
    ) {

        const body = {
            header: {
                companyId: params.companyId,
                parentCompanyId: params.parentCompanyId,
                requestUuid: generateUUID(),
            },
            accountNumber: params.accountNumber,
            beneficiaryAccountNumber: params.beneficiaryAccountNumber,
            beneficiaryAccountName: params.beneficiaryAccountName,
            beneficiaryBankCode: params.beneficiaryBankCode,
            beneficiaryBankName: params.beneficiaryBankName,
            amount: params.amount
        };

        const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        const res = await this.httpClient.requestV2({
            method: 'POST',
            apiKey: this.config.apiKey,
            accessToken: await this.client.getToken(),
            url: `${this.client.getBaseUrl()}/p2pl/v2.1/payment/interbank`,
            signature: signature.split('.')[2],
            timestamp: this.timeStamp,
            data: { request: { ...body } }
        });

        return responseRDL({ res: res });
    }

}
export default RDL;
