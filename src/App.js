import React from 'react';
import './App.scss';

// Layout importing
import SideBar from './layout/SideBar/SideBar';
import MainContent from './layout/MainContent/MainContent';

import { Education, Experience, Summary } from './components';

const App = () => {
  return (
    <div className="App row">
      <SideBar className="side-bar p-1">Side bar</SideBar>
      <MainContent className="main-contain p-1">
        <Summary />
        <Experience />
        <Education />
      </MainContent>
    </div>
  );
};

export default App;
