import { responseFSCM } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature } from '../../util/util.js';

export async function checkLimit(params = { body, config }) {
  const body = {
    rq_uuid: params.body.rq_uuid,
    rq_datetime: params.body.rq_datetime,
    password: params.body.password,
    member_code: params.body.member_code,
    comm_code: params.body.comm_code,
    currency: params.body.currency
  };

  const signature = generateSignature({
    body: { ...body, timestamp: params.config.timeStamp },
    apiSecret: params.config.config.apiSecret
  });

  const httpClient = new HttpClient();
  
  const res = await httpClient.requestV2({
    method: 'POST',
    apiKey: params.config.config.apiKey,
    accessToken: await params.config.client.getToken(),
    url: `${params.config.client.getBaseUrl()}/FSCM/check_limit`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body
  });
  return responseFSCM({ res: res });
} 
