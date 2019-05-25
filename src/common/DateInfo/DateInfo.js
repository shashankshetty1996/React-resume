import React from 'react';

const DateInfo = () => {
  return (
    <article className="date-info row py-2">
      <div className="col s2">
        <span className="from-date">fromDate</span>
        <span> - </span>
        <span className="to-date">toDate</span>
      </div>
      <div className="col s10">
        <h1 className="title">Title</h1>
        <h4 className="sub-title">Sub title</h4>
        <ul className="info-list">
          <li className="info-list-item">item 1</li>
          <li className="info-list-item">item 2</li>
          <li className="info-list-item">item 3</li>
        </ul>
      </div>
    </article>
  );
};

export default DateInfo;
