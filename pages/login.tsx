import RandString from '@/helpers/random';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
  state?: string;
}

const states = new Set();

const clientId = encodeURIComponent('test-client-id');
const apiUri = process.env.NEXT_PUBLIC_OAUTH_API_URL;
console.log(process.env.NEXT_PUBLIC_OAUTH_CALLBACK_URL);
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
  states.add(state);

  return { props: { state } };
}
