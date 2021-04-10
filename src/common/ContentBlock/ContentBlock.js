import React from "react";
import PropTypes from "prop-types";

import "./ContentBlock.scss";

const getContent = (value, type) => {
  if (type === "number") {
    return <a href={`tel:+${value}`}>{value}</a>;
  }
  if (type === "email") {
    return <a href={`mailto:${value}`}>{value}</a>;
  }
  if (type === "link") {
    return (
      <a href={value} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    );
  }
  if (type === "list") {
    return (
      <ul>
        {value.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{value}</p>;
};

const ContentBlock = (props) => {
  const { label, type, value } = props.data;

  let content = getContent(value, type);
  const showLabel = label !== undefined && label !== "";

  return (
    <div className="content-block p-1">
      {showLabel && <h6 className="content-label">{label}:</h6>}
      <div className="content-value">{content}</div>
    </div>
  );
};

ContentBlock.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContentBlock;
