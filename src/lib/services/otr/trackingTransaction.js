import { responseOtr } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateOtrUUID } from '../../util/util.js';

export async function trackingTransaction(params = { body, config }) {
  const httpClient = new HttpClient();

  const res = await httpClient.requestOtr({
    RequestId: generateOtrUUID(),
    timestamp: params.config.timeStamp,
    ChannelId: params.config.configOtr.channelId,
    method: 'GET',
    url: `${params.config.client.getBaseUrl()}/getBankAndCurrencyLimitation`
  });
  return responseOtr({ res: res });
}
