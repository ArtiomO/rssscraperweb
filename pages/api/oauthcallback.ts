import type { NextApiRequest, NextApiResponse } from 'next';
import encodeClientCredentials from '@/helpers/encode';
import { postData } from '@/clients/base';
import { redisClient } from '@/db/redis';

type Data = {
  err: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    state: string;
    code: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  const { code } = req.query;

  const localState = redisClient.get(`scraper_web_state_${req.query.state}`);

  if (!localState) {
    res.status(400).json({ err: 'Bad request.' });
    return;
  }

  redisClient.del(`scraper_web_state_${req.query.state}`);

  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Basic ' +
      encodeClientCredentials(
        process.env.OAUTH_CLIENT_ID,
        process.env.OAUTH_CLIENT_SECRET
      )
  };

  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: process.env.OAUTH_CALLBACK_URL
  };

  console.log(data);

  const response = await postData(
    process.env.OAUTH_API_URL + 'v1/token',
    data,
    headers
  ).then((data) => {
    console.log(data);
  });

  res.status(200).json({ err: 'ok' });
}
