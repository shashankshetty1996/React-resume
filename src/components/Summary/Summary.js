import React from 'react';
import CONSTANTS from '../../constants';

const Header = () => {
  const { TITLE, WORK, PLAN, FOLLOW_UP } = CONSTANTS.HEADER;
  return (
    <header>
      <p>
        {TITLE} {WORK} {PLAN} {FOLLOW_UP}{' '}
      </p>
    </header>
  );
};

export default Header;
