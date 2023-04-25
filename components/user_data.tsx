import React from 'react';

const styles = {
  section: ['m-4', 'bg-green-200/25', 'rounded-lg', 'shadow'].join(' '),
  ul: ['p-4', 'flex', 'flex-col', 'space-y-4'].join(' '),
  li: [
    'font-small',
    'p-4',
    'border',
    'border-gray-100',
    'rounded-lg',
    'shadow',
    'text-xs',
    'break-all',
    'bg-white'
  ].join(' '),
  h3: [
    'mb-2',
    'text-xl',
    'tracking-tight',
    'text-gray-900',
    'dark:text-white'
  ].join(' ')
};

interface Props {
  token: string;
  sessionId: string;
}

const UserData: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <section className={styles.section} id="user-data-default">
      <ul className={styles.ul}>
        <h3 className={styles.h3}>Token</h3>
        <li className={styles.li}>{props.token}</li>
        <h3 className={styles.h3}>Session ID</h3>
        <li className={styles.li}>{props.sessionId}</li>
      </ul>
    </section>
  );
};

export default UserData;
