import RandString from '@/helpers/random';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { redisClient } from '@/db/redis';
import hash from '@/helpers/hash';

const clientId = encodeURIComponent(process.env.OAUTH_CLIENT_ID);
const apiUri = process.env.OAUTH_API_URL;
const callbackUri = encodeURIComponent(process.env.OAUTH_CALLBACK_URL);

export default function Login() {
  return <p>Redirecting...</p>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const state = RandString(8);

  const codeVerifier = RandString(80);
  const codeChallenge = hash(codeVerifier);

  await redisClient.set(`scraper_web_state_${state}`, '1');
  await redisClient.set(`scraper_web_code_verifier_${state}`, codeVerifier);
  await redisClient.expire(`scraper_web_state_${state}`, 60);
  await redisClient.expire(`scraper_web_code_verifier_${state}`, 60);

  const redirectUri =
    apiUri +
    'v1/login?client_id=' +
    clientId +
    '&redirect_uri=' +
    callbackUri +
    '&state=' +
    state +
    '&code_challenge=' +
    codeChallenge +
    '&code_challenge_method=' +
    'sha256';

  console.log(codeChallenge);

  return {
    redirect: {
      permanent: true,
      destination: redirectUri
    }
  };
}
