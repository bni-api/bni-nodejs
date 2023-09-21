export default Ecollection;
declare class Ecollection {
    constructor(client: any);
    client: any;
    config: any;
    httpClient: HttpClient;
    prefix: any;
    clientId: any;
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
    createBilling(params?: {
        trxId: any;
        billingType: any;
        datetimeExpired: any;
        customerName: any;
        description: any;
        trxAmount: any;
        customerEmail: any;
        customerPhone: any;
        virtualAccount: any;
    }): Promise<any>;
    /**
     * @return {String} api client base url
     */
    getEcollectionBaseUrl(): string;
    /**
     *
     * @param body
     * @returns {Promise<*>}
     */
    sendRequest(body: any): Promise<any>;
    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * trxId,
     */
    inquiryBilling(params?: {
        trxId: any;
    }): Promise<any>;
    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * trxId,
     * virtualAccount
     */
    inactiveBilling(params?: {
        trxId: any;
        type: any;
        virtualAccount: any;
    }): Promise<any>;
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
    updateBilling(params?: {
        trxId: any;
        datetimeExpired: any;
        trxAmount: any;
        customerName: any;
        customerEmail: any;
        customerPhone: any;
        description: any;
        virtualAccount: any;
    }): Promise<any>;
}
import HttpClient from "../net/httpClient.js";
