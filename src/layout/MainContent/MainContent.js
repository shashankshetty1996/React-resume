import React from 'react';

const MainContent = props => {
  return <main className={props.className}>{props.children}</main>;
};

export default MainContent;
