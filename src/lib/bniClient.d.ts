export default BNIClient;
declare class BNIClient {
    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * prod, clientId, clientSecret, apiKey
     */
    constructor(options?: Object);
    config: Object;
    httpClient: HttpClient;
    /**
     * Return config stored
     * @return {Object} object contains prod, clientId, clientSecret
     */
    getConfig(): Object;
    /**
     * @return {String} api base url
     */
    getBaseUrl(): string;
    getToken(): Promise<any>;
}
import HttpClient from "./net/httpClient.js";
