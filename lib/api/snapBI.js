const HttpClient = require('../net/httpClient');
const { responseSnapBI } = require('../util/response');
const { getTimeStamp, generateSignatureServiceSnapBI, randomNumber } = require('../util/util');

class SnapBI {
  constructor(client, options = { privateKeyPath, channelId, ipAddress: '', latitude: '', longitude: '' }) {
    this.client = client;
    this.config = client.getConfig();
    this.httpClient = new HttpClient();
    this.configSnap = options;
  }

  async getTokenSnapBI() {
    const token = await this.httpClient.tokenRequestSnapBI({
      url: `${this.client.getBaseUrl()}/snap/v1/access-token/b2b`,
      clientId: this.config.clientId,
      privateKeyPath: this.configSnap.privateKeyPath
    });

    return token.accessToken;
  }

  async balanceInquiry(
    params = {
      partnerReferenceNo,
      accountNo
    }
  ) {

    try {
      const token = await this.getTokenSnapBI();
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
      });

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
          'X-IP-Address': this.configSnap.ipAddress ?? '',
          'X-DEVICE-ID': 'bni-nodejs/0.1.0',
          'X-EXTERNAL-ID': randomNumber(),
          'CHANNEL-ID': this.configSnap.channelId,
          'X-LATITUDE': this.configSnap.latitude ?? '',
          'X-LONGITUDE': this.configSnap.longitude ?? ''
        }
      });
    
      return responseSnapBI({ res });
    } catch (error) {
      return responseSnapBI({ res: error.response.data });
    }
    
  }

  async bankStatement(
    params = {
      partnerReferenceNo,
      accountNo,
      fromDateTime,
      toDateTime
    }
  ) {
    try {
      const token = await this.getTokenSnapBI();
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
      });

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
          'X-IP-Address': this.configSnap.ipAddress ?? '',
          'X-DEVICE-ID': 'bni-nodejs/0.1.0',
          'X-EXTERNAL-ID': randomNumber(),
          'CHANNEL-ID': this.configSnap.channelId,
          'X-LATITUDE': this.configSnap.latitude ?? '',
          'X-LONGITUDE': this.configSnap.longitude ?? ''
        }
      });
      
      return responseSnapBI({ res });
    } catch (error) {
      return responseSnapBI({ res: error.response.data });
    }
  }

  async internalAccountInquiry(
    params = {
      partnerReferenceNo,
      beneficiaryAccountNo
    }
  ) {
    
    try {
      const token = await this.getTokenSnapBI();
      const body = {
        partnerReferenceNo: params.partnerReferenceNo,
        beneficiaryAccountNo: params.beneficiaryAccountNo
      };
      const timeStamp = getTimeStamp();
      const signature = generateSignatureServiceSnapBI({
        body: body,
        method: 'POST',
        url: '/snap-service/v1/account-inquiry-internal',
        accessToken: token,
        timeStamp: timeStamp,
        apiSecret: this.config.apiSecret
      });

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
          'X-IP-Address': this.configSnap.ipAddress ?? '',
          'X-DEVICE-ID': 'bni-nodejs/0.1.0',
          'X-EXTERNAL-ID': randomNumber(),
          'CHANNEL-ID': this.configSnap.channelId,
          'X-LATITUDE': this.configSnap.latitude ?? '',
          'X-LONGITUDE': this.configSnap.longitude ?? ''
        }
      });

      return responseSnapBI({ res });
    } catch (error) {
      return responseSnapBI({ res: error.response.data });
    }
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
      additionalInfo: {
        deviceId,
        channel
      }
    }
  ) {
    
    try {
      const token = await this.getTokenSnapBI();
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
        additionalInfo: {
          deviceId: params.additionalInfo.deviceId,
          channel: params.additionalInfo.channel
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
      });

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
          'X-IP-Address': this.configSnap.ipAddress ?? '',
          'X-DEVICE-ID': 'bni-nodejs/0.1.0',
          'X-EXTERNAL-ID': randomNumber(),
          'CHANNEL-ID': this.configSnap.channelId,
          'X-LATITUDE': this.configSnap.latitude ?? '',
          'X-LONGITUDE': this.configSnap.longitude ?? ''
        }
      });

      return responseSnapBI({ res });
    } catch (error) {
      return error;
    }
  }
}

module.exports = SnapBI;
