import React from "react";
// import "./App.scss";

// Layout importing
import SideBar from "./layout/SideBar/SideBar";
import MainContent from "./layout/MainContent/MainContent";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App row">
      <SideBar className="col s3">Side bar</SideBar>
      <MainContent className="col s9">
        <Header />
      </MainContent>
    </div>
  );
}

export default App;
