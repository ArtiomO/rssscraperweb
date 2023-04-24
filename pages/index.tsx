import { GetServerSidePropsContext } from 'next';
import { sessionFromRequest } from '@/session/get_session';

export default function Index() {
  return <p>Redirecting...</p>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await sessionFromRequest(context.req);
  let redirectURI: string;

  if (!session) {
    redirectURI = '/login';
  } else {
    redirectURI = '/account';
  }

  return {
    redirect: {
      permanent: true,
      destination: redirectURI
    }
  };
}
