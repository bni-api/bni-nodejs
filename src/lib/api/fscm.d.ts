export default FSCM;
declare class FSCM {
  constructor(client: any);
  client: any;
  config: any;
  timeStamp: any;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * accountNo
   */
  sendInvoice(params?: {
    rq_uuid: string;
    password: string;
    doc_no: string;
    member_code: string;
    due_date: string;
    amount: string;
    currency: string;
    issue_date: string;
    rq_datetime: string;
    term_of_payment: string;
    comm_code: string;
  });

  inquiry(params?: {
    rq_uuid: string;
    comm_code: string;
    password: string;
    doc_no: string;
    rq_datetime: string;
    member_code: string;
  });

  checkTransactionPlafond(params?: {
    rq_uuid: string;
    comm_code: string;
    credit_type: string;
    currency: string;
    rq_datetime: string;
    member_code: string;
    amount: string;
  });

  checkLimit(params?: {
    rq_uuid: string;
    rq_datetime: string;
    password: string;
    member_code: string;
    comm_code: string;
    currency: string;
  });

  checkStopSupply(params?: {
    rq_uuid: string;
    password: string;
    member_code: string;
    rq_datetime: string;
    comm_code: string;
    currency: string;
    ccy: string;
    status_member: string;
  });

  deleteInvoice(params?: {
    rq_uuid: string;
    password: string;
    doc_no: string;
    member_code: string;
    rq_datetime: string;
    comm_code: string;
  });

  praNota(params?: {
    rq_uuid: string;
    password: string;
    doc_no: string,
    member_code: string;
    amount: string;
    currency: string;
    issue_date: string;
    rq_datetime: string;
    term_of_payment : string;
    comm_code: string

  });

  deletePraNota(params?: {
    rq_uuid : string;
    rq_datetime : string;
    password : string;
    member_code : string;
    comm_code : string;
    doc_no: string;
    issue_date : string;
  });
}
