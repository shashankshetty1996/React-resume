import React from 'react';
import './App.scss';

// Layout importing
import SideBar from './layout/SideBar/SideBar';
import MainContent from './layout/MainContent/MainContent';

import {
  Education,
  Experience,
  Header,
  PersonalInfo,
  Skills,
  Summary
} from './components';

const App = () => {
  let classNames = 'App row';
  if (window.location.pathname !== '/') {
    classNames = classNames + ' A4';
  }
  return (
    <div className={classNames}>
      <SideBar className="side-bar">
        <Header />
        <PersonalInfo />
        <Skills />
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
