import { Rdl, BNIClient } from '../src/index.js';
import { strictEqual, deepEqual } from 'assert';
import { cred_rdl } from './constant.js';

describe('rdl.js', () => {
    describe('registerInvestor', () => {
        it('should return responseCode 0001', async () => {
            const res = await registerInvestor();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('registerInvestorAccount', () => {
        it('should return responseCode 0001', async () => {
            const res = await registerInvestorAccount();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('inquiryAccountInfo', () => {
        it('should return responseCode 0001', async () => {
            const res = await inquiryAccountInfo();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('inquiryAccountBalance', () => {
        it('should return responseCode 0001', async () => {
            const res = await inquiryAccountBalance();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('inquiryAccountHistory', () => {
        it('should return responseCode 0001', async () => {
            const res = await inquiryAccountHistory();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('paymentUsingTransfer', () => {
        it('should return responseCode 0001', async () => {
            const res = await paymentUsingTransfer();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('paymentUsingClearing', () => {
        it('should return responseCode 0001', async () => {
            const res = await paymentUsingClearing();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('paymentUsingRTGS', () => {
        it('should return responseCode 0001', async () => {
            const res = await paymentUsingRTGS();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('inquiryPaymentStatus', () => {
        it('should return responseCode 0001', async () => {
            const res = await inquiryPaymentStatus();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('inquiryInterbankAccount', () => {
        it('should return responseCode 0001', async () => {
            const res = await inquiryInterbankAccount();
            strictEqual(res.response.responseCode, '0001');
        });
    });

    describe('paymentUsingInterbank', () => {
        it('should return responseCode 0001', async () => {
            const res = await paymentUsingInterbank();
            strictEqual(res.response.responseCode, '0001');
        });
    });

});



const client = new BNIClient({
    env: 'dev',
    clientId: cred_rdl.clientId,
    clientSecret: cred_rdl.clientSecret,
    apiKey: cred_rdl.apiKey,
    apiSecret: cred_rdl.apiSecret,
    appName: cred_rdl.appName
});
const rdl = new Rdl(client);

const registerInvestor = async () => {
    const res = await rdl.registerInvestor({
        companyId: "SANDBOX",
        parentCompanyId: "STI_CHS",
        requestUuid: " A2E6973518F34BB8",
        uuidFaceRecog: "29FCB72E71D34C48",
        title: "04",
        firstName: "",
        middleName: "",
        lastName: "JELITA",
        optNPWP: "1",
        NPWPNum: "999999999999999",
        nationality: "ID",
        domicileCountry: "ID",
        religion: "2",
        birthPlace: "Jakarta",
        birthDate: "01091989",
        gender: "F",
        isMarried: "L",
        motherMaidenName: "Dina Maryati",
        jobCode: "01",
        education: "07",
        idNumber: "3175044109890002",
        idIssuingCity: "Jakarta Barat",
        idExpiryDate: "26102099",
        addressStreet: "Jalan Mawar Melati",
        addressRtRwPerum: "003009Sentosa",
        addressKel: "Cengkareng Barat",
        addressKec: "Cengkareng/Jakarta Barat",
        zipCode: "11730",
        homePhone1: "021",
        homePhone2: "745454545",
        officePhone1: "",
        officePhone2: "",
        mobilePhone1: "0812",
        mobilePhone2: "323238",
        faxNum1: "",
        faxNum2: "",
        email: "jelita@gmail.com",
        monthlyIncome: "8000000",
        branchOpening: "0259"
    });
    return res;
};

const registerInvestorAccount = async () => {
    const res = await rdl.registerInvestorAccount({
        companyId: 'SANDBOX',
        parentCompanyId: 'STI_CHS',
        requestUuid: '106323AEB63D4FF0',
        cifNumber: '9100749959',
        currency: 'IDR',
        openAccountReason: '2',
        sourceOfFund: '1',
        branchId: '0259',
    });
    return res;
};

const inquiryAccountInfo = async () => {
    const res = await rdl.inquiryAccountInfo({
        companyId: 'SANDBOX',
        parentCompanyId: 'STI_CHS',
        requestUuid: 'E26DB4C8F6484E72',
        accountNumber: '0115476117'
    });
    return res;
};

const inquiryAccountBalance = async () => {
    const res = await rdl.inquiryAccountBalance({
        companyId: 'SANDBOX',
        parentCompanyId: 'STI_CHS',
        requestUuid: 'E26DB4C8F6484E72',
        accountNumber: '0115476117'
    });
    return res;
};

const inquiryAccountHistory = async () => {
    const res = await rdl.inquiryAccountHistory({
        companyId: 'SANDBOX',
        parentCompanyId: 'STI_CHS',
        requestUuid: '413DDF336A174F81',
        accountNumber: '0115476117'
    });
    return res;
};

const paymentUsingTransfer = async () => {
    const res = await rdl.paymentUsingTransfer({
        companyId: "SANDBOX",
        parentCompanyId: "STI_CHS",
        requestUuid: "E8C6E0027F6E429F",
        accountNumber: "0115476117",
        beneficiaryAccountNumber: "0115471119",
        currency: "IDR",
        amount: "11500",
        remark: "Test P2PL"
    });
    return res;
};

const paymentUsingClearing = async () => {
    const res = await rdl.paymentUsingClearing({
        companyId: "SANDBOX",
        parentCompanyId: "STI_CHS",
        requestUuid: "F980D79CB0EB41D7",
        accountNumber: "0115476117",
        beneficiaryAccountNumber: "3333333333",
        beneficiaryAddress1: "Jakarta",
        beneficiaryAddress2: "",
        beneficiaryBankCode: "140397",
        beneficiaryName: "Panji Samudra",
        currency: "IDR",
        amount: "15000",
        remark: "Test kliring",
        chargingType: "OUR"
    });
    return res;
};

const paymentUsingRTGS = async () => {
    const res = await rdl.paymentUsingRTGS({
        companyId: "SANDBOX",
        parentCompanyId: "STI_CHS",
        requestUuid: "871BFD631BBB4798",
        accountNumber: "0115476117",
        beneficiaryAccountNumber: "3333333333",
        beneficiaryAddress1: "Jakarta",
        beneficiaryAddress2: "",
        beneficiaryBankCode: "CENAIDJA",
        beneficiaryName: "Panji Samudra",
        currency: "IDR",
        amount: "150000000",
        remark: "Test rtgs",
        chargingType: "OUR"
    });
    return res;
};

const inquiryPaymentStatus = async () => {
    const res = await rdl.inquiryPaymentStatus({
        companyId: 'SANDBOX',
        parentCompanyId: 'STI_CHS',
        requestUuid: '106323AEB63D4FF0',
        requestedUuid: 'E8C6E0027F6E429F',

    });
    return res;
};

const inquiryInterbankAccount = async () => {
    const res = await rdl.inquiryInterbankAccount({
        companyId: "SANDBOX",
        parentCompanyId: "STI_CHS",
        requestUuid: "C202946D99844E59",
        accountNumber: "0115476117",
        beneficiaryBankCode: "014",
        beneficiaryAccountNumber: "3333333333"
    });
    return res;
};

const paymentUsingInterbank = async () => {
    const res = await rdl.paymentUsingInterbank({
        companyId: "SANDBOX",
        parentCompanyId: "STI_CHS",
        requestUuid: "C202946D99844E59",
        accountNumber: "0115476117",
        beneficiaryAccountNumber: "3333333333",
        beneficiaryAccountName: "KEN AROK",
        beneficiaryBankCode: "014",
        beneficiaryBankName: "BANK BCA",
        amount: "15000"
    });
    return res;
};

