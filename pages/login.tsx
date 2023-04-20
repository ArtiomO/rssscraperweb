import RandString from '@/helpers/random';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { redisClient } from '@/db/redis';

interface Props {
  state: string;
  apiUri: string;
  clientId: string;
  callbackUri: string;
}

const clientId = encodeURIComponent(process.env.OAUTH_CLIENT_ID);
const apiUri = process.env.OAUTH_API_URL;
const callbackUri = encodeURIComponent(
  process.env.OAUTH_CALLBACK_URL
);

export default function Login({ state, apiUri, clientId, callbackUri }: Props) {
  const router = useRouter();

  const redirectUri =
    apiUri +
    'v1/login?client_id=' +
    clientId +
    '&redirect_uri=' +
    callbackUri +
    '&state=' +
    state;

  useEffect(() => {
    {
      router.push(redirectUri);
    }
  });

  return <p>Redirecting...</p>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const state = RandString(8);
  await redisClient.set(`scraper_web_state_${state}`, '');
  await redisClient.expire(`scraper_web_state_${state}`, 5);
  return { props: { state, apiUri, clientId, callbackUri } };
}
