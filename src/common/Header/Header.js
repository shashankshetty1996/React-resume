import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = props => {
  const { title } = props;
  return <h1 className="header py-1">{title}</h1>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
