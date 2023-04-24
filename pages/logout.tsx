import cookie from 'cookie';
import { GetServerSidePropsContext } from 'next';
import { redisClient } from '@/db/redis';

export default function Logout() {
  return <p>Logging out...</p>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = context.res;
  const req = context.req;

  const { session: encryptedSessionId } = req.cookies;
  await redisClient.del(`scraper_web_session_${encryptedSessionId}`);

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: -1,
      path: '/'
    })
  );

  return {
    redirect: {
      permanent: true,
      destination: '/login'
    }
  };
}
