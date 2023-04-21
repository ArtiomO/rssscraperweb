import { escape } from 'querystring';

interface Form {
  grant_type: string;
  code: string;
  redirect_uri: string;
  [code_verifier: string]: string;
}

export default function encodeClientCredentials(
  clientId: string,
  clientSecret: string
) {
  return Buffer.from(escape(clientId) + ':' + escape(clientSecret)).toString(
    'base64'
  );
}

export function encodeForm(data: Form) {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}
