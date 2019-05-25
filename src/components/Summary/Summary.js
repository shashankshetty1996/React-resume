import React from 'react';
import CONSTANTS from '../../constants';

import './Summary.scss';

const Header = () => {
  const { TITLE, WORK, PLAN, FOLLOW_UP } = CONSTANTS.HEADER;
  return (
    <header className="summary">
      <p>
        {TITLE} {WORK} {PLAN} {FOLLOW_UP}{' '}
      </p>
    </header>
  );
};

export default Header;
