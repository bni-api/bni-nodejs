import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';
export async function billingPayment(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    debitedAccountNo: params.body.debitedAccountNo,
    institution: params.body.institution,
    payeeName: params.body.payeeName,
    customerInformation1: params.body.customerInformation1,
    customerInformation2: params.body.customerInformation2,
    customerInformation3: params.body.customerInformation3,
    customerInformation4: params.body.customerInformation4,
    customerInformation5: params.body.customerInformation5,
    billPresentmentFlag: params.body.billPresentmentFlag,
    remitterRefNo: params.body.remitterRefNo,
    finalizePaymentFlag: params.body.finalizePaymentFlag,
    beneficiaryRefNo: params.body.beneficiaryRefNo,
    notificationFlag: params.body.notificationFlag,
    beneficiaryEmail: params.body.beneficiaryEmail,
    transactionInstructionDate: params.body.transactionInstructionDate,
    amountCurrency: params.body.amountCurrency,
    amount: params.body.amount
  };
  const signature = generateSignature({
    body: { ...body, timestamp: params.config.timeStamp },
    apiSecret: params.config.config.apiSecret
  });
  const bniDirectKey = generateBniDirectKey({
    corpId: body.corporateId.toLowerCase(),
    userId: body.userId.toLowerCase(),
    bniDirectKey: params.config.config.bniDirectKey
  });
  const httpClient = new HttpClient();
  const res = await httpClient.requestBniDirectV2({
    method: 'POST',
    apiKey: params.config.config.apiKey,
    accessToken: await params.config.client.getToken(),
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/Billing/Payment`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey:
      'dc8f7943e027345677c7dade0441936c3bb3f8d697ef8f7b28ae5dfdeea78dd1'
  });
  return responseBNIDirect({ res: res });
}