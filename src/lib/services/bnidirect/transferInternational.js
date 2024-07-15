import { responseBNIDirect } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature, generateBniDirectKey } from '../../util/util.js';
export async function transferInternational(params = { body, config }) {
  const body = {
    corporateId: params.body.corporateId,
    userId: params.body.userId,
    debitedAccountNo: params.body.debitedAccountNo,
    amountCurrency: params.body.amountCurrency,
    amount: params.body.amount,
    treasuryReferenceNo: params.body.treasuryReferenceNo,
    chargeTo: params.body.chargeTo,
    remark1: params.body.remark1,
    remark2: params.body.remark2,
    remark3: params.body.remark3,
    remitterReferenceNo: params.body.remitterReferenceNo,
    finalizePaymentFlag: params.body.finalizePaymentFlag,
    beneficiaryReferenceNo: params.body.beneficiaryReferenceNo,
    beneficiaryAccountNo: params.body.beneficiaryAccountNo,
    beneficiaryAccountName: params.body.beneficiaryAccountName,
    beneficiaryAddress1: params.body.beneficiaryAddress1,
    beneficiaryAddress2: params.body.beneficiaryAddress2,
    beneficiaryAddress3: params.body.beneficiaryAddress3,
    organizationDirectoryCode: params.body.organizationDirectoryCode,
    beneficiaryBankCode: params.body.beneficiaryBankCode,
    beneficiaryBankName: params.body.beneficiaryBankName,
    beneficiaryBankBranchName: params.body.beneficiaryBankBranchName,
    beneficiaryBankAddress1: params.body.beneficiaryBankAddress1,
    beneficiaryBankAddress2: params.body.beneficiaryBankAddress2,
    beneficiaryBankAddress3: params.body.beneficiaryBankAddress3,
    beneficiaryBankCountryName: params.body.beneficiaryBankCountryName,
    correspondentBankName: params.body.correspondentBankName,
    identicalStatusFlag: params.body.identicalStatusFlag,
    beneficiaryResidentshipCode: params.body.beneficiaryResidentshipCode,
    beneficiaryCitizenshipCode: params.body.beneficiaryCitizenshipCode,
    beneficiaryCategoryCode: params.body.beneficiaryCategoryCode,
    transactorRelationship: params.body.transactorRelationship,
    transactionPurposeCode: params.body.transactionPurposeCode,
    transactionDescription: params.body.transactionDescription,
    notificationFlag: params.body.notificationFlag,
    beneficiaryEmail: params.body.beneficiaryEmail,
    transactionInstructionDate: params.body.transactionInstructionDate,
    docUniqueId: params.body.docUniqueId
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
    url: `${params.config.client.getBaseUrl()}/bnidirect/api/International/Transfer`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body,
    bniDirectKey:
      'dc8f7943e027345677c7dade0441936c3bb3f8d697ef8f7b28ae5dfdeea78dd1'
  });
  return responseBNIDirect({ res: res });
}