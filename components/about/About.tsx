import MyLink from "../components/MyLink";
import Section from "../components/Section";

const About = () => {
  return (
    <Section sectionName="About">
      <div className=" font-sans text-secondary">
        <p>
          I'm a Computer Science student at York University, and I
          enjoy building software that is <b>functional</b>, <b>maintainable</b>
          , and <b>fault-tolerant</b>.
        </p>
        <br></br>
        <p>
          I am currently working at{" "}
          <MyLink
            text="RBC Borealis"
            url="https://rbcborealis.com/applications/lumina-platform/"
          />{" "}
          where I'm developing a backend data aggregation service that processes metadata
          from multiple source systems using Spring Boot and Apache Spark.
        </p>
        <br></br>
        <p>
        I’ve had the opportunity to build software across a range of contexts, from
        student-led initiatives like my school’s hackathon to internships across
        multiple teams at larger organizations and startups.
      </p>
      <br></br>
      <p>In my spare time, I'm usually playing the guitar, running, kickboxing, or looking for a new restaurant to try!</p> 

      </div>
    </Section>
  );
};

export default About;
