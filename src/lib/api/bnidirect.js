import { balanceInquiry } from '../services/bnidirect/balanceInquiry.js';
import { domesticSingleBIFastTransfer } from '../services/bnidirect/domesticSingleBIFastTransfer.js';

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
}

export default BNIDIRECT;
