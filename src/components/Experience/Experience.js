import React from 'react';

import { DateInfo, SectionTitle } from '../../common';

import CONSTANTS from '../../constants';

const Experience = () => {
  const { EXPERIENCE } = CONSTANTS;
  return (
    <section className="my-2">
      <SectionTitle title="Experience" />
      {EXPERIENCE.map(experience => (
        <DateInfo
          key={experience.id}
          title={experience.title}
          fromDate={experience.fromDate}
          toDate={experience.toDate}
          subTitle={experience.subTitle}
          infos={experience.infos}
        />
      ))}
    </section>
  );
};

export default Experience;
