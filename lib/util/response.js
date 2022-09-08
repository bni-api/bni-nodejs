module.exports = {
  responseSnapBI: (params = { res }) => {
    const statusCodeSuccess = [
      '2000000',
      '2001100',
      '2001400',
      '2001500',
      '2001600',
      '2001700',
      '2001800',
      '2002200',
      '2002300',
      '2003600',
      '2007300'
    ];
    if (!statusCodeSuccess.includes(params.res.responseCode)) {
      throw new Error(
        `${params.res.responseCode} : ${params.res.responseMessage}`
      );
    }
    return params.res;
  }
};
