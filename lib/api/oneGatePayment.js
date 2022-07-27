const HttpClient = require('../net/httpClient')
const { generateSignature, generateClientId } = require('../util/util')

class OneGatePayment {

  constructor(client) {
    this.client = client;
    this.config = client.getConfig()
    this.httpClient = new HttpClient();
  }

  /**
    * Initiate with options
    * @param  {Object} options - should have these props:
    * accountNo
    */

  getBalance(params = {
    accountNo
  }) {
    // TODO getBalance 
    // HTTP REQUEST
    try {
      const res = this.httpClient.request({
        method: 'POST', 
        apiKey: this.config.apiKey, 
        accessToken: this.client.getToken(), // TODO fix logic
        url: `${this.client.getBaseUrl()}/H2H/v2/getbalance`, 
        data: {
          accountNo: params.accountNo,
          signature: generateSignature(),
          clientId: generateClientId()
        }
      })

      return res
    } catch (err) {
      // TODO check error
      // if token expired request again
      // TODO handle all error
    }
  }

  getInHouseInquiry(params = {
    accountNo
  }) {
    // TODO getInHouseInquiry
  }

  doPayment(params = {
    customerReferenceNumber,
    paymentMethod,
    debitAccountNo,
    creditAccountNo,
    valueDate,
    valueCurrency,
    valueAmount,
    remark,
    beneficiaryEmailAddress,
    beneficiaryName,
    beneficiaryAddress1,
    beneficiaryAddress2,
    destinationBankCode,
    chargingModelId
  }) {
    // TODO doPayment
  }

  getPaymentStatus(params = {
    customerReferenceNumber
  }) {
    // TODO getPaymentStatus
  }

  getInterBankInquiry(params = {
    customerReferenceNumber,
    accountNum,
    destinationBankCode,
    destinationAccountNum
  }) {
    // TODO getInterBankInquiry
  }

  getInterBankPayment(params = {
    customerReferenceNumber,
    amount,
    destinationAccountNum,
    destinationAccountName,
    destinationBankCode,
    destinationBankName,
    accountNum,
    retrievalReffNum
  }) {
    // TODO getInterBankPayment
  }

  holdAmount(params = {
    customerReferenceNumber,
    amount,
    accountNo,
    detail
  }) {
    // TODO holdAmount
  }

  holdAmountRelease(params = {
    customerReferenceNumber,
    amount,
    accountNo,
    bankReference,
    holdTransactionDate
  }) {
    // TODO holdAmountRelease
  }
}

module.exports = OneGatePayment;