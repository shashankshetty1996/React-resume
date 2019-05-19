import React from "react";
import CONSTANTS from "../../constants";

const Header = () => {
  const { TITLE, WORK, PLAN, FOLLOW_UP } = CONSTANTS.HEADER;
  return (
    <Header>
      <p>
        {TITLE} {WORK} {PLAN} {FOLLOW_UP}
      </p>
    </Header>
  );
};

export default Header;
