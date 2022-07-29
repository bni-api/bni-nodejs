const HttpClient = require('../net/httpClient');
const { generateSignature, generateClientId } = require('../util/util');

class OneGatePayment {
  constructor(client) {
    this.client = client;
    this.config = client.getConfig();
    this.httpClient = new HttpClient();
  }

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */

  async getBalance(
    params = {
      accountNo,
    }
  ) {

    const body = {
      accountNo: params.accountNo,
      clientId: generateClientId(this.config.appName),
    };

    const signature = {
      signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
    };

    const res = await this.httpClient.request({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: await this.client.getToken(),
      url: `${this.client.getBaseUrl()}/H2H/v2/getbalance`,
      data: {
        ...body,
        ...signature
      },
    });

    return res;
  }

  async getInHouseInquiry(
    params = {
      accountNo,
    }
  ) {
    const body = {
      accountNo: params.accountNo,
      clientId: generateClientId(this.config.appName),
    };

    const signature = {
      signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
    };

    const res = await this.httpClient.request({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: await this.client.getToken(),
      url: `${this.client.getBaseUrl()}/H2H/v2/getinhouseinquiry`,
      data: {
        ...body,
        ...signature
      },
    });

    return res;
  }

  async doPayment(
    params = {
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
      chargingModelId,
    }
  ) {
    const body = {
      clientId: generateClientId(this.config.appName),
      customerReferenceNumber: params.customerReferenceNumber,
      paymentMethod: params.paymentMethod,
      debitAccountNo: params.debitAccountNo,
      creditAccountNo: params.creditAccountNo,
      valueDate: params.valueDate,
      valueCurrency: params.valueCurrency,
      valueAmount: params.valueAmount,
      remark: params.remark,
      beneficiaryEmailAddress: params.beneficiaryEmailAddress,
      beneficiaryName: params.beneficiaryName,
      beneficiaryAddress1: params.beneficiaryAddress1,
      beneficiaryAddress2: params.beneficiaryAddress2,
      destinationBankCode: params.destinationBankCode,
      chargingModelId: params.chargingModelId,
    };

    const signature = {
      signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
    };

    const res = await this.httpClient.request({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: await this.client.getToken(),
      url: `${this.client.getBaseUrl()}/H2H/v2/dopayment`,
      data: {
        ...body,
        ...signature
      },
    });

    return res;
  }

  async getPaymentStatus(
    params = {
      customerReferenceNumber,
    }
  ) {
    const body = {
      clientId: generateClientId(this.config.appName),
      customerReferenceNumber: params.customerReferenceNumber,
    };

    const signature = {
      signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
    };

    const res = await this.httpClient.request({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: await this.client.getToken(),
      url: `${this.client.getBaseUrl()}/H2H/v2/getpaymentstatus`,
      data: {
        ...body,
        ...signature
      },
    });

    return res;
    
  }

  getInterBankInquiry(
    params = {
      customerReferenceNumber,
      accountNum,
      destinationBankCode,
      destinationAccountNum,
    }
  ) {
    // TODO getInterBankInquiry
  }

  getInterBankPayment(
    params = {
      customerReferenceNumber,
      amount,
      destinationAccountNum,
      destinationAccountName,
      destinationBankCode,
      destinationBankName,
      accountNum,
      retrievalReffNum,
    }
  ) {
    // TODO getInterBankPayment
  }

  holdAmount(
    params = {
      customerReferenceNumber,
      amount,
      accountNo,
      detail,
    }
  ) {
    // TODO holdAmount
  }

  holdAmountRelease(
    params = {
      customerReferenceNumber,
      amount,
      accountNo,
      bankReference,
      holdTransactionDate,
    }
  ) {
    // TODO holdAmountRelease
  }
}

module.exports = OneGatePayment;
