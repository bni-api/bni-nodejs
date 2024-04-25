import { responseOtr } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateOtrUUID } from '../../util/util.js';

export async function transactionOverbooking(params = { body, config }) {
  const body = {
    referenceNumber: params.body.referenceNumber,
    orderingId: params.body.orderingId,
    orderingBic: params.body.orderingBic,
    orderingName: params.body.orderingName,
    orderingAddress: params.body.orderingAddress,
    orderingEmail: params.body.orderingEmail,
    orderingPhoneNumber: params.body.orderingPhoneNumber,
    beneficiaryAccount: params.body.beneficiaryAccount,
    beneficiaryName: params.body.beneficiaryName,
    beneficiaryAddress: params.body.beneficiaryAddress,
    beneficiaryPhoneNumber: params.body.beneficiaryPhoneNumber,
    accountWithInstCode: params.body.accountWithInstCode,
    accountWithInstBic: params.body.accountWithInstBic,
    accountWithInstName: params.body.accountWithInstName,
    remittanceInfo: params.body.remittanceInfo,
    invoiceNumber: params.body.invoiceNumber,
    invoiceAmount: params.body.invoiceAmount
  };

  const httpClient = new HttpClient();

  const res = await httpClient.requestOtr({
    RequestId: generateOtrUUID(),
    timestamp: params.config.timeStamp,
    ChannelId: params.config.configOtr.channelId,
    method: 'POST',
    url: `${params.config.client.getBaseUrl()}/transaction/overbooking`,
    data: body
  });
  return responseOtr({ res: res });
}
