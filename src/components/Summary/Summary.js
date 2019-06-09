import React from 'react';
import CONSTANTS from '../../constants';

import './Summary.scss';

const Header = () => {
  const { SUMMARY } = CONSTANTS;
  return (
    <header className="summary">
      <ul className="summary-list">
        {SUMMARY.map((data, index) => (
          <li
            key={index}
            className="summary-list-item"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        ))}
      </ul>
    </header>
  );
};

export default Header;
