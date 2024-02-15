import { BNIClient, Fscm } from '../src/index.js';
import { strictEqual } from 'assert';
import { constants } from './constant.js';

describe('fscm.js', () => {
  describe('sendInvoice', () => {
    it('should return error_code 0000', async () => {
      return sendInvoice().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
  describe('inquiry.js', () => {
    it('should return error_code 0000', async () => {
      return inquiry().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
  describe('checkTransactionPlafond.js', () => {
    it('should return error_code 0000', async () => {
      return checkTransactionPlafond().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
  describe('checkLimit.js', () => {
    it('should return error_code 0000', async () => {
      return checkLimit().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
  describe('checkStopSupply.js', () => {
    it('should return error_code 0000', async () => {
      return checkStopSupply().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
  describe('deleteInvoice.js', () => {
    it('should return error_code 0000', async () => {
      return deleteInvoice().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
  describe('praNota.js', () => {
    it('should return error_code 0000', async () => {
      return praNota().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
  describe('deletePraNota.js', () => {
    it('should return error_code 0000', async () => {
      return deletePraNota().then((res) =>
        strictEqual(res.error_code, '0000')
      );
    });
  });
});


const client = new BNIClient({
  env: 'sandbox-dev',
  clientId: constants.clientId,
  clientSecret: constants.clientSecret,
  apiKey: constants.apiKey,
  apiSecret: constants.apiSecret
});

const fscm = new Fscm(client);

const sendInvoice = async () => {
  const res = await fscm.sendInvoice({
    rq_uuid: 'test-uuid-send-invoice',
    password: 'sigbni',
    doc_no: 'INV_TEST111',
    member_code: '142',
    due_date: '23/10/2023',
    amount: '1000',
    currency: 'IDR',
    issue_date: '22/10/2023',
    rq_datetime: '2023-10-23 09:34:00',
    term_of_payment: '',
    comm_code: '7900'
  });
  return res;
};

const inquiry = async () => {
  const res = await fscm.inquiry({
    rq_uuid: 'test-uuid-inquiry',
    comm_code: '7900',
    password: 'sigbni',
    doc_no: 'INV20231023JKL5',
    rq_datetime: '2023-01-04 16:50:00',
    member_code: '142'
  });
  return res;
};

const checkTransactionPlafond = async () => {
  const res = await fscm.checkTransactionPlafond({
    rq_uuid: 'test-uuid-check',
    comm_code: '7900',
    credit_type: 'CREDIT',
    currency: 'IDR',
    rq_datetime: '2023-01-04 13:47:00',
    member_code: '142',
    amount: '30000000000'
  });
  return res;
};

const checkLimit = async () => {
  const res = await fscm.checkLimit({
    rq_uuid: 'test-uuid-check-limit',
    rq_datetime: '2021-11-18 10:18:00',
    password: 'sigbni',
    member_code: '142',
    comm_code: '7900',
    currency: 'IDR'
  });
  return res;
};

const checkStopSupply = async () => {
  const res = await fscm.checkStopSupply({
    rq_uuid: 'test-uuid-check-stop-supply',
    password: 'sigbni',
    member_code: '142',
    rq_datetime: '2022-11-18 16:50:00',
    comm_code: '7900',
    currency: 'IDR',
    ccy: '',
    status_member: '1'
  });
  return res;
};

const deleteInvoice = async () => {
  const res = await fscm.deleteInvoice({
    rq_uuid: 'test-uuid-delete-invoice',
    password: 'sigbni',
    doc_no: 'INV_TEST111',
    member_code: '142',
    rq_datetime: '2023-10-24 08:22:00',
    comm_code: '7900'
  });
  return res;
};

const praNota = async () => {
  const res = await fscm.praNota({
    rq_uuid: 'rq-test-pranota',
    password: 'sigbni',
    doc_no: 'INVtest-201',
    member_code: '142',
    amount: '1000000',
    currency: 'IDR',
    issue_date: '17/10/2023',
    rq_datetime: '2023-01-05 09:34:00',
    term_of_payment: '2',
    comm_code: '7900'
  });
  return res;
};

const deletePraNota = async () => {
  const res = await fscm.deletePraNota({
    rq_uuid: 'rq-test-pranota',
    rq_datetime: '2023-01-05-09:34:00',
    password: 'sigbni',
    member_code: '142',
    comm_code: '7900',
    doc_no: 'INVtest-201',
    issue_date: '16/10/2023'
  });
  return res;
};