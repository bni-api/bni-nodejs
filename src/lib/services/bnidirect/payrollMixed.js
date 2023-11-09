import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';
export async function payrollMixed(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    apiRefNo: params.body.apiRefNo,
    instructionDate: params.body.instructionDate,
    session: params.body.session,
    serviceType: params.body.serviceType,
    debitAcctNo: params.body.debitAcctNo,
    amount: params.body.amount,
    currency: params.body.currency,
    chargeTo: params.body.chargeTo,
    residenceCode: params.body.residenceCode,
    citizenCode: params.body.citizenCode,
    category: params.body.category,
    transactionType: params.body.transactionType,
    accountNmValidation: params.body.accountNmValidation,
    remark: params.body.remark,
    childContent: params.body.childContent
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
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/MassPayment/PayrollMixed`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey:
      'dc8f7943e027345677c7dade0441936c3bb3f8d697ef8f7b28ae5dfdeea78dd1'
  });
  return responseBNIDirect({ res: res });
}
