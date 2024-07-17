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

const TIME_DIFF_LIMIT = () => { return 300; }

const tsDiff = (ts) => { return Math.abs(ts - Math.round(+new Date() / 1e3)) <= TIME_DIFF_LIMIT(); }

const strPad = (str, length, pad_char, pad_left) => {
	while (str.length < length) {
		str = pad_left ? pad_char + str : str + pad_char;
	}
	return str;
}

const dec = (str, sck) => {
	let res = '';
	let strls = str.length;
	let strlk = sck.length;
	for (let i = 0; i < strls; i++) {
		let chr = str.substr(i, 1);
		let keychar = sck.substr((i % strlk) - 1, 1);
		chr = String.fromCharCode(((chr.charCodeAt() - keychar.charCodeAt()) + 256) % 128);
		res += chr;
	}
	return res;
}

const enc = (str, sck) => {
	let res = '';
	let strls = str.length;
	let strlk = sck.length;
	for (let i = 0; i < strls; i++) {
		let chr = str.substr(i, 1);
		let keychar = sck.substr((i % strlk) - 1, 1);
		chr = String.fromCharCode((chr.charCodeAt() + keychar.charCodeAt()) % 128);
		res += chr;
	}
	return res;
}

const doubleDecrypt = (str, cid, sck) => {
	let res = Buffer.from(strPad(str, Math.ceil(str.length / 4) * 4, '=', 0).replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
	res = dec(res, cid);
	res = dec(res, sck);
	return res;
}

const doubleEncrypt = (str, cid, sck) => {
	let res = '';
	res = enc(str, cid);
	res = enc(res, sck);
	return Buffer.from(res, 'utf8').toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

const decrypt = (hashedString, cid, sck) => {
	let parsed_string = doubleDecrypt(hashedString, cid, sck);
	let dot_pos = parsed_string.indexOf('.');
	if (dot_pos < 1)
		return null;
	let ts = parsed_string.substr(0, dot_pos);
	let data = parsed_string.substr(dot_pos + 1);
	if (tsDiff(ts.split('').reverse().join('')) === true) {
		return JSON.parse(data);
	}
	return null;
}

const encrypt = (jsonData, cid, sck) => {
	return doubleEncrypt(('' + Math.round(+new Date() / 1e3)).split('').reverse().join('') + '.' + JSON.stringify(jsonData), cid, sck);
}

export const setBody = (body, secretKey) => {
  const encryptData = encrypt(body.data, body.client_id, secretKey);
  body.data = encryptData;
  return JSON.stringify(body)
}

export const generateBniDirectKey = ({ corpId, userId, bniDirectKey }) => {
  const data = corpId + userId + bniDirectKey;
  const sha256string = createHash('sha256').update(data).digest('hex');
  return sha256string.toLowerCase();
};
