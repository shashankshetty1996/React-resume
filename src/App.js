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
  RewardsAndRecognition,
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
    CERTIFICATION,
  } = CONSTANTS;

  const sideBarAwardsData = false ? AWARDS : undefined;

  const SideBarList = [
    { title: "Personal Info", data: INFO },
    { title: "Skills", data: SKILLS },
    { title: "Rewards And Recognition", data: sideBarAwardsData },
    { title: "Certification", data: CERTIFICATION },
    { title: "Education", data: EDUCATION },
  ].filter((section) => section.data !== undefined);

  return (
    <div className={classNames}>
      <SideBar className="side-bar">
        <Header />
        {SideBarList.map((list, index) => (
          <SideBarSection key={index} title={list.title} data={list.data} />
        ))}
      </SideBar>
      <MainContent className="main-contain px-3">
        <Summary />
        <Experience />
        <Certification />
        <RewardsAndRecognition show={sideBarAwardsData === undefined} />
      </MainContent>
    </div>
  );
};

export default App;
