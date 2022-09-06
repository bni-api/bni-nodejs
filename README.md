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
- [Snap BI](#22B-snap-redirect) - Integrate with SNAP BI [documentation](https://digitalservices.bni.co.id/en/api-one-gate-payment)


### 2.2 Client Initialization and Configuration

Get your client key and server key from [Menu - Applications](https://digitalservices.bni.co.id/en/profile-menu/apps)

Create API client object

```javascript
const BNIClient = require('../bni-nodejs/lib/bniClient');
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

const BNIClient = require('../bni-nodejs/lib/bniClient');
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
const getBalance = await ogp.getBalance(parameters);

// return as Promise of Object
const getInHouseInquiry = await ogp.getInHouseInquiry(parameters);

// return as Promise of Object
const doPayment = await ogp.doPayment(parameters);

// return as Promise of Object
const getPaymentStatus = await ogp.getPaymentStatus(parameters);

// return as Promise of Object
const getInterBankInquiry = await ogp.getInterBankInquiry(parameters);

// return as Promise of Object
const getInterBankPayment = await ogp.getInterBankPayment(parameters);

// return as Promise of Object
const holdAmount = await ogp.holdAmount(parameters);

// return as Promise of Object
const holdAmount = await ogp.holdAmountRelease(parameters);

```
`parameter` is Object or String of JSON

### 2.2.B Snap BI

Available methods for `Snap BI` class
```javascript

const BNIClient = require('../bni-nodejs/lib/bniClient');
// Create Client instance
const client = new BNIClient({
  prod: false,
  clientId: '{your-client-id}',
  clientSecret: '{your-client-secret}',
  apiKey: '{your-api-key}',
  apiSecret: '{your-api-secret}',
  appName: '{your-app-name}'
});

const snap = new SnapBI(client, { privateKeyPath: '[your-path-private-key]', channelId: '{your-channel-id}' });

// return as Promise of Object
const getBalanceInquiry = await snap.balanceInquiry(parameters);

// return as Promise of Object
const getBankStatement = await snap.bankStatement(parameters);

// return as Promise of Object
const getInternalAccountInquiry = await snap.internalAccountInquiry(parameters);

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transactionStatusInquiry(parameters);

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferIntraBank(parameters);

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferRTGS(parameters);

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferSKNBI(parameters);

// return as Promise of Object
const getTransactionStatusInquiry = await snap.externalAccountInquiry(parameters);

// return as Promise of Object
const getTransactionStatusInquiry = await snap.transferInterBank(parameters);

```
`parameter` is Object or String of JSON

## Get help

* [Digital Services](https://digitalservices.bni.co.id/en/)
* [API documentation](https://digitalservices.bni.co.id/documentation/public/en)
* Can't find answer you looking for? email to [support@bni.co.id](mailto:support@bni.co.id)