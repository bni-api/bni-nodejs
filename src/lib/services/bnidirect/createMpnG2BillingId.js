import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';
export async function createMpnG2BillingId(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    npwp: params.body.npwp,
    taxPayerName: params.body.taxPayerName,
    taxPayerAddress1: params.body.taxPayerAddress1,
    taxPayerAddress2: params.body.taxPayerAddress2,
    taxPayerAddress3: params.body.taxPayerAddress3,
    taxPayerCity: params.body.taxPayerCity,
    NOP: params.body.NOP,
    MAPCode: params.body.MAPCode,
    depositTypeCode: params.body.depositTypeCode,
    wajibPungutNPWP: params.body.wajibPungutNPWP,
    wajibPungutName: params.body.wajibPungutName,
    wajibPungutAddress1: params.body.wajibPungutAddress1,
    wajibPungutAddress2: params.body.wajibPungutAddress2,
    wajibPungutAddress3: params.body.wajibPungutAddress3,
    participantId: params.body.participantId,
    assessmentTaxNumber: params.body.assessmentTaxNumber,
    amountCurrency: params.body.amountCurrency,
    amount: params.body.amount,
    monthFrom: params.body.monthFrom,
    monthTo: params.body.monthTo,
    year: params.body.year,
    confirmNumber: params.body.confirmNumber,
    traceId: params.body.traceId,
    kelurahan: params.body.kelurahan,
    kecamatan: params.body.kecamatan,
    provinsi: params.body.provinsi,
    kota: params.body.kota
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
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/MPNG2/CreateBilling`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey: bniDirectKey
  });
  return responseBNIDirect({ res: res });
}
