export function generateSignature(params?: { body: any; apiSecret: any }): any;
export function generateClientId(appName: any): string;
export function getTimeStamp(): string;
export function generateTokenSignature(params?: {
  privateKeyPath: any;
  clientId: any;
  timeStamp: any;
}): any;
export function generateSignatureServiceSnapBI(params?: {
  body: any;
  method: any;
  url: any;
  accessToken: any;
  timeStamp: any;
  apiSecret: any;
}): any;
export function randomNumber(): string;
export function generateUUID(): string;
export function generateBniDirectKey(): string;
