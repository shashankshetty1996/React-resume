import React from 'react';

import { DateInfo, Header } from '../../common';

import CONSTANTS from '../../constants';

const Experience = () => {
  const { EXPERIENCE } = CONSTANTS;
  return (
    <section className="my-4">
      <Header title="Experience" />
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
