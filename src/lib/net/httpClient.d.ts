export default HttpClient;
declare class HttpClient {
  httpClient: import("axios").AxiosInstance;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * url, username, password
   *
   * @return {Object} promse with resolve or reject
   *
   */
  tokenRequest(options?: Object): Object;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * url, username, password
   *
   * @return {Object} promse with resolve or reject
   *
   */
  tokenRequestSnapBI(options?: Object): Object;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * method, apiKey, accessToken, url, data
   *
   * @return {Object} promse with resolve or reject
   *
   */
  request(options?: Object): Object;
  requestV2(options?: Object): Object;
  requestSnapBI(options?: {
    method: any;
    apiKey: any;
    accessToken: any;
    url: any;
    data: any;
    additionalHeader: {};
  }): Promise<any>;
}
