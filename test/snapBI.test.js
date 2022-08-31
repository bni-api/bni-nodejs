const BNIClient = require('../lib/bniClient');
const SnapBI = require('../lib/api/snapBI');
const assert = require('assert');

describe('snapBI.js', () => {

//   describe('getBalanceInquiry', () => {

//     it('should return responseCode 2000000', () => {
//       return getBalanceInquiry().then((res) => {
//         assert.strictEqual(res.responseCode, '2000000');
//       });
//     });

//   });

//   describe('getBankStatement', () => {

//     it('should return responseCode 2001400', () => {
//       return getBankStatement().then((res) => {
//         assert.strictEqual(res.responseCode, '2001400');
//       });
//     });

//   });

//   describe('getInternalAccountInquiry', () => {

//     it('should return responseCode 2001500', () => {
//       return getInternalAccountInquiry().then((res) => {
//         assert.strictEqual(res.responseCode, '2001500');
//       });
//     });

//   });

  describe('getTransactionStatusInquiry', () => {

    it('should return responseCode 2003600', () => {
      return getTransactionStatusInquiry().then((res) => {
        assert.strictEqual(res.responseCode, '2003600');
      });
    });

  });

});

const client = new BNIClient({
    prod: false,
    clientId: '0bed55cb-c25d-4f07-9c5f-78f7c8aac9da',
    clientSecret: '46987047-6d56-410d-b43c-abdd247abac2',
    apiKey: '91ea86f6-387a-49f9-bc55-670e4d2ef67b',
    apiSecret: 'cc914c89-6b65-475d-a450-58ee4199a1b2',
    appName: 'Test Wawat',
});

const getBalanceInquiry = async () => {
  const snap = new SnapBI(client, {privateKeyPath: './private.key', channelId: "95221"});
  const res = await snap.balanceInquiry({
      partnerReferenceNo: "202010290000000000002",
      accountNo: "0115476117",
    });
  return res;
};

const getBankStatement = async () => {
    const snap = new SnapBI(client, {privateKeyPath: './private.key', channelId: "95221"});
    const res = await snap.bankStatement({
          partnerReferenceNo: "202102102021",
          accountNo: "115233527",
          fromDateTime: "2010-01-01T12:08:56+07:00",
          toDateTime: "2011-01-01T12:08:56+07:00"
    });
    return res;
  };

  
  const getInternalAccountInquiry = async () => {
    const snap = new SnapBI(client, {privateKeyPath: './private.key', channelId: "95221"});
    const res = await snap.internalAccountInquiry({
          partnerReferenceNo: "202010290000000000002",
          beneficiaryAccountNo: "0115476151"
        });
    return res;
  };

  const getTransactionStatusInquiry = async () => {
    const snap = new SnapBI(client, {privateKeyPath: './private.key', channelId: "95221"});
    const res = await snap.transactionStatusInquiry({
        originalPartnerReferenceNo:"202201911020000121",
        originalReferenceNo: "220531103343739748",
        originalExternalId: "20220531103340",
        serviceCode: "17",
        transactionDate: "2022-05-31",
        amount: {
          value: "15000.00",
          currency: "IDR"
        },
        additionalInfo: {
          deviceId: "123456",
          channel: "mobilephone"
        }
      });
    return res;
  }
