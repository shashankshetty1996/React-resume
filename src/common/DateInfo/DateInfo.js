import React from "react";
import PropTypes from "prop-types";

import { Decorator } from "../../common";

import "./DateInfo.scss";

const RenderLi = ({ info }) => {
  if (Array.isArray(info)) {
    return (
      <ul className="info-list">
        {info.map((text, index) => (
          <li className="info-list-item" key={index}>
            <Decorator text={text} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <li className="info-list-item">
      <Decorator text={info} />
    </li>
  );
};

RenderLi.propTypes = {
  info: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

const DateInfo = (props) => {
  const { fromDate, toDate, title, subTitle, infos } = props;
  return (
    <article className="date-info row py-1">
      <div className="date-section">
        <span className="from-date">{fromDate}</span>
        <span> - </span>
        <span className="to-date">{toDate}</span>
      </div>
      <div className="info-section">
        <h1 className="title">{title}</h1>
        {subTitle !== "" && <h4 className="sub-title">{subTitle}</h4>}
        <ul className="info-list">
          {infos.map((info, index) => (
            <RenderLi info={info} />
          ))}
        </ul>
      </div>
    </article>
  );
};

DateInfo.defaultProps = {
  subTitle: "",
  infos: [],
};

DateInfo.propTypes = {
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  infos: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  ),
};

export default DateInfo;
