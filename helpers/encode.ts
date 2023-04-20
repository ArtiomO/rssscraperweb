import { escape } from 'querystring';

export default function encodeClientCredentials(
  clientId: string,
  clientSecret: string
) {
  return Buffer.from(escape(clientId) + ':' + escape(clientSecret)).toString(
    'base64'
  );
}
