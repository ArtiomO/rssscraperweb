import { randomBytes } from 'crypto';

export default function randString(length: number): string {
  const result = randomBytes(length).toString('hex');
  return result;
}
