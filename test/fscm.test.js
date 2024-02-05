import { BNIClient, FSCM } from '../src/index.js';
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
});


const client = new BNIClient({
  env: 'sandbox-dev',
  clientId: constants.clientId,
  clientSecret: constants.clientSecret,
  apiKey: constants.apiKey,
  apiSecret: constants.apiSecret
});

const fscm = new FSCM(client);

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