import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from '@/helpers/cookies';
import { cookieOptions } from '@/helpers/cookies';

type Data = {
  err: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    state: string;
    code: string;
  };
}

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  const { oauthstate: cookiestate } = req.cookies;

  if (cookiestate !== req.query.state) {
    res.status(400).json({ err: 'Bad request.' });
    return;
  }

  setCookie(res, 'oauthstate', '0', { ...cookieOptions, path: '/', maxAge: 1 });

  res.status(200).json({ err: 'ok' });
}
