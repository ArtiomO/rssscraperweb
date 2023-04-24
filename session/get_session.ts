import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { IncomingMessage } from 'http';
import { redisClient } from '@/db/redis';
import { createDecipheriv } from 'crypto';

type SessionValue = {
  token: string;
  sessionId: string;
  iv: string;
};

export async function sessionFromRequest(
  req: IncomingMessage & { cookies: NextApiRequestCookies }
): Promise<SessionValue | undefined> {
  const { session: encryptedSessionId } = req.cookies;

  if (!encryptedSessionId) return undefined;

  const session = await redisClient.get(
    `scraper_web_session_${encryptedSessionId}`
  );

  if (!session) return undefined;

  const sessionParsed: SessionValue = JSON.parse(session);
  const iv = Buffer.from(sessionParsed.iv, 'hex');

  const decipher = createDecipheriv(
    'aes-256-cbc',
    Buffer.from(process.env.ENCRYPTION_KEY, 'hex'),
    iv
  );

  let decipheredSession = decipher.update(encryptedSessionId, 'base64', 'base64');
  decipheredSession += decipher.final('base64');

  if (sessionParsed.sessionId != decipheredSession) return undefined;
  else return sessionParsed;
}
