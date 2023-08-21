

function TIME_DIFF_LIMIT() { return 300; }

function tsDiff(ts) { return Math.abs(ts - Math.round(+new Date() / 1e3)) <= TIME_DIFF_LIMIT(); }

function str_pad(str, length, pad_char, pad_left) {
    while (str.length < length) {
        str = pad_left ? pad_char + str : str + pad_char;
    }
    return str;
}

function dec(str, sck) {
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

function enc(str, sck) {
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

function doubleDecrypt(str, cid, sck) {
    let res = Buffer.from(str_pad(str, Math.ceil(str.length / 4) * 4, '=', 0).replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
    res = dec(res, cid);
    res = dec(res, sck);
    return res;
}

function doubleEncrypt(str, cid, sck) {
    let res = '';
    res = enc(str, cid);
    res = enc(res, sck);
    return Buffer.from(res, 'utf8').toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export const encrypt = (json_data, cid, sck) => {
    return doubleEncrypt(('' + Math.round(+new Date() / 1e3)).split('').reverse().join('') + '.' + JSON.stringify(json_data), cid, sck);
}

export const decrypt = (hashed_string, cid, sck) => {
    let parsed_string = doubleDecrypt(hashed_string, cid, sck);
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
