import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';

export async function singleBulkPayment(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    apiRefNo: params.body.apiRefNo,
    instructionDate: params.body.instructionDate,
    session: params.body.session,
    serviceType: params.body.serviceType,
    isSTP: params.body.isSTP,
    transactionType: params.body.transactionType,
    remark: params.body.remark,
    accountNmValidation: params.body.accountNmValidation,
    transactionDetail: params.body.transactionDetail
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
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/MassPayment/SingleBulkPaymentMixed`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey: bniDirectKey
  });
  return responseBNIDirect({ res: res });
}