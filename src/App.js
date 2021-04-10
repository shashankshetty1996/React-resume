import React from "react";
import "./App.scss";

// Layout importing
import SideBar from "./layout/SideBar/SideBar";
import MainContent from "./layout/MainContent/MainContent";

import {
  Certification,
  Experience,
  Header,
  SideBarSection,
  Summary,
} from "./components";

import CONSTANTS from "./constants";

const App = () => {
  let classNames = "App row";
  if (window.location.pathname !== "/") {
    classNames = classNames + " A4";
  }

  const {
    PERSONAL: { INFO, EDUCATION },
    SKILLS,
    AWARDS,
  } = CONSTANTS;

  const SideBarList = [
    { id: 1, title: "Personal Info", data: INFO },
    { id: 2, title: "Skills", data: SKILLS },
    { id: 3, title: "Rewards And Recognition", data: AWARDS },
    { id: 4, title: "Education", data: EDUCATION },
  ];

  return (
    <div className={classNames}>
      <SideBar className="side-bar">
        <Header />
        {SideBarList.map((list) => (
          <SideBarSection key={list.id} title={list.title} data={list.data} />
        ))}
      </SideBar>
      <MainContent className="main-contain px-3">
        <Summary />
        <Experience />
        <Certification />
      </MainContent>
    </div>
  );
};

export default App;
