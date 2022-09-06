BNI API SDK - Node.js
===============
[![Build Status](https://github.com/gin-gonic/gin/workflows/Run%20Tests/badge.svg?branch=master)](https://github.com/gin-gonic/gin/actions?query=branch%3Amaster)
[![codecov](https://codecov.io/gh/gin-gonic/gin/branch/master/graph/badge.svg)](https://codecov.io/gh/gin-gonic/gin)
[![Go Report Card](https://goreportcard.com/badge/github.com/gin-gonic/gin)](https://goreportcard.com/report/github.com/gin-gonic/gin)
[![GoDoc](https://pkg.go.dev/badge/github.com/gin-gonic/gin?status.svg)](https://pkg.go.dev/github.com/gin-gonic/gin?tab=doc)

BNI Node JS! 

This is the Official Node JS API client/library for BNI API. Visit [Digital Services](https://digitalservices.bni.co.id/en/). More information about the product and see documentation at [API Documentation](https://digitalservices.bni.co.id/documentation/public/en) for more technical details.

## 1. Installation

### 1.a Using NPM

```
npm install --save bni-nodejs
```

### 1.b Manual Installation

If you are not using NPM, you can clone or [download](https://github.com/bni-api/bni-nodejs/archive/refs/heads/main.zip) this repository.
Then require from `index.js` file.

```javascript
const BNIClient = require('../bni-nodejs/lib/bniClient');
```

## 2. Usage

### 2.1 Choose Product/Method

We have 2 products you can use:
- [One Gate Payment](#22A-snap) - A solution for a company to integrate its application / system with banking transaction services. [documentation](https://digitalservices.bni.co.id/en/api-one-gate-payment)
- [Snap BI](https://apidevportal.bi.go.id/snap/info) - Integrate with SNAP BI [documentation](https://apidevportal.bi.go.id/snap/api-services)


### 2.2 Client Initialization and Configuration

Get your client key and server key from [Menu - Applications](https://digitalservices.bni.co.id/en/profile-menu/apps)

Create API client object

```javascript
const { BNIClient } = require('bni-nodejs');
// Create Core API instance
const client = new BNIClient({
  prod: false,
  clientId: '{your-client-id}',
  clientSecret: '{your-client-secret}',
  apiKey: '{your-api-key}',
  apiSecret: '{your-api-secret}',
  appName: '{your-app-name}'
});
```

### 2.2.A One Gate Payment

Available methods for `One Gate Payment` class
```javascript

const { BNIClient, OneGatePayment } = require('bni-nodejs');

// Create Client instance
const client = new BNIClient({
  prod: false,
  clientId: '{your-client-id}',
  clientSecret: '{your-client-secret}',
  apiKey: '{your-api-key}',
  apiSecret: '{your-api-secret}',
  appName: '{your-app-name}'
});

const ogp = new OneGatePayment(client);

// return as Promise of Object
const getBalance = await ogp.getBalance({
    accountNo: '{your-account-no}'
});

// return as Promise of Object
const getInHouseInquiry = await ogp.getInHouseInquiry({
    accountNo: '{your-account-no}'
});

// return as Promise of Object
const doPayment = await ogp.doPayment({
    customerReferenceNumber: '{your-customer-reference-number}',
    paymentMethod: '{payment-method}',
    debitAccountNo: '{your-debit-account-no}',
    creditAccountNo: '{your-credit-account-no}',
    valueDate: '{your-value-date}',
    valueCurrency: '{your-value-currency}',
    valueAmount: YOUR_VALUE_AMOUNT,
    remark: 'your-remark',
    beneficiaryEmailAddress: '{your-beneficiary-email-address}',
    beneficiaryName: '{your-beneficiary-name}',
    beneficiaryAddress1: '{your-beneficiary-address-1}',
    beneficiaryAddress2: '{your-beneficiary-address-2}',
    destinationBankCode: '{your-destination-bank-code}',
    chargingModelId: '{your-charging-model-id}'
});

// return as Promise of Object
const getPaymentStatus = await ogp.getPaymentStatus({
    customerReferenceNumber: '{your-customer-reference-number}'
  });

// return as Promise of Object
const getInterBankInquiry = await ogp.getInterBankInquiry({
    customerReferenceNumber: '{your-customer-reference-number}',
    accountNum: '{your-account-num}',
    destinationBankCode: '{your-destination-bank-code}',
    destinationAccountNum: '{destination-account-number}'
  });

// return as Promise of Object
const getInterBankPayment = await ogp.getInterBankPayment({
    customerReferenceNumber: '{your-customer-reference-number}',
    amount: '{your-amount}',
    destinationAccountNum: '{your-destination-account-number}',
    destinationAccountName: '{your-destination-account-name}',
    destinationBankCode: '{your-destination-bank-code}',
    destinationBankName: '{your-destination-bank-name}',
    accountNum: '{your-account-number}',
    retrievalReffNum: '{your-retrieval-reff-number}'
});

// return as Promise of Object
const holdAmount = await ogp.holdAmount({
    customerReferenceNumber: '{your-customer-reference-number}',
    amount: '{your-amount}',
    accountNo: '{your-account-number}',
    detail: '{your-detail}'
});

// return as Promise of Object
const holdAmount = await ogp.holdAmountRelease({
    customerReferenceNumber: '{your-customer-reference-number}',
    amount: '{your-amount}',
    accountNo: '{your-account-number}',
    bankReference: '{your-bank-reference}',
    holdTransactionDate: '{your-hold-transaction-date}'
});

```

### 2.2.B Snap BI

Available methods for `Snap BI` class
```javascript

const { BNIClient, SnapBI } = require('bni-nodejs');

// Create Client instance
const client = new BNIClient({
  prod: false,
  clientId: '{your-client-id}',
  clientSecret: '{your-client-secret}',
  apiKey: '{your-api-key}',
  apiSecret: '{your-api-secret}',
  appName: '{your-app-name}'
});

const snap = new SnapBI(client, { 
    privateKeyPath: '[your-rsa-private-key-path]', 
    channelId: '{your-channel-id}' 
});

// return as Promise of Object
const getBalanceInquiry = await snap.balanceInquiry({
    partnerReferenceNo: '{your-partner-reference-no}',
    accountNo: '{your-account-no}'
});

// return as Promise of Object
const getBankStatement = await snap.bankStatement({
    partnerReferenceNo: '{your-partner-reference-no}',
    accountNo: '{your-account-no}',
    fromDateTime: '{your-from-date-time}',
    toDateTime: '{your-to-date-time}'
});

// return as Promise of Object
const getInternalAccountInquiry = await snap.internalAccountInquiry({
    partnerReferenceNo: '{your-partner-reference-number}',
    beneficiaryAccountNo: '{your-beneficiary-account-no}'
});

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transactionStatusInquiry({
    originalPartnerReferenceNo: '{your-original-partner-reference-number}',
    originalReferenceNo: '{your-original-reference-number}',
    originalExternalId: '{your-original-external-id}',
    serviceCode: '{your-service-code}',
    transactionDate: '{your-transaction-date}',
    amount: {
      value: '15000.00',
      currency: 'IDR'
    },
    additionalInfo: {
      deviceId: '123456',
      channel: 'mobilephone'
    }
});

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferIntraBank({
    partnerReferenceNo: '{your-partner-reference-number}',
    amount: {
      value: '{your-amount-value}',
      currency: '{your-amount-currency}'
    },
    beneficiaryAccountNo: '{your-beneficiary-account-no}',
    beneficiaryEmail: '{your-beneficiary-email}',
    currency: '{your-currency}',
    customerReference: '{your-customer-reference}',
    feeType: '{your-fee-type}',
    remark: '{your-remark}',
    sourceAccountNo: '{your-source-account-no}',
    transactionDate: '{your-transaction-date}',
    additionalInfo: {
      deviceId: '{your-additional-info-device-id}',
      channel: '{your-additional-info-channel}'
    }
  });

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferRTGS({
    partnerReferenceNo: '{your-partner-reference-no}',
    amount: {
      value: '{your-amount-value}',
      currency: '{your-amount-currency}'
    },
    beneficiaryAccountName: '{your-beneficiary-account-name}',
    beneficiaryAccountNo: '{your-beneficiary-account-no}',
    beneficiaryAccountAddress: '{your-beneficiary-account-address}',
    beneficiaryBankCode: '{your-beneficiary-bank-code}',
    beneficiaryBankName: '{your-beneficiary-bank-name}',
    beneficiaryCustomerResidence: '{your-beneficiary-customer-residence}',
    beneficiaryCustomerType: '{your-beneficiary-customer-type}',
    beneficiaryEmail: '{your-beneficiary-email}',
    currency: '{your-currency}',
    customerReference: '{your-customer-reference}',
    feeType: '{your-}',
    kodePos: '-',
    recieverPhone: '-',
    remark: 'DANA20220513095840015788857PTZomatoMediaIndonesia',
    senderCustomerResidence: '-',
    senderCustomerType: '-',
    senderPhone: '',
    sourceAccountNo: '0115476151',
    transactionDate: '2020-06-17T01:03:04+07:00',
    additionalInfo: {
      deviceId: '',
      channel: ''
    }
});

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferSKNBI({
    partnerReferenceNo: '{your-partner-reference-no}',
    amount: {
      value: '{your-amount-value}',
      currency: '{your-amount-currency}'
    },
    beneficiaryAccountName: '{your-beneficiary-account-name}',
    beneficiaryAccountNo: '{your-beneficiary-account-no}',
    beneficiaryAddress: '{your-beneficiary-address}',
    beneficiaryBankCode: '{your-beneficiary-bank-code}',
    beneficiaryBankName: '{your-beneficiary-bank-name}',
    beneficiaryCustomerResidence: '{your-beneficiary-customer-residence}',
    beneficiaryCustomerType: '{your-beneficiary-customer-type}',
    beneficiaryEmail: '{your-beneficiary-email}',
    currency: '{your-currency}',
    customerReference: '{your-customer-reference}',
    feeType: '{your-fee-type}',
    kodePos: '{your-kode-pos}',
    recieverPhone: '{your-receiver-phone}',
    remark: '{your-remark}',
    senderCustomerResidence: '{your-sender-customer-residence}',
    senderCustomerType: '{your-sender-customer-type}',
    senderPhone: '{your-sender-phone}',
    sourceAccountNo: '{your-source-account-no}',
    transactionDate: '{your-transaction-date}',
    additionalInfo: {
      deviceId: '{your-additional-info-device-id}',
      channel: '{your-additional-info-channel}'
    }
});

// return as Promise of Object
const getTransactionStatusInquiry = await snap.externalAccountInquiry({
    beneficiaryBankCode: '{your-beneficiary-bank-code}',
    beneficiaryAccountNo: '{your-beneficiary-account-no}',
    partnerReferenceNo: '{your-beneficiary-partner-reference-no}',
    additionalInfo: {
      deviceId: '{your-additional-info-device-id}',
      channel: '{your-additional-info-channel}'
    }
});

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferInterBank({
    partnerReferenceNo: '{your-partner-reference-no}',
    amount: {
      value: '{your-amount-value}',
      currency: '{your-amount-currency}'
    },
    beneficiaryAccountName: '{your-beneficiary-account-name}',
    beneficiaryAccountNo: '{your-beneficiary-account-no}',
    beneficiaryAddress: '{your-beneficiary-address}',
    beneficiaryBankCode: '{your-beneficiary-bank-code}',
    beneficiaryBankName: '{your-beneficiary-bank-name}',
    beneficiaryEmail: '{your-beneficiary-email}',
    currency: '{your-currency}',
    customerReference: '{your-customer-reference}',
    sourceAccountNo: '{your-source-account-number}',
    transactionDate: '{your-transaction-date}',
    feeType: '{your-fee-type}',
    additionalInfo: {
      deviceId: '{your-additional-info-device-id}',
      channel: '{your-additional-info-channel}'
    }
});

```

## Get help

* [Digital Services](https://digitalservices.bni.co.id/en/)
* [API documentation](https://digitalservices.bni.co.id/documentation/public/en)
* [Stackoverflow](https://stackoverflow.com/users/19817167/bni-api-management)
* Can't find answer you looking for? email to [ryan.hidayat@bni.co.id](mailto:ryan.hidayat@bni.co.id)