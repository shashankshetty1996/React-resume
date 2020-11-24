import React from "react";

import { SectionTitle } from "../../common";
import CONSTANTS from "../../constants";

const Certification = (props) => {
  const { CERTIFICATION } = CONSTANTS;
  return (
    <section id="certification" className="my-2">
      <SectionTitle title="Certification" />
    </section>
  );
};

export default Certification;
