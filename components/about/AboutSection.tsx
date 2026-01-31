import MyLink from "../components/MyLink";
import Section from "../components/Section";
import { useNavContext } from "../context/NavContext";

const AboutSection = () => {

  const context = useNavContext();
  return (
    <Section sectionName="about" onEnter={context.setCurrentSection}>
      <div className=" font-sans text-secondary">
        <p>
        Hi! I'm a Computer Science student at York University and
        I’ve had the opportunity to build software across a range of contexts, from
        student-led initiatives like my school’s hackathon to internships across
        multiple teams at larger organizations and startups.
      </p>
      <br></br>
      <p>In my spare time, I'm usually playing the guitar, running, or looking for new restaurants to try!</p> 
      </div>
    </Section>
  );
};

export default AboutSection;
