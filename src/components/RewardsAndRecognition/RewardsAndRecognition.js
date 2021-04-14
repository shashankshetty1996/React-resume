import React from "react";

import { SectionTitle } from "../../common";

import CONSTANTS from "../../constants";

import "./RewardsAndRecognition.scss";

export default function RewardsAndRecognition(props) {
  const { show } = props;
  const { AWARDS } = CONSTANTS;

  if (!show) {
    return null;
  }

  const renderList = AWARDS.reduce((acc, curr) => {
    if (curr.type === "list") {
      curr.value.forEach((subAchievement) => acc.push(subAchievement));
    } else {
      acc.push(curr.value);
    }
    return acc;
  }, []);

  return (
    <section className="rewards-and-recognition my-2">
      <SectionTitle title="Rewards and Recognitions" />
      <ul>
        {renderList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
