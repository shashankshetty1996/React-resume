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
		<div className="App row A4">
			<SideBar className="side-bar">
				<Header />
				{SideBarList.map((list) => (
					<SideBarSection key={list.id} title={list.title} data={list.data} />
				))}
			</SideBar>
			<MainContent className="main-contain p-1">
				<Summary />
				<Experience />
				<Certification />
			</MainContent>
		</div>
	);
};

export default App;
