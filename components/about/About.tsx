import MyLink from "../components/MyLink";
import Section from "../components/Section";

const About = () => {
  return (
    <Section sectionName="About">
      <div className=" font-sans text-secondary">
        <p>
          I'm a Computer Science student at York University, and I generally
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
          developing a backend data aggregation service that processes metadata
          from multiple source systems using Spring Boot and Apache Spark.
        </p>
        <br></br>
        <p></p>
      </div>
    </Section>
  );
};

export default About;
