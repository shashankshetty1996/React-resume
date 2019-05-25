import React from 'react';
import './App.scss';

// Layout importing
import SideBar from './layout/SideBar/SideBar';
import MainContent from './layout/MainContent/MainContent';

import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App row">
      <SideBar className="col s2 side-bar py-2">Side bar</SideBar>
      <MainContent className="col s10 main-contain py-2">
        <Summary />
        <Experience />
      </MainContent>
    </div>
  );
}

export default App;
