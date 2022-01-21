import React from 'react';
import AdminHeader from './AdminHeader.js';
import PublicHeader from './PublicHeader.js';

const Header = () => {
  const url = window.location.href;
  const segments = url.split('/');
  const len = segments.length;

  let admin = false;
  if (segments[len - 1] === 'admin' || segments[len - 2] === 'admin') {
    admin = true;
  }

  if (admin) {
    return <AdminHeader />;
  }

  return <PublicHeader />;
};

export default Header;
