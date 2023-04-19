import Link from 'next/link';
import React from 'react';

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/login"> Login </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
