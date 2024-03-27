import { responseBniMove } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature } from '../../util/util.js';

export async function saveImage(params = { body, config }) {
  const body = {
    Id: params.body.Id,
    deskripsi: params.body.deskripsi,
    jenisDokumen: params.body.jenisDokumen,
    namaFile: params.body.namaFile,
    extensionFile: params.body.extensionFile,
    dataBase64: params.body.dataBase64
  };

  const signature = generateSignature({
    body: { ...body, timestamp: params.config.timeStamp },
    apiSecret: params.config.config.apiSecret
  });

  const httpClient = new HttpClient();

  const res = await httpClient.requestV2New({
    method: 'POST',
    apiKey: params.config.config.apiKey,
    accessToken: await params.config.client.getToken(),
    url: `${params.config.client.getBaseUrl()}/digiloan/saveimage`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body
  });
  return responseBniMove({ res: res });
}
