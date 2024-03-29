import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { sessionFromRequest } from '@/session/get_session';
import type { ReactElement } from 'react';
import Layout from '@/components/layout';
import { getData } from '@/clients/base';
import Image from 'next/image'

const styles = {
  section: ['m-4', 'bg-gray-200/25', 'rounded-lg'].join(' '),

  ol: ['relative', 'border-l', 'border-gray-200'].join(
    ' '
  ),
  li: ['mb-10', 'ml-4'].join(' '),
  time: [
    'mb-1',
    'text-s',
    'leading-none',
    'text-gray-400'
  ].join(' '),
  div: [
    'absolute',
    'w-3',
    'h-3',
    'bg-gray-200',
    'rounded-full',
    'mt-1.5',
    '-left-1.5',
    'border',
    'border-white'
  ].join(' '),
  h2: ['font-semibold', 'text-gray-900'].join(
    ' '
  ),
  p: [
    'mb-4',
    'text-xs',
    'text-gray-500',
    'dark:text-gray-400'
  ].join(' ')
};

type NewsItem = {
  id: number;
  title: string;
  link: string;
  description: string;
  pub_date: string;
};
type Props = {
  news: NewsItem[];
};

<ol className={styles.ol}></ol>;

const News = ({ news }: Props) => {
  var listItems = [];

  for (let i = 0; i < news.length; i++) {
    const date = new Date(news[i].pub_date);
    const linkUrl = new URL(news[i].link)

    listItems.push(
      <li key={news[i].id} className={styles.li}>
        <a href={news[i].link}>
        <time className={styles.time}>{date.toLocaleDateString()}</time>
        <div className={styles.div}></div>
        <h5 className={styles.h2}>{news[i].title}</h5>
        <p className={styles.p}>{news[i].description}</p>
        </a>
      </li>
    );
  }

  return (
    <section className={styles.section}>
      <ol className={styles.ol}>{listItems}</ol>
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await sessionFromRequest(context.req);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + '1'
  };

  const news = await getData(
    `${process.env.SCRAPER_API_URL}v1.0/item/`,
    '',
    headers
  );

  if (session) {
    return {
      props: {
        news
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

News.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default News;
