import { sendInvoice } from '../services/fscm/sendInvoice.js';
import { inquiry } from '../services/fscm/inquiry.js';
import { checkTransactionPlafond } from '../services/fscm/checkTransactionPlafond.js';
import { checkLimit } from '../services/fscm/checkLimit.js';
import { checkStopSupply } from '../services/fscm/checkStopSupply.js';
import { deleteInvoice } from '../services/fscm/deleteInvoice.js';
import { praNota } from '../services/fscm/praNota.js';
import { deletePraNota } from '../services/fscm/deletePraNota.js';

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
    const res = inquiry({
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
    const res = checkTransactionPlafond({
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
    const res = checkLimit({
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
    const res = checkStopSupply({
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
    const res = deleteInvoice({
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
    const res = praNota({
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
    const res = deletePraNota({
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
