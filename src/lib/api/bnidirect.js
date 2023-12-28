import { balanceInquiry } from '../services/bnidirect/balanceInquiry.js';
import { domesticSingleBIFastTransfer } from '../services/bnidirect/domesticSingleBIFastTransfer.js';
import { createMpnG2BillingId } from '../services/bnidirect/createMpnG2BillingId.js';
import { inquiryNpwp } from '../services/bnidirect/inquiryNpwp.js';
import { inquiryInHouseAndVaBeneficiaryName } from '../services/bnidirect/inquiryInHouseAndVaBeneficiaryName.js';
import { inquiryLlgRtgsOnlineBeneficiaryName } from '../services/bnidirect/inquiryLlgRtgsOnlineBeneficiaryName.js';
import { inquiryAccountStatement } from '../services/bnidirect/inquiryAccountStatement.js';
import { inquiryBilling } from '../services/bnidirect/inquiryBilling.js';
import { inquiryBniPopsCashAndCarry } from '.../services/bnidirect/inquiryBniPopsCashAndCarry.js';

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

  async createMpnG2BillingId(params) {
    const res = createMpnG2BillingId({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryNpwp(params){
    const res = inquiryNpwp({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryInHouseAndVaBeneficiaryName(params){
    const res = inquiryInHouseAndVaBeneficiaryName({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryLlgRtgsOnlineBeneficiaryName(params){
    const res = inquiryLlgRtgsOnlineBeneficiaryName({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryAccountStatement(params){
    const res = inquiryAccountStatement({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryBilling(params){
    const res = inquiryBilling({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }

  async inquiryBniPopsCashAndCarry(params){
    const res = inquiryBniPopsCashAndCarry({
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
