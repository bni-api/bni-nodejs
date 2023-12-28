import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';

export async function bniPopsCashAndCarry(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    debitAccountNo: params.body.debitAccountNo,
    salesOrganizationCode: params.body.salesOrganizationCode,
    distributionChannelCode: params.body.distributionChannelCode,
    productCode: params.body.productCode,
    shipTo: params.body.shipTo,
    debitOrCreditNoteNo: params.body.debitOrCreditNoteNo,
    productInformationDetail: params.body.productInformationDetail
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
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/BNIPOPS/CashandCarry/Payment`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey:
      'a39a04f8801b490da63db5b5e71b95ea6e0d8b6782df26b52c48c35bc19c22f2'
  });
  return responseBNIDirect({ res: res });
}
