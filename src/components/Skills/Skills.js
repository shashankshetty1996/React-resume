import React from 'react';

import { ContentBlock, SectionTitle } from '../../common';

import CONSTANTS from '../../constants';

import './Skills.scss';

const Skills = () => {
  const { SKILLS } = CONSTANTS;
  return (
    <section className="skills">
      <SectionTitle title="Skills" fromSideBar />
      <article>
        {SKILLS.map((skill, index) => (
          <ContentBlock key={index} data={skill} />
        ))}
      </article>
    </section>
  );
};

export default Skills;
