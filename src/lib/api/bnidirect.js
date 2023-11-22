import { balanceInquiry } from '../services/bnidirect/balanceInquiry.js';
import { domesticSingleBIFastTransfer } from '../services/bnidirect/domesticSingleBIFastTransfer.js';
import { bniPopsCashAndCarry } from '../services/bnidirect/bniPopsCashAndCarry.js';
import { bniPopsProductAllocation } from '../services/bnidirect/bniPopsProductAllocation.js';
import { bniPopsResubmitProductAllocation } from '../services/bnidirect/bniPopsResubmitProductAllocation.js';
import { bulkGetStatus } from '../services/bnidirect/bulkGetStatus.js';
import { inquiryVirtualAccountTransaction } from '../services/bnidirect/inquiryVirtualAccountTransaction.js';
import { updateVirtualAccount } from '../services/bnidirect/updateVirtualAccount.js';
import { createVirtualAccount } from '../services/bnidirect/createVirtualAccount.js';

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

  async bniPopsCashAndCarry(params) {
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

  async bniPopsProductAllocation(params) {
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

  async bniPopsResubmitCashAndCarry(params) {
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

  async bniPopsResubmitProductAllocation(params) {
    const res = bniPopsResubmitProductAllocation({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async bulkGetStatus(params) {
    const res = bulkGetStatus({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  
  async inquiryVirtualAccountTransaction(params) {
    const res = inquiryVirtualAccountTransaction({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  
  async updateVirtualAccount(params) {
    const res = updateVirtualAccount({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async createVirtualAccount(params) {
    const res = createVirtualAccount({
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
