import HttpClient from '../net/httpClient.js';
import { responseEcollection } from '../util/response.js';
import {setBody} from "../util/util.js";


// Ecollection HOSTNAME
const SANDBOX_BASE_URL = 'https://apibeta-v2.spesandbox.com';
const DEV_BASE_URL = 'https://apibeta.bni-ecollection.com';
const UAT_BASE_URL = 'https://api-uat.bni-ecollection.com';
const PRODUCTION_BASE_URL = 'https://api.bni-ecollection.com';

const ECOLLECTION_TYPE_CREATEBILLING = "createbilling";
const ECOLLECTION_TYPE_UPDATEBILLING = "updatebilling";
const ECOLLECTION_TYPE_INQUIRYBILLING = "inquirybilling";
const ECOLLECTION_TYPE_INACTIVEBILLING = "inactivebilling";


class Ecollection {
  constructor(client) {
    this.client = client;
    this.config = client.getConfig();
    this.httpClient = new HttpClient();

    // intialize client id and prefix
    const prefixClientId = this.config.clientId.split("-")
    this.prefix = prefixClientId[0]
    this.clientId = prefixClientId[1]
  }

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * trxId,
   * billingType,
   * datetimeExpired,
   * customerName,
   * description,
   * trxAmount,
   * customerEmail,
   * customerPhone,
   * virtualAccount
   */

  async createBilling(
    params = {
        trxId,
        billingType,
        datetimeExpired,
        customerName,
        description,
        trxAmount,
        customerEmail,
        customerPhone,
        virtualAccount
    }
  ) {

    const body = {
        prefix: this.prefix,
        client_id: this.clientId,
        data: {
            client_id: this.clientId,
            customer_name: params?.customerName,
            description:params?.description,
            trx_amount: params.trxAmount,
            billing_type: params.billingType,
            customer_email: params?.customerEmail,
            customer_phone: params?.customerPhone,
            datetime_expired: params?.datetimeExpired,
            trx_id: params.trxId,
            type: ECOLLECTION_TYPE_CREATEBILLING,
            virtual_account:params?.virtualAccount
        }
    };
    const result = await this.sendRequest(body);

    return responseEcollection({ res: result, resObj: 'createBilling' });
  }

  
  /**
   * @return {String} api client base url
   */
  getEcollectionBaseUrl() {
    switch(this.config.env){
      case "dev":
        return DEV_BASE_URL;
      case "prod":
        return PRODUCTION_BASE_URL;
      default:
        return SANDBOX_BASE_URL;
    }
  }
  
  /**
   * 
   * @param body 
   * @returns {Promise<*>}
   */
  async sendRequest(body) {
    const decryptBody = setBody(body, this.config.clientSecret);

    return this.httpClient.requestEcollection({
      method: 'POST',
      url: this.getEcollectionBaseUrl(),
      data: decryptBody
    });
  }
  
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * trxId,
   */
  async inquiryBilling(
    params = {
        trxId,
    }
  ) {

    const body = {
        prefix: this.prefix,
        client_id: this.clientId,
        data: {
            client_id: this.clientId,
            trx_id: params.trxId,
            type: ECOLLECTION_TYPE_INQUIRYBILLING,
        }
    };

    const result = await this.sendRequest(body);

    return responseEcollection({ res: result, resObj: 'inquiryBilling' });
  }

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * trxId,
   * virtualAccount
   */
  async inactiveBilling(
    params = {
        trxId,
        type,
        virtualAccount,
    }
  ) {

    const body = {
        prefix: this.prefix,
        client_id: this.clientId,
        data: {
            client_id: this.clientId,
            trx_id: params.trxId,
            type: ECOLLECTION_TYPE_INACTIVEBILLING,
            virtual_account: params.virtualAccount,
        }
    };

    const result = await this.sendRequest(body);

    return responseEcollection({ res: result, resObj: 'inactiveBilling' });
  }

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * trxId,
   * datetimeExpired
   * trxAmount
   * customerName
   * customerEmail
   * customerPhone
   * description
   * virtualAccount
   */
  async updateBilling(
    params = {
        trxId,
        datetimeExpired,
        trxAmount,
        customerName,
        customerEmail,
        customerPhone,
        description,
        virtualAccount,
    }
  ) {

    const body = {
        prefix: this.prefix,
        client_id: this.clientId,
        data: {
            client_id: this.clientId,
            trx_id: params.trxId,
            type: ECOLLECTION_TYPE_UPDATEBILLING,
            datetime_expired: params.datetimeExpired,
            trx_amount: params.trxAmount,
            customer_name: params.customerName,
            customer_email: params.customerEmail,
            customer_phone: params.customerPhone,
            description: params.description,
            virtual_account: params.virtualAccount,
        }
    };

    const result = await this.sendRequest(body);

    return responseEcollection({ res: result, resObj: 'updateBilling' });
  }
}

export default Ecollection;
