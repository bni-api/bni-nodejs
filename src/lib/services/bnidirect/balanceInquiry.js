import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';
export async function balanceInquiry(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    accountList: params.body.accountList
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
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/Account/InquiryBalance`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey: bniDirectKey
  });
  return responseBNIDirect({ res: res });
}
