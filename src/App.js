import React from 'react';
import './App.scss';

// Layout importing
import SideBar from './layout/SideBar/SideBar';
import MainContent from './layout/MainContent/MainContent';

import {
  Education,
  Experience,
  Header,
  SideBarSection,
  Summary
} from './components';

import CONSTANTS from './constants';

const App = () => {
  let classNames = 'App row';
  if (window.location.pathname !== '/') {
    classNames = classNames + ' A4';
  }

  const {
    PERSONAL: { INFO },
    SKILLS,
    AWARDS
  } = CONSTANTS;

  const SideBarList = [
    { id: 1, title: 'Personal Info', data: INFO },
    { id: 2, title: 'Skills', data: SKILLS },
    { id: 3, title: 'Rewards And Recognition', data: AWARDS }
  ];

  return (
    <div className={classNames}>
      <SideBar className="side-bar">
        <Header />
        {SideBarList.map(list => (
          <SideBarSection key={list.id} title={list.title} data={list.data} />
        ))}
      </SideBar>
      <MainContent className="main-contain p-1">
        <Summary />
        <Experience />
        <Education />
      </MainContent>
    </div>
  );
};

export default App;
