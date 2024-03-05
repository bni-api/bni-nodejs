export default DIGILOAN;
declare class DIGILOAN {
  constructor(client: any);
  client: any;
  config: any;
  timeStamp: any;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */
  prescreening(params?: {
    kodeMitra: string;
    npp: string;
    namaLengkapKtp: string;
    noKtp: any;
    noHandphone: any;
    alamatUsaha: string;
    provinsiUsaha: any;
    kotaUsaha: any;
    kecamatanUsaha: any;
    kelurahanUsaha: any;
    kodePosUsaha: any;
    sektorEkonomi: any;
    totalPenjualan: number;
    jangkaWaktu: any;
    jenisPinjaman: any;
    maximumKredit: number;
    jenisKelamin: number;
    tanggalLahirKtp: any;
    subSektorEkonomi: any;
    deskripsi: string;
    alamatEmail: string;
  });
}