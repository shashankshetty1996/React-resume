import React from 'react';

import './MainContent.scss';

const MainContent = props => {
  return <main className={props.className}>{props.children}</main>;
};

export default MainContent;
