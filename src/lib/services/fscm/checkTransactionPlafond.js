import { responseFSCM } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature } from '../../util/util.js';

export async function checkTransactionPlafond(params = { body, config }) {
  const body = {
    rq_uuid: params.body.rq_uuid,
    comm_code: params.body.comm_code,
    credit_type: params.body.credit_type,
    currency: params.body.currency,
    rq_datetime: params.body.rq_datetime,
    member_code: params.body.member_code,
    amount: params.body.amount
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
    url: `${params.config.client.getBaseUrl()}/FSCM/check-transaction-plafond`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body
  });
  return responseFSCM({ res: res });
} 
