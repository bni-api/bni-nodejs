import HttpClient from '../net/httpClient.js';
import { responseSnapBI } from '../util/response.js';
import { getTimeStamp, generateSignatureServiceSnapBI, randomNumber } from '../util/util.js';

class SnapBI {
  constructor(
    client,
    options = {
      privateKeyPath,
      channelId,
      ipAddress: '',
      latitude: '',
      longitude: ''
    }
  ) {
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
      partnerReferenceNo: '',
      accountNo
    }
  ) {
    const token = await this.getTokenSnapBI();
    const body = {
      partnerReferenceNo: params.partnerReferenceNo ?? '',
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
  }

  async bankStatement(
    params = {
      partnerReferenceNo: '',
      accountNo,
      fromDateTime: '',
      toDateTime: ''
    }
  ) {
    const token = await this.getTokenSnapBI();
    const body = {
      partnerReferenceNo: params.partnerReferenceNo ?? '',
      accountNo: params.accountNo,
      fromDateTime: params.fromDateTime ?? '',
      toDateTime: params.toDateTime ?? ''
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
  }

  async internalAccountInquiry(
    params = {
      partnerReferenceNo: '',
      beneficiaryAccountNo
    }
  ) {
    const token = await this.getTokenSnapBI();
    const body = {
      partnerReferenceNo: params.partnerReferenceNo ?? '',
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
  }

  async transactionStatusInquiry(
    params = {
      originalPartnerReferenceNo: '',
      originalReferenceNo,
      originalExternalId: '',
      serviceCode,
      transactionDate: '',
      amount: {
        value,
        currency
      },
      additionalInfo: {
        deviceId: '',
        channel: ''
      }
    }
  ) {
    const timeStamp = getTimeStamp();
    const token = await this.getTokenSnapBI();
    const body = {
      originalPartnerReferenceNo: params.originalPartnerReferenceNo ?? '',
      originalReferenceNo: params.originalReferenceNo,
      originalExternalId: params.originalExternalId ?? '',
      serviceCode: params.serviceCode,
      transactionDate: params.transactionDate ?? timeStamp,
      amount: {
        value: params.amount.value,
        currency: params.amount.currency
      },
      additionalInfo: {
        deviceId: params.additionalInfo.deviceId ?? '',
        channel: params.additionalInfo.channel ?? ''
      }
    };
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
  }

  async transferIntraBank(
    params = {
      partnerReferenceNo,
      amount: {
        value,
        currency
      },
      beneficiaryAccountNo,
      beneficiaryEmail: '',
      currency: '',
      customerReference: '',
      feeType: '',
      remark: '',
      sourceAccountNo,
      transactionDate: '',
      additionalInfo: {
        deviceId: '',
        channel: ''
      }
    }
  ) {
    const timeStamp = getTimeStamp();
    const token = await this.getTokenSnapBI();
    const body = {
      partnerReferenceNo: params.partnerReferenceNo,
      amount: {
        value: params.amount.value,
        currency: params.amount.currency
      },
      beneficiaryAccountNo: params.beneficiaryAccountNo,
      beneficiaryEmail: params.beneficiaryEmail ?? '',
      currency: params.currency ?? '',
      customerReference: params.customerReference ?? '',
      feeType: params.feeType ?? '',
      remark: params.remark ?? '',
      sourceAccountNo: params.sourceAccountNo,
      transactionDate: params.transactionDate ?? timeStamp,
      additionalInfo: {
        deviceId: params.additionalInfo.deviceId ?? '',
        channel: params.additionalInfo.channel ?? ''
      }
    };
    const signature = generateSignatureServiceSnapBI({
      body: body,
      method: 'POST',
      url: '/snap-service/v1/transfer-intrabank',
      accessToken: token,
      timeStamp: timeStamp,
      apiSecret: this.config.apiSecret
    });

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/transfer-intrabank`,
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
  }

  async transferRTGS(
    params = {
      partnerReferenceNo,
      amount: {
        value,
        currency
      },
      beneficiaryAccountName,
      beneficiaryAccountNo,
      beneficiaryAddress: '',
      beneficiaryBankCode,
      beneficiaryBankName: '',
      beneficiaryCustomerResidence,
      beneficiaryCustomerType,
      beneficiaryEmail: '',
      currency: '',
      customerReference,
      feeType: '',
      kodePos: '',
      recieverPhone: '',
      remark: '',
      senderCustomerResidence: '',
      senderCustomerType: '',
      senderPhone: '',
      sourceAccountNo,
      transactionDate: '',
      additionalInfo: {
        deviceId: '',
        channel: ''
      }
    }
  ) {
    const timeStamp = getTimeStamp();
    const token = await this.getTokenSnapBI();
    const body = {
      partnerReferenceNo: params.partnerReferenceNo,
      amount: {
        value: params.amount.value,
        currency: params.amount.currency
      },
      beneficiaryAccountName: params.beneficiaryAccountName,
      beneficiaryAccountNo: params.beneficiaryAccountNo,
      beneficiaryAddress: params.beneficiaryAddress ?? '',
      beneficiaryBankCode: params.beneficiaryBankCode,
      beneficiaryBankName: params.beneficiaryBankName ?? '',
      beneficiaryCustomerResidence: params.beneficiaryCustomerResidence,
      beneficiaryCustomerType: params.beneficiaryCustomerType,
      beneficiaryEmail: params.beneficiaryEmail ?? '',
      currency: params.currency ?? '',
      customerReference: params.customerReference,
      feeType: params.feeType ?? '',
      kodePos: params.kodePos ?? '',
      recieverPhone: params.recieverPhone ?? '',
      remark: params.remark ?? '',
      senderCustomerResidence: params.senderCustomerResidence ?? '',
      senderCustomerType: params.senderCustomerType ?? '',
      senderPhone: params.senderPhone ?? '',
      sourceAccountNo: params.sourceAccountNo,
      transactionDate: params.transactionDate ?? timeStamp,
      additionalInfo: {
        deviceId: params.additionalInfo.deviceId ?? '',
        channel: params.additionalInfo.channel ?? ''
      }
    };
    const signature = generateSignatureServiceSnapBI({
      body: body,
      method: 'POST',
      url: '/snap-service/v1/transfer-rtgs',
      accessToken: token,
      timeStamp: timeStamp,
      apiSecret: this.config.apiSecret
    });

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/transfer-rtgs`,
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
  }

  async transferSKNBI(
    params = {
      partnerReferenceNo,
      amount: {
        value,
        currency
      },
      beneficiaryAccountName,
      beneficiaryAccountNo,
      beneficiaryAddress: '',
      beneficiaryBankCode,
      beneficiaryBankName: '',
      beneficiaryCustomerResidence,
      beneficiaryCustomerType,
      beneficiaryEmail: '',
      currency: '',
      customerReference,
      feeType: '',
      kodePos: '',
      recieverPhone: '',
      remark: '',
      senderCustomerResidence: '',
      senderCustomerType: '',
      senderPhone: '',
      sourceAccountNo,
      transactionDate: '',
      additionalInfo: {
        deviceId: '',
        channel: ''
      }
    }
  ) {
    const timeStamp = getTimeStamp();
    const token = await this.getTokenSnapBI();
    const body = {
      partnerReferenceNo: params.partnerReferenceNo,
      amount: {
        value: params.amount.value,
        currency: params.amount.currency
      },
      beneficiaryAccountName: params.beneficiaryAccountName,
      beneficiaryAccountNo: params.beneficiaryAccountNo,
      beneficiaryAddress: params.beneficiaryAddress ?? '',
      beneficiaryBankCode: params.beneficiaryBankCode,
      beneficiaryBankName: params.beneficiaryBankName ?? '',
      beneficiaryCustomerResidence: params.beneficiaryCustomerResidence,
      beneficiaryCustomerType: params.beneficiaryCustomerType,
      beneficiaryEmail: params.beneficiaryEmail ?? '',
      currency: params.currency ?? '',
      customerReference: params.customerReference,
      feeType: params.feeType ?? '',
      kodePos: params.kodePos ?? '',
      recieverPhone: params.recieverPhone ?? '',
      remark: params.remark ?? '',
      senderCustomerResidence: params.senderCustomerResidence ?? '',
      senderCustomerType: params.senderCustomerType ?? '',
      senderPhone: params.senderPhone ?? '',
      sourceAccountNo: params.sourceAccountNo,
      transactionDate: params.transactionDate ?? timeStamp,
      additionalInfo: {
        deviceId: params.additionalInfo.deviceId ?? '',
        channel: params.additionalInfo.channel ?? ''
      }
    };
    const signature = generateSignatureServiceSnapBI({
      body: body,
      method: 'POST',
      url: '/snap-service/v1/transfer-skn',
      accessToken: token,
      timeStamp: timeStamp,
      apiSecret: this.config.apiSecret
    });

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/transfer-skn`,
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
  }

  async externalAccountInquiry(
    params = {
      beneficiaryBankCode,
      beneficiaryAccountNo,
      partnerReferenceNo: '',
      additionalInfo: {
        deviceId: '',
        channel: ''
      }
    }
  ) {
    const token = await this.getTokenSnapBI();
    const body = {
      beneficiaryBankCode: params.beneficiaryBankCode,
      beneficiaryAccountNo: params.beneficiaryAccountNo,
      partnerReferenceNo: params.partnerReferenceNo ?? '',
      additionalInfo: {
        deviceId: params.additionalInfo.deviceId ?? '',
        channel: params.additionalInfo.channel ?? ''
      }
    };
    const timeStamp = getTimeStamp();
    const signature = generateSignatureServiceSnapBI({
      body: body,
      method: 'POST',
      url: '/snap-service/v1/account-inquiry-external',
      accessToken: token,
      timeStamp: timeStamp,
      apiSecret: this.config.apiSecret
    });

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/account-inquiry-external`,
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
  }

  async transferInterBank(
    params = {
      partnerReferenceNo,
      amount: {
        value,
        currency
      },
      beneficiaryAccountName,
      beneficiaryAccountNo,
      beneficiaryAddress: '',
      beneficiaryBankCode,
      beneficiaryBankName: '',
      beneficiaryEmail: '',
      currency: '',
      customerReference: '',
      sourceAccountNo,
      transactionDate: '',
      feeType: '',
      additionalInfo: {
        deviceId: '',
        channel: ''
      }
    }
  ) {
    const timeStamp = getTimeStamp();
    const token = await this.getTokenSnapBI();
    const body = {
      partnerReferenceNo: params.partnerReferenceNo,
      amount: {
        value: params.amount.value,
        currency: params.amount.currency
      },
      beneficiaryAccountName: params.beneficiaryAccountName,
      beneficiaryAccountNo: params.beneficiaryAccountNo,
      beneficiaryAddress: params.beneficiaryAddress ?? '',
      beneficiaryBankCode: params.beneficiaryBankCode,
      beneficiaryBankName: params.beneficiaryBankName ?? '',
      beneficiaryEmail: params.beneficiaryEmail ?? '',
      currency: params.currency ?? '',
      customerReference: params.customerReference ?? '',
      sourceAccountNo: params.sourceAccountNo,
      transactionDate: params.transactionDate ?? timeStamp,
      feeType: params.feeType ?? '',
      additionalInfo: {
        deviceId: params.additionalInfo.deviceId ?? '',
        channel: params.additionalInfo.channel ?? ''
      }
    };
    const signature = generateSignatureServiceSnapBI({
      body: body,
      method: 'POST',
      url: '/snap-service/v1/transfer-interbank',
      accessToken: token,
      timeStamp: timeStamp,
      apiSecret: this.config.apiSecret
    });

    const res = await this.httpClient.requestSnapBI({
      method: 'POST',
      apiKey: this.config.apiKey,
      accessToken: token,
      url: `${this.client.getBaseUrl()}/snap-service/v1/transfer-interbank`,
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
  }
}

export default SnapBI;
