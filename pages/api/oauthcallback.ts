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
    code_verifier: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  const { code } = req.query;

  const stateKey = `scraper_web_state_${req.query.state}`;
  const verifierKey = `scraper_web_code_verifier_${req.query.state}`;

  const localState = await redisClient.get(stateKey);
  const codeVerifier = await redisClient.get(verifierKey);
  console.log(localState);

  if (!localState) {
    res.status(400).json({ err: 'Bad request.' });
    return;
  }

  await redisClient.del(`scraper_web_state_${req.query.state}`);
  await redisClient.del(`scraper_web_code_verifier_${req.query.state}`);

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
    redirect_uri: process.env.OAUTH_CALLBACK_URL,
    code_verifier: codeVerifier
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
