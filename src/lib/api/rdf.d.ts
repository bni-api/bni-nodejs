import HttpClient from "../net/httpClient.js";
export default RDF;
declare class RDF {
  constructor(client: any);
  client: any;
  config: any;
  httpClient: HttpClient;

  registerInvestor(params?: {
    companyId: string,
    parentCompanyId: string,
    uuidFaceRecog: string,
    title: string,
    firstName: string,
    middleName: string,
    lastName: string,
    optNPWP: string,
    NPWPNum: string,
    nationality: string,
    domicileCountry: string,
    religion: string,
    birthPlace: string,
    birthDate: string,
    gender: string,
    isMarried: string,
    motherMaidenName: string,
    jobCode: string,
    education: string,
    idType: string,
    idNumber: string,
    idIssuingCity: string,
    idExpiryDate: string,
    addressStreet: string,
    addressRtRwPerum: string,
    addressKel: string,
    addressKec: string,
    zipCode: string,
    homePhone1: string,
    homePhone2: string,
    officePhone1: string,
    officePhone2: string,
    mobilePhone1: string,
    mobilePhone2: string,
    faxNum1: string,
    faxNum2: string,
    email: string,
    monthlyIncome: string,
    branchOpening: string,
    institutionName: string,
    sid: string,
    employerName: string,
    employerAddDet: string,
    employerAddCity: string,
    jobDesc: string,
    ownedBankAccNo: string,
    idIssuingDate: string
  }): Promise<any>;
  faceRecognition(params?: {
      companyId: string,
      parentCompanyId?: string,
      firstName?: string,
      middleName?: string, 
      lastName: string,
      idNumber: string,
      birthDate: string,
      birthPlace: string,
      gender: string,
      cityAddress: string,
      stateProvAddress: string,
      addressCountry: string,
      streetAddress1: string,
      streetAddress2: string,
      postCodeAddress: string,
      country: string,
      selfiePhoto: string
  }): Promise<any>
  registerInvestorAccount(params?: {
    companyId: string,
    parentCompanyId: string,
    cifNumber: string,
    currency: string,
    openAccountReason: string,
    sourceOfFund: string,
    branchId: string,
    bnisId: string,
    sre: string
  }): Promise<any>
  inquiryAccountInfo(params?: {
      companyId: string,
      parentCompanyId?: string,
      accountNumber: string
  }): Promise<any>
  inquiryAccountBalance(params?: {
      companyId: string,
      parentCompanyId?: string,
      accountNumber: string
  }): Promise<any>
  inquiryAccountHistory(params?: {
      companyId: string,
      parentCompanyId?: string,
      accountNumber: string
  }): Promise<any>
  paymentUsingTransfer(params?:{
      companyId: string,
      parentCompanyId?: string,
      accountNumber: string,
      beneficiaryAccountNumber: string,
      currency: string,
      amount: number,
      remark?: string
  }): Promise<any>
  inquiryPaymentStatus(params?: {
      companyId: string,
      parentCompanyId?: string,
      requestedUuid: string
  }): Promise<any>
  paymentUsingClearing(params?: {
        companyId: string,
        parentCompanyId: string,
        accountNumber: string,
        beneficiaryAccountNumber: string,
        beneficiaryAddress1: string,
        beneficiaryAddress2: string,
        beneficiaryBankCode: string,
        beneficiaryName: string,
        currency: string,
        amount: number,
        remark: string,
        chargingType: string
  }): Promise<any>
  paymentUsingRTGS(params?: {
        companyId: string,
          parentCompanyId: string,
          accountNumber: string,
          beneficiaryAccountNumber: string,
          beneficiaryAddress1: string,
          beneficiaryAddress2: string,
          beneficiaryBankCode: string,
          beneficiaryName: string,
          currency: string,
          amount: number,
          remark: string,
          chargingType: string   
  }): Promise<any>
  inquiryInterbankAccount(params?: {
            companyId: string,
            parentCompanyId: string,
            accountNumber: string,
            beneficiaryBankCode: string,
            beneficiaryAccountNumber: string
  }): Promise<any>
  paymentUsingInterbank(params?: {
              companyId: string,
              parentCompanyId: string,
              accountNumber: string,
              beneficiaryAccountNumber: string,
              beneficiaryAccountName: string,
              beneficiaryBankCode: string,
              beneficiaryBankName: string,
              amount: number
  }): Promise<any>

}
