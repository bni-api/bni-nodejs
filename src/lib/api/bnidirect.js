import { InquiryBniPOPSProductAllocation } from '../services/bnidirect/InquiryBniPOPSProductAllocation.js';
import { billingPayment } from '../services/bnidirect/billingPayment.js';
import { getPaymentStatus } from '../services/bnidirect/getPaymentStatus.js';
import { inhouseTransfer } from '../services/bnidirect/inhouseTransfer.js';
import { transferInternational } from '../services/bnidirect/transferInternational.js';
import { transferLLG } from '../services/bnidirect/transferLLG.js';
import { transferOnline } from '../services/bnidirect/transferOnline.js';
import { transferRTGS } from '../services/bnidirect/transferRTGS.js';

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

  async InquiryBniPOPSProductAllocation(params) {
    const res = InquiryBniPOPSProductAllocation({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async billingPayment(params) {
    const res = billingPayment({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async getPaymentStatus(params) {
    const res = getPaymentStatus({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inhouseTransfer(params) {
    const res = inhouseTransfer({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async transferInternational(params) {
    const res = transferInternational({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async transferLLG(params) {
    const res = transferLLG({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async transferOnline(params) {
    const res = transferOnline({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async transferRTGS(params) {
    const res = transferRTGS({
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