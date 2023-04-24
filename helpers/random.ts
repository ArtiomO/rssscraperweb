import { randomBytes, createCipheriv } from 'crypto';

export default function randString(length: number): string {
  const result = randomBytes(length).toString('base64');
  return result;
}
