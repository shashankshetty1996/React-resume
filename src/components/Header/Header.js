import React from 'react';

import CONSTANTS from '../../constants';

import './Header.scss';

const Header = () => {
  const { NAME, ROLE } = CONSTANTS.PERSONAL.HEADER;
  return (
    <div className="header m-1">
      <h1 className="name">{NAME}</h1>
      <h4 className="role">{ROLE}</h4>
    </div>
  );
};

export default Header;
