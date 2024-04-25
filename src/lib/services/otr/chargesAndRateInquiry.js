import { responseOtr } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateOtrUUID } from '../../util/util.js';

export async function chargesAndRateInquiry(params = { body, config }) {
  const body = {
    orderingId: params.body.orderingId,
    bic: params.body.bic,
    serviceType: params.body.serviceType,
    sourceCcy: params.body.sourceCcy,
    orderingCcy: params.body.orderingCcy,
    detailCharges: params.body.detailCharges,
    orderingAmount: params.body.orderingAmount
  };

  const httpClient = new HttpClient();

  const res = await httpClient.requestOtr({
    RequestId: generateOtrUUID(),
    timestamp: params.config.timeStamp,
    ChannelId: params.config.configOtr.channelId,
    method: 'POST',
    url: `${params.config.client.getBaseUrl()}/chargesAndRateInquiry`,
    data: body
  });
  return responseOtr({ res: res });
}
