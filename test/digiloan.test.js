import { Digiloan, BNIClient } from '../src/index.js';
import { strictEqual } from 'assert';
import { constants } from './constant.js';

describe(digiloan.js, () => {
  describe(prescreening.js, () => {
    it('should return requestStatus 0', async () => {
      return prescreening().then((res) =>
        strictEqual(res.requestStatus, 0)
      );
    });
  });
});


const client = new BNIClient({
  env: 'sandbox-dev',
  clientId: constants.clientId,
  clientSecret: constants.clientSecret,
  apiKey: constants.apiKey,
  apiSecret: constants.apiSecret,
  appName: constants.appName,
  userId: constants.Userid
});

const digiloan = new Digiloan(client);

const prescreening = async () => {
  const res = await digiloan.prescreening({
    kodeMitra: 'BNI',
    npp: '',
    namaLengkapKtp: 'Muhammad Haikal Madani',
    noKtp: '3174052209980002',
    noHandphone: '085921658045',
    alamatUsaha: 'jakarta',
    provinsiUsaha: '06',
    kotaUsaha: '143',
    kecamatanUsaha: '1074',
    kelurahanUsaha: '4254',
    kodePosUsaha: '11450',
    sektorEkonomi: '2',
    totalPenjualan: 50000000,
    jangkaWaktu: '12',
    jenisPinjaman: '1',
    maximumKredit: '50000000', 
    jenisKelamin: 1,
    tanggalLahirKtp: '1998-10-07',
    subSektorEkonomi: '050111',
    deskripsi: 'Usaha Ternak Perikanan',
    alamatEmail: 'muhammadhaikalmadani@mail.com'
  });
  return res;
};