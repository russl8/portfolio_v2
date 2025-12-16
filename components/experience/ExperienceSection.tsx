import { useState } from "react";
import Modal from "../components/BaseModal";
import Section from "../components/Section";
import { useNavContext } from "../context/NavContext";
import { experience } from "../lib/experience";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../lib/types";
import ExperienceModal from "./ExperienceModal";
const ExperienceSection = () => {
  const context = useNavContext();
  const [activeExperience, setActiveExperience] = useState<Experience | null>(
    null,
  );
  return (
    <Section sectionName="experience" onEnter={context.setCurrentSection}>
      <div className="experience-list">
        {experience.map((exp) => (
          <ExperienceCard
            experience={exp}
            onClick={() => {
              setActiveExperience(exp);
            }}
          />
        ))}
      </div>
      {activeExperience && 
      <ExperienceModal 
      experience={activeExperience} 
      onClick={()=>setActiveExperience(null)}
      
      />}
    </Section>
  );
};

export default ExperienceSection;
