import { serialize } from 'cookie';
import { CookieSerializeOptions } from 'cookie';

export const cookieOptions: CookieSerializeOptions = {
  httpOnly: true,
  maxAge: 3600,
  path: '/',
  sameSite: 'strict',
  secure: process.env.NODE_ENV === 'production'
};

export function setCookie(
  res: any,
  name: string,
  value: string,
  options: Record<string, unknown> = {}
): void {
  const stringValue =
    typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value);
  res.setHeader('Set-Cookie', serialize(name, stringValue, options));
}
