import HttpClient from '../net/httpClient.js';
import { responseRDL } from '../util/response.js';
import { generateSignature, generateClientId, generateUUID, encrypt, decrypt } from '../util/util.js';

class Ecollection {
    constructor(client) {
        this.client = client;
        this.config = client.getConfig();
        this.httpClient = new HttpClient();
        this.timeStamp = new Date().toISOString();
    }

    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * accountNo
     */

    async createInvoiceBilling(
        params = {
            type,
            client_id,
            trx_id,
            trx_amount,
            billing_type,
            customer_nam,
            customer_email,
            customer_phone,
            virtual_account,
            datetime_expired,
            description,
        }
    ) {

        const data = {
            type: params.type,
            client_id: params.client_id,
            trx_id: params.trx_id,
            trx_amount: params.trx_amount,
            billing_type: params.billing_type,
            customer_nam: params.customer_nam,
            customer_email: params.customer_email,
            customer_phone: params.customer_phone,
            virtual_account: params.virtual_account,
            datetime_expired: params.datetime_expired,
            description: params.description,
        };

        const request = encrypt(data)
        console.log(request)
        console.log("============")
        // const signature = generateSignature({ body: { request: { ...body }, timestamp: this.timeStamp }, apiSecret: this.config.apiSecret });
        // const res = await this.httpClient.requestV2({
        //     method: 'POST',
        //     apiKey: this.config.apiKey,
        //     accessToken: await this.client.getToken(),
        //     url: `${this.client.getBaseUrl()}/p2pl/v2.1/inquiry/account/balance`,
        //     signature: signature.split('.')[2],
        //     timestamp: this.timeStamp,
        //     data: { request: { ...body } }
        // });

        // return responseRDL({ res: res });

    }

}
export default Ecollection;
