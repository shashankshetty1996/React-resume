import React from 'react';

import './SideBar.scss';

const SideBar = props => (
  <aside className={props.className}>{props.children}</aside>
);

export default SideBar;
