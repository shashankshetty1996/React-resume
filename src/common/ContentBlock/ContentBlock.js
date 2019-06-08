import React from 'react';
import PropTypes from 'prop-types';

import './ContentBlock.scss';

const getContent = (value, type) => {
  if (type === 'number') {
    return <a href={`tel:+${value}`}>{value}</a>;
  }
  if (type === 'email') {
    return <a href={`mailto:${value}`}>{value}</a>;
  }
  if (type === 'link') {
    return (
      <a href={value} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    );
  }
  return <p>{value}</p>;
};

const ContentBlock = props => {
  const { label, type, value } = props.data;

  let content = getContent(value, type);

  return (
    <div className="content-block py-1">
      <h6 className="content-label">{label}:</h6>
      <div className="content-value">{content}</div>
    </div>
  );
};

ContentBlock.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContentBlock;
