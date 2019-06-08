import React from 'react';

import CONSTANTS from '../../constants';

import './Header.scss';

const Header = () => {
  const { NAME, ROLE } = CONSTANTS.PERSONAL.HEADER;
  return (
    <div className="header p-1">
      <h1 className="name">{NAME}</h1>
      <h4 className="role py-1">{ROLE}</h4>
    </div>
  );
};

export default Header;
