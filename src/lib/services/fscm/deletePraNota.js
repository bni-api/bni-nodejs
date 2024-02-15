import { responseFSCM } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature } from '../../util/util.js';

export async function deletePraNota(params = { body, config }) {
  const body = {
    rq_uuid: params.body.rq_uuid,
    rq_datetime: params.body.rq_datetime,
    password: params.body.password,
    member_code: params.body.member_code,
    comm_code: params.body.comm_code,
    doc_no: params.body.doc_no,
    issue_date: params.body.issue_date
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
    url: `${params.config.client.getBaseUrl()}/FSCM/delete_pranota`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body
  });
  return responseFSCM({ res: res });
} 
