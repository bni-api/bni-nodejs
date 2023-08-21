"use strict";
import { encrypt, decrypt } from './utils.js';

function testEncryptionDecryption() {
    const json_data = {
        "client_id": "001",
        "trx_amount": "100000",
        "customer_name": "Mr. X",
        "customer_email": "xxx@email.com",
        "customer_phone": "08123123123",
        "virtual_account": "8001000000000001",
        "trx_id": "1230000001",
        "datetime_expired": "2016-03-01T16:00:00+07:00",
        "description": "Payment of Trx 123000001",
        "type": "createbilling"

    };

    const cid = "001";
    const sck = "ea0c88921fb033387e66ef7d1e82ab83";

    // Encrypt data
    const encryptedData = encrypt(json_data, cid, sck);
    console.log("Encrypted Data:", encryptedData);

    // Decrypt data
    const decryptedData = decrypt(encryptedData, cid, sck);
    console.log("Decrypted Data:", decryptedData);
}

testEncryptionDecryption();
