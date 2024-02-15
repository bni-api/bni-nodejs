import { responseFSCM } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature } from '../../util/util.js';

export async function inquiry(params = { body, config }) {
  const body = {
    rq_uuid: params.body.rq_uuid,
    comm_code: params.body.comm_code,
    password: params.body.password,
    doc_no: params.body.doc_no,
    rq_datetime: params.body.rq_datetime,
    member_code: params.body.member_code
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
    url: `${params.config.client.getBaseUrl()}/FSCM/inquiry`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body
  });
  return responseFSCM({ res: res });
} 
