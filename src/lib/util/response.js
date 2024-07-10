export const responseOGP = (params = { res, resObj }) => {
  if (params.res[params.resObj].parameters.responseCode != '0001') {
    throw new Error(
      `${params.res[params.resObj].parameters.responseCode} : ${
        params.res[params.objApi].parameters.responseMessage
      }`
    );
  }

  return params.res;
};
export const responseSnapBI = (params = { res }) => {
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
      `${params.res.responseCode} - ${params.res.responseMessage}`
    );
  }
  return params.res;
};

export const responseRDL = (params = { res }) => {
  const haveResponseCode = params.res.response && params.res.response.responseCode;
  if (params.res.response.responseCode && haveResponseCode !== '0001') {
    throw new Error(
      `${params.res.response.responseCode} =====> ${params.res.response.responseMessage}, ${params.res.response.errorMessage}`
    );
  }
  return params.res;
};
export const responseRDF = (params = { res }) => {
  const haveResponseCode = params.res.response && params.res.response.responseCode;
  if (params.res.response.responseCode && haveResponseCode !== '0001') {
    throw new Error(
      `${params.res.response.responseCode} =====> ${params.res.response.responseMessage}, ${params.res.response.errorMessage}`
    );
  }
  return params.res;
};
export const responseRDN = (params = { res }) => {
  const haveResponseCode = params.res.response && params.res.response.responseCode;
  if (params.res.response.responseCode && haveResponseCode !== '0001') {
    throw new Error(
      `${params.res.response.responseCode} =====> ${params.res.response.responseMessage}, ${params.res.response.errorMessage}`
    );
  }
  return params.res;
};
export const responseBniMove = (params = { res }) => {
  const haveResponseCode = params.res && params.res.statusCode;
  if (haveResponseCode !== 0) {
    throw new Error(
      `${params.res.statusCode} =====> ${params.res.statusDescription}`
    );
  }
  return params.res;
};
