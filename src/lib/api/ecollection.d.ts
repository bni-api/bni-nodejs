import HttpClient from "lib/net/httpClient";
export default Ecollection;
declare class Ecollection {
  constructor(client: any);
  client: any;
  config: any;
  httpClient: HttpClient;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */

  inquiryAccountInfo(params?: {
    type: string;
    client_id: string;
    trx_id: string;
    trx_amount: string;
    billing_type: string;
    customer_nam: string;
    customer_email: string;
    customer_phone: string;
    virtual_account: string;
    datetime_expired: string;
    description: string;
  }): Promise<any>;
}
import HttpClient from "../net/httpClient.js";
import { Ecollection } from "index.js";
