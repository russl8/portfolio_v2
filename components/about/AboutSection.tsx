import MyLink from "../components/MyLink";
import Section from "../components/Section";
import { useNavContext } from "../context/NavContext";

const AboutSection = () => {
  const context = useNavContext();
  return (
    <Section sectionName="about" onEnter={context.setCurrentSection}>
      <div className=" font-sans text-secondary">
        <p className="text-lg">
          I'm a software engineer/computer science student interested in fun
          problems!
        </p>
        <br></br>
        <p>
          I interned at RBC Borealis before
          moving to Germany for a few months to study at{" "}
          <MyLink
            text="Hochschule Bonn-Rhein-Sieg"
            url="https://www.h-brs.de/de"
          />{" "}
          in Bonn, Germany.
        </p>
        {/* <br></br>
        <p></p> */}
      </div>
    </Section>
  );
};

export default AboutSection;
