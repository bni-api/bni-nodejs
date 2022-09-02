module.exports = {
  responseOGPGetBalance: (params = { res }) => {
    if (params.res.getBalanceResponse.parameters.responseCode != '0001') {
      throw new Error(
        `${params.res.getBalanceResponse.parameters.responseCode} : ${params.res.getBalanceResponse.parameters.responseMessage}`
      );
    }
    return params.res;
  }
};