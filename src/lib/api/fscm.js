import { sendInvoice } from '../services/fscm/sendInvoice.js';

class FSCM {
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

  async sendInvoice(params) {
    const res = sendInvoice({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiry(params) {
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

  async checkTransactionPlafond(params) {
    const res = bniPopsCashAndCarry({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  
  async checkLimit(params) {
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

  async checkStopSupply(params) {
    const res = bniPopsProductAllocation({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async deleteInvoice(params) {
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

  async praNota(params) {
    const res = bniPopsResubmitCashAndCarry({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async deletePraNota(params) {
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
}

export default FSCM;
