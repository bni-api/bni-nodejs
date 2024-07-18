import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';
export async function payrollMixed(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    apiRefNo: params.body.apiRefNo,
    serviceType: params.body.serviceType,
    instructionDate: params.body.instructionDate,
    session: params.body.session,
    debitAcctNo: params.body.debitAcctNo,
    totalAmount: params.body.totalAmount,
    totalAmountCurrencyCode: params.body.totalAmountCurrencyCode,
    chargeTo: params.body.chargeTo,
    residenceCode: params.body.residenceCode,
    citizenCode: params.body.citizenCode,
    remitterCategory: params.body.category,
    transactionType: params.body.transactionType,
    remark: params.body.remark,
    accountNmValidation: params.body.accountNmValidation,
    totalRecord: params.body.totalRecord,
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
    bniDirectKey: bniDirectKey
  });
  return responseBNIDirect({ res: res });
}
