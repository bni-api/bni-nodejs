import HttpClient from '../net/httpClient.js';
import { responseOGP } from '../util/response.js';
import { generateSignature, generateClientId } from '../util/util.js';

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
      accountNo
    }
  ) {

    const body = {
      accountNo: params.accountNo,
      clientId: generateClientId(this.config.appName)
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
      }
    });

    return responseOGP({ res: res, resObj: 'getBalanceResponse' });
  }

  async getInHouseInquiry(
    params = {
      accountNo
    }
  ) {
    const body = {
      accountNo: params.accountNo,
      clientId: generateClientId(this.config.appName)
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
      }
    });

    return responseOGP({ res: res, resObj: 'getInHouseInquiryResponse' });
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
      remark: '',
      beneficiaryEmailAddress: '',
      beneficiaryName: '',
      beneficiaryAddress1: '',
      beneficiaryAddress2: '',
      destinationBankCode: '',
      chargingModelId: ''
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
      remark: params.remark ?? '',
      beneficiaryEmailAddress: params.beneficiaryEmailAddress ?? '',
      beneficiaryName: params.beneficiaryName ?? '',
      beneficiaryAddress1: params.beneficiaryAddress1 ?? '',
      beneficiaryAddress2: params.beneficiaryAddress2 ?? '',
      destinationBankCode: params.destinationBankCode ?? '',
      chargingModelId: params.chargingModelId ?? ''
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
      }
    });

    return responseOGP({ res: res, resObj: 'doPaymentResponse' });
  }

  async getPaymentStatus(
    params = {
      customerReferenceNumber
    }
  ) {
    const body = {
      clientId: generateClientId(this.config.appName),
      customerReferenceNumber: params.customerReferenceNumber
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
      }
    });

    return responseOGP({ res: res, resObj: 'getPaymentStatusResponse' });

  }

  async getInterBankInquiry(
    params = {
      customerReferenceNumber,
      accountNum,
      destinationBankCode,
      destinationAccountNum
    }
  ) {
    // TODO getInterBankInquiry
    const body = {
      clientId: generateClientId(this.config.appName),
      customerReferenceNumber: params.customerReferenceNumber,
      accountNum: params.accountNum,
      destinationBankCode: params.destinationBankCode,
      destinationAccountNum: params.destinationAccountNum
    };

    const signature = {
      signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
    };

    const res = await this.httpClient.request({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: await this.client.getToken(),
      url: `${this.client.getBaseUrl()}/H2H/v2/getinterbankinquiry`,
      data: {
        ...body,
        ...signature
      }
    });

    return responseOGP({ res: res, resObj: 'getInterbankInquiryResponse' });
  }

  async getInterBankPayment(
    params = {
      customerReferenceNumber,
      amount,
      destinationAccountNum,
      destinationAccountName,
      destinationBankCode,
      destinationBankName,
      accountNum,
      retrievalReffNum
    }
  ) {
    // TODO getInterBankPayment
    const body = {
      clientId: generateClientId(this.config.appName),
      customerReferenceNumber: params.customerReferenceNumber,
      amount: params.amount,
      destinationAccountNum: params.destinationAccountNum,
      destinationAccountName: params.destinationAccountName,
      destinationBankCode: params.destinationBankCode,
      destinationBankName: params.destinationBankName,
      accountNum: params.accountNum,
      retrievalReffNum: params.retrievalReffNum
    };

    const signature = {
      signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
    };

    const res = await this.httpClient.request({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: await this.client.getToken(),
      url: `${this.client.getBaseUrl()}/H2H/v2/getinterbankpayment`,
      data: {
        ...body,
        ...signature
      }
    });

    return responseOGP({ res: res, resObj: 'getInterbankPaymentResponse' });
  }

  // request WDC to comment this services
  // async holdAmount(
  //   params = {
  //     customerReferenceNumber,
  //     amount,
  //     accountNo,
  //     detail: ''
  //   }
  // ) {
  //   // TODO holdAmount
  //   const body = {
  //     clientId: generateClientId(this.config.appName),
  //     customerReferenceNumber: params.customerReferenceNumber,
  //     amount: params.amount,
  //     accountNo: params.accountNo,
  //     detail: params.detail ?? ''
  //   };

  //   const signature = {
  //     signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
  //   };

  //   const res = await this.httpClient.request({
  //     method: 'POST',
  //     apiKey: this.config.apiKey,
  //     accessToken: await this.client.getToken(),
  //     url: `${this.client.getBaseUrl()}/H2H/v2/holdamount`,
  //     data: {
  //       ...body,
  //       ...signature
  //     }
  //   });

  //   return responseOGP({ res: res, resObj: 'holdAmountResponse' });
  // }

  // async holdAmountRelease(
  //   params = {
  //     customerReferenceNumber,
  //     amount,
  //     accountNo,
  //     bankReference,
  //     holdTransactionDate
  //   }
  // ) {
  //   // TODO holdAmountRelease
  //   const body = {
  //     clientId: generateClientId(this.config.appName),
  //     customerReferenceNumber: params.customerReferenceNumber,
  //     amount: params.amount,
  //     accountNo: params.accountNo,
  //     bankReference: params.bankReference,
  //     holdTransactionDate: params.holdTransactionDate
  //   };

  //   const signature = {
  //     signature: generateSignature({ body: body, apiSecret: this.config.apiSecret })
  //   };

  //   const res = await this.httpClient.request({
  //     method: 'POST',
  //     apiKey: this.config.apiKey,
  //     accessToken: await this.client.getToken(),
  //     url: `${this.client.getBaseUrl()}/H2H/v2/holdamountrelease`,
  //     data: {
  //       ...body,
  //       ...signature
  //     }
  //   });

  //   return responseOGP({ res: res, resObj: 'holdAmountReleaseResponse' });
  // }
}

export default OneGatePayment;
