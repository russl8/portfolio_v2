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
        <ExperienceCard experience={exp} key={exp.startMonth+exp.startYear+exp.endMonth+exp.endYear} />
      ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
