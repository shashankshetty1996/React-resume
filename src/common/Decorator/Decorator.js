import React from "react";
import PropTypes from "prop-types";

import "./Decorator.scss";

const Decorator = (props) => {
  const data = props.text
    .replace("__STRONG__", "<strong>")
    .replace("__STRONG_END__", "</strong>");
  return (
    <span
      className="decorator-wrapper"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};

Decorator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Decorator;
