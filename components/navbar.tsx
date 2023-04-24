import Link from 'next/link';
import React from 'react';

const styles = {
  nav: ['flex', 'bg-white', 'border-gray-200', 'bg-gray-50'].join(' '),
  div: [
    'max-w-screen-xl',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
    'mx-auto'
  ].join(' '),
  ul: [
    'font-medium',
    'flex',
    'flex-col',
    'p-4',
    'md:p-0',
    'mt-4',
    'border',
    'border-gray-100',
    'rounded-lg',
    'bg-gray-50',
    'md:flex-row',
    'md:space-x-8',
    'md:mt-0',
    'md:border-0',
    'md:bg-white'
  ].join(' '),
  link: [
    'block',
    'py-2',
    'pl-3',
    'pr-4',
    'text-gray-900',
    'rounded',
    'hover:bg-gray-100',
    'md:hover:bg-transparent',
    'md:border-0',
    'md:hover:text-blue-700',
    'md:p-0'
  ].join(' ')
};

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.div} id="navbar-default">
        <ul className={styles.ul}>
          <li>
            <Link href="/" className={styles.link}>
              {' '}
              Home{' '}
            </Link>
          </li>
          <li>
            <Link href="/account" className={styles.link}>
              {' '}
              Account{' '}
            </Link>
          </li>
          <li>
            <Link href="/logout" className={styles.link}>
              {' '}
              Logout{' '}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
