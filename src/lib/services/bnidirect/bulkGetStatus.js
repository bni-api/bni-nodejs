import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';

export async function bulkGetStatus(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    fileRefNo: params.body.fileRefNo,
    apiRefNo: params.body.apiRefNo
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
  let res = await httpClient.requestBniDirectV2({
    method: 'POST',
    apiKey: params.config.config.apiKey,
    accessToken: await params.config.client.getToken(),
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/Account/BulkGetStatus`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey:
      'dc8f7943e027345677c7dade0441936c3bb3f8d697ef8f7b28ae5dfdeea78dd1'
  });
  return responseBNIDirect({ res: res });
}
