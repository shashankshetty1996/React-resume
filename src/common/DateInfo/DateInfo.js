import React from 'react';
import PropTypes from 'prop-types';

import './DateInfo.scss';

const DateInfo = props => {
  const { fromDate, toDate, title, subTitle, infos } = props;
  return (
    <article className="date-info row py-1">
      <div className="col s3 date-section">
        <span className="from-date">{fromDate}</span>
        <span> - </span>
        <span className="to-date">{toDate}</span>
      </div>
      <div className="col s9">
        <h1 className="title">{title}</h1>
        {subTitle !== '' && <h4 className="sub-title">{subTitle}</h4>}
        <ul className="info-list">
          {infos.map((info, index) => (
            <li className="info-list-item" key={index}>
              {info}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

DateInfo.defaultProps = {
  subTitle: '',
  infos: []
};

DateInfo.propTypes = {
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  infos: PropTypes.array
};

export default DateInfo;
