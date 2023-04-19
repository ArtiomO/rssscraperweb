import Link from 'next/link';
import React from 'react';

const Navbar: React.FunctionComponent = () => {
  const clientId = encodeURIComponent('test-client-id');
  const apiUri = process.env.REACT_APP_OAUTH_API_URL;
  const callbackUri = encodeURIComponent(
    process.env.REACT_APP_OAUTH_CALLBACK_URL
  );

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <a
            href={
              apiUri +
              'v1/login?client_id=' +
              clientId +
              '&redirect_uri=' +
              callbackUri
            }
          >
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
