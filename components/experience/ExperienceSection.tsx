import { useState } from "react";
import Section from "../components/Section";
import { useNavContext } from "../context/NavContext";
import { experience } from "../lib/experience";
import ExperienceCard from "./ExperienceCard";
const ExperienceSection = () => {
  const context = useNavContext();

  return (
    <Section sectionName="experience" onEnter={context.setCurrentSection}>
      <div className="experience-list">
        {experience.map((exp) => (
          <ExperienceCard
            key={exp.company+exp.startMonth+exp.startYear}
            experience={exp}
          />
        ))}
      </div>

    </Section>
  );
};

export default ExperienceSection;
