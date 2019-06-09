import React from 'react';

import CONSTANTS from '../../constants';

import { ContentBlock, SectionTitle } from '../../common';

import './PersonalInfo.scss';

const PersonalInfo = () => {
  const { INFO } = CONSTANTS.PERSONAL;
  return (
    <section className="personal-info">
      <SectionTitle title="Personal Info" fromSideBar />
      <article>
        {INFO.map((data, index) => (
          <ContentBlock key={index} data={data} />
        ))}
      </article>
    </section>
  );
};

export default PersonalInfo;
