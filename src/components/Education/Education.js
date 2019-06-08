import React from 'react';

import { DateInfo, SectionTitle } from '../../common';

import CONSTANTS from '../../constants';

const Education = () => {
  const { EDUCATION } = CONSTANTS;
  return (
    <section className="my-2">
      <SectionTitle title="Education" />
      {EDUCATION.map(experience => (
        <DateInfo
          key={experience.id}
          title={experience.title}
          fromDate={experience.fromDate}
          toDate={experience.toDate}
          subTitle={experience.subTitle}
        />
      ))}
    </section>
  );
};

export default Education;
