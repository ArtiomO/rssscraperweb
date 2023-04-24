import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { sessionFromRequest } from '@/session/get_session';

type Props = {
  isLoggedIn: boolean;
  token?: string;
  sessionId?: string;
};

export default function Account({ isLoggedIn, token, sessionId }: Props) {
  if (isLoggedIn) {
    return (
      <p>
        Ok that's you. Token: {token} SessionId: {sessionId}
      </p>
    );
  }
  return <p>Oh no !!. Unauthorized. </p>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await sessionFromRequest(context.req);

  if (session) {
    return {
      props: {
        isLoggedIn: true,
        token: session.token,
        sessionId: session.sessionId
      }
    };
  } else {
    return { props: { isLoggedIn: false } };
  }
}
