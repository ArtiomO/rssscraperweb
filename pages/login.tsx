import RandString from '@/helpers/random';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { redisClient } from '@/db/redis';

interface Props {
  state?: string;
}

const clientId = encodeURIComponent(process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID);
const apiUri = process.env.NEXT_PUBLIC_OAUTH_API_URL;
const callbackUri = encodeURIComponent(
  process.env.NEXT_PUBLIC_OAUTH_CALLBACK_URL
);

export default function Login({ state }: Props) {
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
  await redisClient.set(`state_${state}`, "")
  await redisClient.expire(`state_${state}`, 60);
  return { props: { state } };
}
