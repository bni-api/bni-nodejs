import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';
export async function transferOnline(params = { body, config }) {
  const body = {
    'corporateId': params.body.corporateId,
    'userId': params.body.userId,
    'debitedAccountNo': params.body.debitedAccountNo,
    'amountCurrency': params.body.amountCurrency,
    'amount': params.body.amount,
    'treasuryReferenceNo': params.body.treasuryReferenceNo,
    'chargeTo': params.body.chargeTo,
    'remark1': params.body.remark1,
    'remark2': params.body.remark2,
    'remark3': params.body.remark3,
    'remitterReferenceNo': params.body.remitterReferenceNo,
    'finalizePaymentFlag': params.body.finalizePaymentFlag,
    'beneficiaryReferenceNo': params.body.beneficiaryReferenceNo,
    'beneficiaryAccountNo': params.body.beneficiaryAccountNo,
    'beneficiaryBankCode': params.body.beneficiaryBankCode,
    'beneficiaryBankName': params.body.beneficiaryBankName,
    'notificationFlag': params.body.notificationFlag,
    'beneficiaryEmail': params.body.beneficiaryEmail,
    'transactionInstructionDate': params.body.transactionInstructionDate
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
  const res = await httpClient.requestBniDirectV2({
    method: 'POST',
    apiKey: params.config.config.apiKey,
    accessToken: await params.config.client.getToken(),
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/Online/Transfer`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey:
      'dc8f7943e027345677c7dade0441936c3bb3f8d697ef8f7b28ae5dfdeea78dd1'
  });
  return responseBNIDirect({ res: res });
}