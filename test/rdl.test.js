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

    // describe('registerInvestorAccount', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await registerInvestorAccount();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('inquiryAccountInfo', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await inquiryAccountInfo();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('inquiryAccountBalance', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await inquiryAccountBalance();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('inquiryAccountHistory', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await inquiryAccountHistory();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('paymentUsingTransfer', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await paymentUsingTransfer();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('paymentUsingClearing', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await paymentUsingClearing();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('paymentUsingRTGS', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await paymentUsingRTGS();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('inquiryPaymentStatus', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await inquiryPaymentStatus();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('inquiryInterbankAccount', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await inquiryInterbankAccount();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('paymentUsingInterbank', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await paymentUsingInterbank();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

    // describe('faceRecognition', () => {
    //     it('should return responseCode 0001', async () => {
    //         const res = await faceRecognition();
    //         strictEqual(res.response.responseCode, '0001');
    //     });
    // });

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

// positif case
// console.log(" + Case")
// const registerInvestor = async () => {

//     const res = await rdl.registerInvestor({
//         companyId: "SANDBOX",
//         parentCompanyId: "STI_CHS",
//         requestUuid: "40FCB72E71D35C81",
//         uuidFaceRecog: "492F33851D634CFB",
//         title: "01",
//         firstName: "Agus",
//         middleName: "",
//         lastName: "Saputra",
//         optNPWP: "1",
//         NPWPNum: "001058893408123",
//         nationality: "ID",
//         domicileCountry: "ID",
//         religion: "2",
//         birthPlace: "Semarang",
//         birthDate: "14081982",
//         gender: "M",
//         isMarried: "S",
//         motherMaidenName: "Dina Maryati",
//         jobCode: "01",
//         education: "07",
//         idType: "01",
//         idNumber: "4147016201959998",
//         idIssuingCity: "Jakarta Barat",
//         idExpiryDate: "26102099",
//         addressStreet: "Jalan Mawar Melati",
//         addressRtRwPerum: "003009Sentosa",
//         addressKel: "Cengkareng Barat",
//         addressKec: "Cengkareng/Jakarta Barat",
//         zipCode: "11730",
//         homePhone1: "0214",
//         homePhone2: "7459",
//         officePhone1: "",
//         officePhone2: "",
//         mobilePhone1: "0812",
//         mobilePhone2: "12348331",
//         faxNum1: "",
//         faxNum2: "",
//         email: "agus.saputra@gmail.com",
//         monthlyIncome: "8000000",
//         branchOpening: "0259",
//         institutionName: "PT. BNI SECURITIES",
//         sid: "IDD280436215354",
//         employerName: "Salman",
//         employerAddDet: "St Baker",
//         employerAddCity: "Arrandelle",
//         jobDesc: "Pedagang",
//         ownedBankAccNo: "0337109074",
//         idIssuingDate: "10122008"
//     });
//     return res;
// };

// const registerInvestorAccount = async () => {
//     const res = await rdl.registerInvestorAccount({
//         companyId: 'SANDBOX',
//         parentCompanyId: 'STI_CHS',
//         requestUuid: '106323AEB63D4FF0',
//         cifNumber: '9100749959',
//         currency: 'IDR',
//         openAccountReason: '2',
//         sourceOfFund: '1',
//         branchId: '0259',
//     });
//     return res;
// };

// const inquiryAccountInfo = async () => {
//     const res = await rdl.inquiryAccountInfo({
//         companyId: 'SANDBOX',
//         parentCompanyId: 'STI_CHS',
//         requestUuid: 'E26DB4C8F6484E72',
//         accountNumber: '0115476117'
//     });
//     return res;
// };

// const inquiryAccountBalance = async () => {
//     const res = await rdl.inquiryAccountBalance({
//         companyId: 'SANDBOX',
//         parentCompanyId: 'STI_CHS',
//         requestUuid: 'E26DB4C8F6484E72',
//         accountNumber: '0115476117'
//     });
//     return res;
// };

// const inquiryAccountHistory = async () => {
//     const res = await rdl.inquiryAccountHistory({
//         companyId: 'NI001',
//         parentCompanyId: 'KSEI',
//         requestUuid: '413DDF336A174F81',
//         accountNumber: '0115476117'
//     });
//     return res;
// };

// const paymentUsingTransfer = async () => {
//     const res = await rdl.paymentUsingTransfer({
//         companyId: "SANDBOX",
//         parentCompanyId: "STI_CHS",
//         requestUuid: "E8C6E0027F6E429F",
//         accountNumber: "0115476117",
//         beneficiaryAccountNumber: "0115471119",
//         currency: "IDR",
//         amount: "11500",
//         remark: "Test P2PL"
//     });
//     return res;
// };

// const paymentUsingClearing = async () => {
//     const res = await rdl.paymentUsingClearing({
//         companyId: "SANDBOX",
//         parentCompanyId: "STI_CHS",
//         requestUuid: "F980D79CB0EB41D7",
//         accountNumber: "0115476117",
//         beneficiaryAccountNumber: "3333333333",
//         beneficiaryAddress1: "Jakarta",
//         beneficiaryAddress2: "",
//         beneficiaryBankCode: "140397",
//         beneficiaryName: "Panji Samudra",
//         currency: "IDR",
//         amount: "15000",
//         remark: "Test kliring",
//         chargingType: "OUR"
//     });
//     return res;
// };

// const paymentUsingRTGS = async () => {
//     const res = await rdl.paymentUsingRTGS({
//         companyId: "SANDBOX",
//         parentCompanyId: "STI_CHS",
//         requestUuid: "871BFD631BBB4798",
//         accountNumber: "0115476117",
//         beneficiaryAccountNumber: "3333333333",
//         beneficiaryAddress1: "Jakarta",
//         beneficiaryAddress2: "",
//         beneficiaryBankCode: "CENAIDJA",
//         beneficiaryName: "Panji Samudra",
//         currency: "IDR",
//         amount: "150000000",
//         remark: "Test rtgs",
//         chargingType: "OUR"
//     });
//     return res;
// };

// const inquiryPaymentStatus = async () => {
//     const res = await rdl.inquiryPaymentStatus({
//         companyId: 'SANDBOX',
//         parentCompanyId: 'STI_CHS',
//         requestUuid: '106323AEB63D4FF0',
//         requestedUuid: 'E8C6E0027F6E429F',

//     });
//     return res;
// };

// const inquiryInterbankAccount = async () => {
//     const res = await rdl.inquiryInterbankAccount({
//         companyId: "NI001",
//         parentCompanyId: "KSEI",
//         requestUuid: "C202946D99844E59",
//         accountNumber: "0115476117",
//         beneficiaryBankCode: "013",
//         beneficiaryAccountNumber: "01300000"
//     });
//     return res;
// };

// const paymentUsingInterbank = async () => {
//     const res = await rdl.paymentUsingInterbank({
//         companyId: "SANDBOX",
//         parentCompanyId: "STI_CHS",
//         requestUuid: "C202946D99844E59",
//         accountNumber: "0115476117",
//         beneficiaryAccountNumber: "3333333333",
//         beneficiaryAccountName: "KEN AROK",
//         beneficiaryBankCode: "014",
//         beneficiaryBankName: "BANK BCA",
//         amount: "15000"
//     });
//     return res;
// };

// const faceRecognition = async () => {
//     const res = await rdl.faceRecognition({
//         companyId: "SANDBOX",
//         parentCompanyId: "STI_CHS",
//         requestUuid: "2HMKB2LFKR1CF61Y",
//         firstName: "MOHAMMAD",
//         middleName: "BAQER",
//         lastName: "ZALQAD",
//         idNumber: "0141111121260118",
//         birthDate: "29-09-2021",
//         birthPlace: "BANDUNG",
//         gender: "M",
//         cityAddress: "Bandung",
//         stateProvAddress: "Jawa Barat",
//         addressCountry: "ID",
//         streetAddress1: "bandung",
//         streetAddress2: "bandung",
//         postCodeAddress: "40914",
//         country: "ID",
//         selfiePhoto: "29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuP"
//     });
//     return res;
// };

// neagtiv case
console.log("- Case")
// console.log("9430")
const registerInvestor = async () => {
    const res = await rdl.registerInvestor({
        "companyId": "SANDBOX",
        "parentCompanyId": "STI_CHS",
        "requestUuid": "40FCB72E71D35C81",
        "uuidFaceRecog": "492F33851D634CFB",
        "title": "01",
        "firstName": "Agus",
        "middleName": "",
        "lastName": "Saputra",
        "optNPWP": "1",
        "NPWPNum": "001058893408123",
        "nationality": "ID",
        "domicileCountry": "ID",
        "religion": "2",
        "birthPlace": "Semarang",
        "birthDate": "14081982",
        "gender": "M",
        "isMarried": "S",
        "motherMaidenName": "Dina Maryati",
        "jobCode": "01",
        "education": "07",
        "idType": "01",
        "idNumber": "4147016201959998",
        "idIssuingCity": "Jakarta Barat",
        "idExpiryDate": "26102099",
        "addressStreet": "Jalan Mawar Melati",
        "addressRtRwPerum": "003009Sentosa",
        "addressKel": "Cengkareng Barat",
        "addressKec": "Cengkareng/Jakarta Barat",
        "zipCode": "11730",
        "homePhone1": "0214",
        "homePhone2": "7459",
        "officePhone1": "",
        "officePhone2": "",
        "mobilePhone1": "0812",
        "mobilePhone2": "12348331",
        "faxNum1": "",
        "faxNum2": "",
        "email": "agus.saputra@gmail.com",
        "monthlyIncome": "8000000",
        "branchOpening": "0259",
        "institutionName": "PT. BNI SECURITIES",
        "sid": "IDD280436215354",
        "employerName": "Salman",
        "employerAddDet": "St Baker",
        "employerAddCity": "Arrandelle",
        "jobDesc": "Pedagang",
        "ownedBankAccNo": "0337109074",
        "idIssuingDate": "10122008"
    });
    return res;
};

// const registerInvestorAccount = async () => {
//     const res = await rdl.registerInvestorAccount({
//         "companyId": "XYZ",
//         "parentCompanyId": "",
//         "requestUuid": "B2F7073818F34BB8",
//         "cifNumber": "10123456781",
//         "currency": "IDR",
//         "openAccountReason": "2",
//         "sourceOfFund": "1",
//         "branchId": "0259"
//     });
//     return res;
// };

// const inquiryAccountInfo = async () => {
//     const res = await rdl.inquiryAccountInfo({
//         "companyId": "XYZ",
//         "parentCompanyId": "",
//         "requestUuid": "B27DB4C8F6484E72",
//         "accountNumber": "1000512603"
//     });
//     return res;
// };

// const inquiryAccountBalance = async () => {
//     const res = await rdl.inquiryAccountBalance({
//         "companyId": "XYZ",
//         "parentCompanyId": "",
//         "requestUuid": "E44DB4C8F6484E72",
//         "accountNumber": "0221869561"
//     });
//     return res;
// };

// const inquiryAccountHistory = async () => {
//     const res = await rdl.inquiryAccountHistory({
//         "companyId": "XYZ",
//         "parentCompanyId": "",
//         "requestUuid": "812DFF336A174F81",
//         "accountNumber": "1000512603"
//     });
//     return res;
// };

// const paymentUsingTransfer = async () => {
//     const res = await rdl.paymentUsingTransfer({
//         "companyId": "NI001",
//         "parentCompanyId": "KSEI",
//         "requestUuid": "E8C6E0027F6E429F",
//         "accountNumber": "0317246677",
//         "beneficiaryAccountNumber": "0316031098",
//         "currency": "IDR",
//         "amount": "30000000",
//         "remark": "Test RDN"
//     });
//     return res;
// };

// const paymentUsingClearing = async () => {
//     const res = await rdl.paymentUsingClearing({

//         "companyId": "NI001",
//         "parentCompanyId": "KSEI",
//         "requestUuid": "F980D79CB0EB41D7",
//         "accountNumber": "1000152672",
//         "beneficiaryAccountNumber": "3333333333",
//         "beneficiaryAddress1": "Jakarta",
//         "beneficiaryAddress2": "",
//         "beneficiaryBankCode": "140397",
//         "beneficiaryName": "Panji Samudra",
//         "currency": "IDR",
//         "amount": "1000000000",
//         "remark": "Test kliring",
//         "chargingType": "OUR"
//     });
//     return res;
// };

// const paymentUsingRTGS = async () => {
//     const res = await rdl.paymentUsingRTGS({
//         "companyId": "NI001",
//         "parentCompanyId": "KSEI",
//         "requestUuid": "871BFD631BBB4798",
//         "accountNumber": "1122334455",
//         "beneficiaryAccountNumber": "3333333333",
//         "beneficiaryAddress1": "Jakarta",
//         "beneficiaryAddress2": "",
//         "beneficiaryBankCode": "CENAIDJA",
//         "beneficiaryName": "Panji Samudra",
//         "currency": "IDR",
//         "amount": "150000000",
//         "remark": "Test rtgs",
//         "chargingType": "OUR"
//     });
//     return res;
// };

// const inquiryPaymentStatus = async () => {
//     const res = await rdl.inquiryPaymentStatus({
//         "companyId": "XYZ",
//         "requestUuid": "123456AAAAAABBB0",
//         "parentCompanyId": "",
//         "requestedUuid": "123456AAAAAABBB0"
//     });
//     return res;
// };

// const inquiryInterbankAccount = async () => {
//     const res = await rdl.inquiryInterbankAccount({
//         "companyId": "NI001",
//         "parentCompanyId": "KSEI",
//         "requestUuid": "C202946D99844E59",
//         "accountNumber": "0115476117",
//         "beneficiaryBankCode": "019",
//         "beneficiaryAccountNumber": "01900000"
//     });
//     return res;
// };

// const paymentUsingInterbank = async () => {
//     const res = await rdl.paymentUsingInterbank({
//         "companyId": "NI001",
//         "parentCompanyId": "KSEI",
//         "requestUuid": "52D3E26AA18D4FCA",
//         "accountNumber": "0315617904",
//         "beneficiaryAccountNumber": "3333333333",
//         "beneficiaryAccountName": "KEN AROK",
//         "beneficiaryBankCode": "014",
//         "beneficiaryBankName": "BANK BCA",
//         "amount": "15000"


//     });
//     return res;
// };

// const faceRecognition = async () => {
//     const res = await rdl.faceRecognition({
//         companyId: "SANDBOX",
//         parentCompanyId: "STI_CHS",
//         requestUuid: "2HMKB2LFKR1CF61Y",
//         firstName: "MOHAMMAD",
//         middleName: "BAQER",
//         lastName: "ZALQAD",
//         idNumber: "0141111121260118",
//         birthDate: "29-09-2021",
//         birthPlace: "BANDUNG",
//         gender: "M",
//         cityAddress: "Bandung",
//         stateProvAddress: "Jawa Barat",
//         addressCountry: "ID",
//         streetAddress1: "bandung",
//         streetAddress2: "bandung",
//         postCodeAddress: "40914",
//         country: "ID",
//         selfiePhoto: "29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuP"
//     });
//     return res;
// };