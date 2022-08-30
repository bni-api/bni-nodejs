const HttpClient = require('../net/httpClient');
const { getTimeStamp, generateSignatureServiceSnapBI } = require('../util/util');

class SnapBI {
  constructor(client) {
    this.client = client;
    this.config = client.getConfig();
    this.httpClient = new HttpClient();
  }

  async balanceInquiry(
    params = {
      partnerReferenceNo,
      accountNo
    }
  ) {

    const token = await this.client.getTokenSnapBI();
    const body = {
        partnerReferenceNo: params.partnerReferenceNo,
        accountNo: params.accountNo
    };
    const timeStamp = getTimeStamp();
    const signature = generateSignatureServiceSnapBI({
        body: body,
        method: 'POST',
        url: '/snap-service/v1/balance-inquiry',
        accessToken: token,
        timeStamp: timeStamp,
        apiSecret: this.config.apiSecret
    })
    // TODO balanceInquiry

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/balance-inquiry`,
      data: body,
      additionalHeader: {
        'X-SIGNATURE': signature,
        'X-TIMESTAMP': timeStamp,
        'X-PARTNER-ID': this.config.apiKey,
        'X-IP-Address': '',
        'X-DEVICE-ID': '',
        'X-EXTERNAL-ID': '41897553308909193182116980728722',
        'CHANNEL-ID': "API",
        'X-LATITUDE': '',
        'X-LONGITUDE': ''
      }
    });
  
    return res;
    
  }

  async bankStatement(
    params = {
      partnerReferenceNo,
      accountNo,
      fromDateTime,
      toDateTime
    }
  ) {
    const token = await this.client.getTokenSnapBI();
    const body = {
        partnerReferenceNo: params.partnerReferenceNo,
        accountNo: params.accountNo,
        fromDateTime: params.fromDateTime,
        toDateTime: params.toDateTime
    };
    const timeStamp = getTimeStamp();
    const signature = generateSignatureServiceSnapBI({
        body: body,
        method: 'POST',
        url: '/snap-service/v1/bank-statement',
        accessToken: token,
        timeStamp: timeStamp,
        apiSecret: this.config.apiSecret
    })

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/bank-statement`,
      data: body,
      additionalHeader: {
        'X-SIGNATURE': signature,
        'X-TIMESTAMP': timeStamp,
        'X-PARTNER-ID': this.config.apiKey,
        'X-IP-Address': '',
        'X-DEVICE-ID': 'SDK',
        'X-EXTERNAL-ID': '41897553308909193182116980238443',
        'CHANNEL-ID': "95221",
        'X-LATITUDE': '',
        'X-LONGITUDE': ''
      }
    });

    console.log(res);
    return res;
  }

  async internalAccountInquiry(
    params = {
      partnerReferenceNo,
      beneficiaryAccountNo
    }
  ) {
    
    const token = await this.client.getTokenSnapBI();
    const body = {
        partnerReferenceNo: params.partnerReferenceNo,
        beneficiaryAccountNo: params.beneficiaryAccountNo,
    };
    const timeStamp = getTimeStamp();
    const signature = generateSignatureServiceSnapBI({
        body: body,
        method: 'POST',
        url: '/snap-service/v1/account-inquiry-internal',
        accessToken: token,
        timeStamp: timeStamp,
        apiSecret: this.config.apiSecret
    })

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/account-inquiry-internal`,
      data: body,
      additionalHeader: {
        'X-SIGNATURE': signature,
        'X-TIMESTAMP': timeStamp,
        'X-PARTNER-ID': this.config.apiKey,
        'X-IP-Address': '',
        'X-DEVICE-ID': '',
        'X-EXTERNAL-ID': '41897553308909193182116980728324',
        'CHANNEL-ID': "API",
        'X-LATITUDE': '',
        'X-LONGITUDE': ''
      }
    });

    console.log(res);
    return res;
  }

  async transactionStatusInquiry(
    params = {
      originalPartnerReferenceNo,
      originalReferenceNo,
      originalExternalId,
      serviceCode,
      transactionDate,
      amount: {
        value,
        currency
      },
      additionalInfo:{
        deviceId,
        channel
      }
    }
  ) {
    
    const token = await this.client.getTokenSnapBI();
    const body = {
      originalPartnerReferenceNo: params.originalPartnerReferenceNo,
      originalReferenceNo: params.originalReferenceNo,
      originalExternalId: params.originalExternalId,
      serviceCode: params.serviceCode,
      transactionDate: params.transactionDate,
      amount: {
        value: params.amount.value,
        currency: params.amount.currency
      },
      additionalInfo:{
        deviceId: params.additionalInfo.deviceId,
        channel: params.additionalInfo.channel,
      }
    };
    const timeStamp = getTimeStamp();
    const signature = generateSignatureServiceSnapBI({
        body: body,
        method: 'POST',
        url: '/snap-service/v1/transfer/status',
        accessToken: token,
        timeStamp: timeStamp,
        apiSecret: this.config.apiSecret
    })

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/transfer/status`,
      data: body,
      additionalHeader: {
        'X-SIGNATURE': signature,
        'X-TIMESTAMP': timeStamp,
        'X-PARTNER-ID': this.config.apiKey,
        'X-IP-Address': '',
        'X-DEVICE-ID': '',
        'X-EXTERNAL-ID': '34567899345678934567834567822',
        'CHANNEL-ID': "API",
        'X-LATITUDE': '',
        'X-LONGITUDE': ''
      }
    });

    console.log(res);
    return res;
  }
}

module.exports = SnapBI;
