import { getTimeStamp } from '../util/util.js';
import { bankAndCurrencyLimitation } from '../services/otr/bankAndCurrencyLimitation.js';
import { chargesAndRateInquiry } from '../services/otr/chargesAndRateInquiry.js';
import { transactionOverbooking } from '../services/otr/transactionOverbooking.js';
import { trackingTransaction } from '../services/otr/trackingTransaction.js';

class OTR {
  constructor(
    client,
    options = {
      channelId
    }
  ) {
    this.client = client;
    this.config = client.getConfig();
    this.configOtr = options;
    this.timeStamp = getTimeStamp();
  }
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */

  async bankAndCurrencyLimitation(params) {
    const res = bankAndCurrencyLimitation({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        configOtr: this.configOtr,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  async chargesAndRateInquiry(params) {
    const res = chargesAndRateInquiry({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        configOtr: this.configOtr,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  async transactionOverbooking(params) {
    const res = transactionOverbooking({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        configOtr: this.configOtr,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  async trackingTransaction(params) {
    const res = trackingTransaction({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        configOtr: this.configOtr,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
}

export default OTR;