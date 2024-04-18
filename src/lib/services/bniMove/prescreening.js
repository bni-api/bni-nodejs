import { responseBniMove } from '../../util/response.js';
import HttpClient from '../../net/httpClient.js';
import { generateSignature } from '../../util/util.js';

export async function prescreening(params = { body, config }) {
  const body = {
    kodeMitra: params.body.kodeMitra,
    npp: params.body.npp ?? '',
    namaLengkapKtp: params.body.namaLengkapKtp,
    noKtp: params.body.noKtp,
    noHandphone: params.body.noHandphone,
    alamatUsaha: params.body.alamatUsaha,
    provinsiUsaha: params.body.provinsiUsaha,
    kotaUsaha: params.body.kotaUsaha,
    kecamatanUsaha: params.body.kecamatanUsaha,
    kelurahanUsaha: params.body.kelurahanUsaha,
    kodePosUsaha: params.body.kodePosUsaha,
    sektorEkonomi: params.body.sektorEkonomi,
    totalPenjualan: params.body.totalPenjualan,
    jangkaWaktu: params.body.jangkaWaktu,
    jenisPinjaman: params.body.jenisPinjaman,
    maximumKredit: params.body.maximumKredit,
    jenisKelamin: params.body.jenisKelamin,
    tanggalLahir: params.body.tanggalLahir,
    subSektorEkonomi: params.body.subSektorEkonomi,
    deskripsi: params.body.deskripsi,
    email: params.body.email ?? ''
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
    url: `${params.config.client.getBaseUrl()}/digiloan/prescreening`,
    signature: signature.split('.')[2],
    timestamp: params.config.timeStamp,
    data: body
  });
  return responseBniMove({ res: res });
}
