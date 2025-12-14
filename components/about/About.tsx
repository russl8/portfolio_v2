import MyLink from "../components/MyLink";

const About = () => {
  return (
    <section className="">
      <div className="min-h-screen font-sans text-secondary">
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
        <p>I have</p>
      </div>
    </section>
  );
};

export default About;
