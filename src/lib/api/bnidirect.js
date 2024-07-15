import { createMpnG2BillingId } from '../services/bnidirect/createMpnG2BillingId.js';
import { inquiryNpwp } from '../services/bnidirect/inquiryNpwp.js';
import { inquiryInHouseAndVaBeneficiaryName } from '../services/bnidirect/inquiryInHouseAndVaBeneficiaryName.js';
import { inquiryLlgRtgsOnlineBeneficiaryName } from '../services/bnidirect/inquiryLlgRtgsOnlineBeneficiaryName.js';
import { inquiryAccountStatement } from '../services/bnidirect/inquiryAccountStatement.js';
import { inquiryBilling } from '../services/bnidirect/inquiryBilling.js';
import { inquiryBniPopsCashAndCarry } from '../services/bnidirect/inquiryBniPopsCashAndCarry.js';
import { InquiryBniPOPSProductAllocation } from '../services/bnidirect/InquiryBniPOPSProductAllocation.js';
import { getPaymentStatus } from '../services/bnidirect/getPaymentStatus.js';
import { inhouseTransfer } from '../services/bnidirect/inhouseTransfer.js';
import { transferLLG } from '../services/bnidirect/transferLLG.js';
import { transferRTGS } from '../services/bnidirect/transferRTGS.js';
import { transferOnline } from '../services/bnidirect/transferOnline.js';
import { transferInternational } from '../services/bnidirect/transferInternational.js';
import { billingPayment } from '../services/bnidirect/billingPayment.js';
import { bniPopsCashAndCarry } from '../services/bnidirect/bniPopsCashAndCarry.js';
import { bniPopsProductAllocation } from '../services/bnidirect/bniPopsProductAllocation.js';
import { bniPopsResubmitCashAndCarry } from '../services/bnidirect/bniPopsResubmitCashAndCarry.js';
import { bniPopsResubmitProductAllocation } from '../services/bnidirect/bniPopsResubmitProductAllocation.js';
import { createVirtualAccount } from '../services/bnidirect/createVirtualAccount.js';
import { updateVirtualAccount } from '../services/bnidirect/updateVirtualAccount.js';
import { inquiryVirtualAccountTransaction } from '../services/bnidirect/inquiryVirtualAccountTransaction.js';
import { bulkGetStatus } from '../services/bnidirect/bulkGetStatus.js';
import { balanceInquiry } from '../services/bnidirect/balanceInquiry.js';
import { inquiryForexRate } from '../services/bnidirect/inquiryForexRate.js';
import { bulkPaymentMixed } from '../services/bnidirect/bulkPaymentMixed.js';
import { payrollMixed } from '../services/bnidirect/payrollMixed.js';
import { domesticSingleBIFastTransfer } from '../services/bnidirect/domesticSingleBIFastTransfer.js';
import { inquiryBIFastBeneficiaryName } from '../services/bnidirect/inquiryBIFastBeneficiaryName.js';
import { singleBulkPayment } from '../services/bnidirect/singleBulkPayment.js';
import { singleBulkPaymentSubmit } from '../services/bnidirect/singleBulkPaymentSubmit.js';
import { singlePayroll } from '../services/bnidirect/singlePayroll.js';
import { singlePayrollSubmit } from '../services/bnidirect/singlePayrollSubmit.js';

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
  async singleBulkPayment(params) {
    const res = singleBulkPayment({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  async singlePayroll(params) {
    const res = singlePayroll({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  async singleBulkPaymentSubmit(params) {
    const res = singleBulkPaymentSubmit({
      body: params,
      config: {
        client: this.client,
        config: this.config,
        timeStamp: this.timeStamp
      }
    });
    return res;
  }
  async singlePayrollSubmit(params) {
    const res = singlePayrollSubmit({
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
