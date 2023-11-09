import { callbackApi } from '../services/bnidirect/callbackAPi.js';
import { balanceInquiry } from '../services/bnidirect/balanceInquiry.js';
import { domesticSingleBIFastTransfer } from '../services/bnidirect/domesticSingleBIFastTransfer.js';
import { payrollMixed } from '../services/bnidirect/payrollMixed.js';
import { inquiryForexRate } from '../services/bnidirect/inquiryForexRate.js';
import { bulkPaymentMixed } from '../services/bnidirect/bulkPaymentMixed.js';
import { inquiryChildAccount } from '../services/bnidirect/inquiryChildAccount.js';
import { inquiryBIFastBeneficiaryName } from '../services/bnidirect/inquiryBIFastBeneficiaryName.js';

class BNIDIRECT {
  constructor(client) {
    this.client = client;
    this.config = client.getConfig();
    this.timeStamp = new Date().toISOString();
  }
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */

  async balanceInquiry(params) {
    const res = balanceInquiry({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async domesticSingleBIFastTransfer(params) {
    const res = domesticSingleBIFastTransfer({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async payrollMixed(params) {
    const res = payrollMixed({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async callbackApi(params) {
    const res = callbackApi({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryForexRate(params) {
    const res = inquiryForexRate({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async bulkPaymentMixed(params) {
    const res = bulkPaymentMixed({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryChildAccount(params) {
    const res = inquiryChildAccount({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryBIFastBeneficiaryName(params) {
    const res = inquiryBIFastBeneficiaryName({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
}

export default BNIDIRECT;
