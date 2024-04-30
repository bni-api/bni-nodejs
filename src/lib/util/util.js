import { timeStamp } from 'console';
import { createHmac, sign, createHash } from 'crypto';
import { readFileSync } from 'fs';

const escape = (string) => {
  return string.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

const changeTimezone = (date, timeZone) => {
  const invdate = new Date(
    date.toLocaleString('en-US', {
      timeZone: timeZone
    })
  );

  const diff = date.getTime() - invdate.getTime();
  return new Date(date.getTime() - diff); // needs to substract
};

export const generateSignature = (params = { body, apiSecret }) => {
  // generate JWT header
  const header = escape(
    Buffer.from('{"alg":"HS256","typ":"JWT"}').toString('base64')
  );

  // generate JWT payload
  const payload = escape(
    Buffer.from(JSON.stringify(params.body)).toString('base64')
  );

  // generate JWT signature
  const jwtSignature = createHmac('SHA256', params.apiSecret)
    .update(`${header}.${payload}`)
    .digest('base64');

  // return generated JWT token
  return escape(`${header}.${payload}.${jwtSignature}`);
};
export const generateClientId = (appName) => {
  return `IDBNI${Buffer.from(appName).toString('base64')}`;
};
export const getTimeStamp = () => {
  const date = changeTimezone(new Date(), 'Asia/Jakarta');
  const map = {
    mm: ('0' + (date.getMonth() + 1)).slice(-2),
    dd: ('0' + date.getDate()).slice(-2),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
    hh: ('0' + date.getHours()).slice(-2),
    ii: ('0' + date.getMinutes()).slice(-2),
    ss: ('0' + date.getSeconds()).slice(-2),
    timezone: '+07:00'
  };

  return `${map.yyyy}-${map.mm}-${map.dd}T${map.hh}:${map.ii}:${map.ss}${map.timezone}`;
};
export const getTimeStampBniMove = () => {
  const date = changeTimezone(new Date(), 'Asia/Jakarta');
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
  const timezoneOffset = -date.getTimezoneOffset();
  const timezoneOffsetHours = Math.floor(timezoneOffset / 60);
  const timezoneOffsetMinutes = timezoneOffset % 60;

  const formattedTimestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneOffset >= 0 ? '+' : '-'}${String(Math.abs(timezoneOffsetHours)).padStart(2, '0')}:${String(Math.abs(timezoneOffsetMinutes)).padStart(2, '0')}`;
  
  return formattedTimestamp;
};
export const generateTokenSignature = (
  params = { privateKeyPath, clientId, timeStamp }
) => {
  const privateKey = readFileSync(params.privateKeyPath);
  const data = Buffer.from(params.clientId + '|' + params.timeStamp);
  const signature = sign('RSA-SHA256', data, privateKey).toString('base64');
  return signature;
};
export const generateSignatureServiceSnapBI = (
  params = { body, method, url, accessToken, timeStamp, apiSecret }
) => {
  const minify = JSON.stringify(params.body);
  const sha = createHash('sha256').update(minify).digest('');
  const bufferText = Buffer.from(sha, 'utf8');
  const hex = bufferText.toString('hex');
  const lower = hex.toLowerCase();

  const stringToSign = `${params.method}:${params.url}:${params.accessToken}:${lower}:${params.timeStamp}`;

  const hmac = createHmac('sha512', params.apiSecret);
  const data = hmac.update(stringToSign);
  const gen_hmac = data.digest('base64');
  return gen_hmac;
};
export const randomNumber = () => {
  const randomNumber = Math.floor(100000000 + Math.random() * 900000);
  const unixTimeStamp = Math.floor(Date.now() / 1000);
  return `${randomNumber}${unixTimeStamp}`;
};
export const generateUUID = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let uuid = '';
  for (let i = 0; i < 16; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    uuid += chars[randIndex];
  }
  return uuid;
};
export const generateOtrUUID = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  const sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, index) => {
    if (index !== 0) uuid += '-';
    for (let i = 0; i < section; i++) {
      const randIndex = Math.floor(Math.random() * chars.length);
      uuid += chars[randIndex];
    }
  });

  return uuid;
};
