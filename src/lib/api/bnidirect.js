import { callbackApi } from '../services/bnidirect/callbackAPi.js';
import { balanceInquiry } from '../services/bnidirect/balanceInquiry.js';
import { domesticSingleBIFastTransfer } from '../services/bnidirect/domesticSingleBIFastTransfer.js';
import { createMpnG2BillingId } from '../services/bnidirect/createMpnG2BillingId.js';
import { inquiryNpwp } from '../services/bnidirect/inquiryNpwp.js';
import { inquiryInHouseAndVaBeneficiaryName } from '../services/bnidirect/inquiryInHouseAndVaBeneficiaryName.js';
import { inquiryLlgRtgsOnlineBeneficiaryName } from '../services/bnidirect/inquiryLlgRtgsOnlineBeneficiaryName.js';
import { inquiryAccountStatement } from '../services/bnidirect/inquiryAccountStatement.js';
import { inquiryBilling } from '../services/bnidirect/inquiryBilling.js';
import { inquiryBniPopsCashAndCarry } from '.../services/bnidirect/inquiryBniPopsCashAndCarry.js';
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
