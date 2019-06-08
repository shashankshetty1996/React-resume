import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.scss';

const SectionTitle = props => {
  const { title, fromSideBar } = props;
  let classNames = 'section-title py-1';
  if (fromSideBar) {
    classNames = classNames + ' side-bar-title px-1';
  }
  return <h1 className={classNames}>{title}</h1>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  fromSideBar: PropTypes.bool
};

SectionTitle.defaultProps = {
  fromSideBar: false
};

export default SectionTitle;
