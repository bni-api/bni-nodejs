import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';

export async function updateVirtualAccount(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    companyCode: params.body.companyCode,
    virtualAccountNo: params.body.virtualAccountNo,
    virtualAccountName: params.body.virtualAccountName,
    virtualAccountTypeCode: params.body.virtualAccountTypeCode,
    billingAmount: params.body.billingAmount,
    varAmount1: params.body.varAmount1,
    varAmount2: params.body.varAmount2,
    expiryDate: params.body.expiryDate,
    expiryTime: params.body.expiryTime,
    mobilePhoneNo: params.body.mobilePhoneNo,
    statusCode: params.body.statusCode
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
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/VirtualAccount/Update`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey: bniDirectKey
  });
  return responseBNIDirect({ res: res });
}
