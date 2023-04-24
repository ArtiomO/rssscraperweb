import { randomBytes, createCipheriv } from 'crypto';
import type { NextApiResponse } from 'next';
import { redisClient } from '@/db/redis';
import cookie from 'cookie';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export default async function setCookieHeader(
  res: NextApiResponse,
  token: string
) {
  const sessionId = randomBytes(32).toString('base64');
  const iv = randomBytes(16);
  const cipher = createCipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    iv
  );

  const SessionValue = {
    token: token,
    sessionId: sessionId,
    iv: iv.toString('hex')
  };

  let encryptedSessionId = cipher.update(sessionId, 'base64', 'base64');
  encryptedSessionId += cipher.final('base64');

  await redisClient.set(
    `scraper_web_session_${encryptedSessionId}`,
    JSON.stringify(SessionValue)
  );

  await redisClient.expire(
    `scraper_web_session_${encryptedSessionId}`,
    SESSION_MAX_AGE
  );

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('session', encryptedSessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: SESSION_MAX_AGE,
      path: '/'
    })
  );
}
