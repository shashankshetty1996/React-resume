import React from 'react';
import './App.scss';

// Layout importing
import SideBar from './layout/SideBar/SideBar';
import MainContent from './layout/MainContent/MainContent';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App row">
      <SideBar className="col s2 side-bar py-2">Side bar</SideBar>
      <MainContent className="col s10 main-contain py-2">
        <Header />
      </MainContent>
    </div>
  );
}

export default App;
