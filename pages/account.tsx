import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { sessionFromRequest } from '@/session/get_session';
import type { ReactElement } from 'react';
import Layout from '@/components/layout';
import UserData from '@/components/user_data';

type Props = {
  isLoggedIn: boolean;
  token: string;
  sessionId: string;
};

const Account = ({ isLoggedIn, token, sessionId }: Props) => {
  if (isLoggedIn) {
    return <UserData token={token} sessionId={sessionId}></UserData>;
  }
};

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
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    };
  }
}

Account.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Account;
