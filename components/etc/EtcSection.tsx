import MyLink from "../components/MyLink";
import Section from "../components/Section";
import { useNavContext } from "../context/NavContext";
import PhotoReveal from "./PhotoReveal";

const EtcSection = () => {
  const context = useNavContext();

  return (
    <Section sectionName="etc" onEnter={context.setCurrentSection}>
      <div className="font-sans min-h-[60vh] text-secondary">
        <div className="">
          I started running not too long ago, but I've already fallen in love
          with the way it clears my head and forces me to just breathe. I ran
          the{" "}
          <PhotoReveal
            text="Toronto Half Marathon"
            photo={{
              id: "half-marathon",
              src: "/half_marathon.jpg",
              caption: "Toronto Half Marathon",
              description: "my first half marathon!",
            }}
          />{" "}
          this May and am now training for the TCS Toronto Waterfront Half
          Marathon in October.
        </div>
        <br></br>
        <div>
          I also play a little bit of guitar (acoustic and electric) as well. I'm
          currently learning Polyhia's <i>The Worst</i>, but my favourite songs
          to play are BTS' <i>Life Goes On</i> and Tommy Emmanuel's{" "}
          <i>Angelina</i>.
        </div>
        <br></br>
        <div>
          One of the most rewarding experiences as of late has had to be a
          two-week trip before my exchange semester started.
          I visited{" "}
          <PhotoReveal
            text="Amsterdam"
            photo={{
              id: "amsterdam",
              src: "/amsterdam_0.jpg",
              caption: "Amsterdam, Netherlands",
              description: "one of their many canals!",
            }}
          />
          ,{" "}
          <PhotoReveal
            text="Hamburg"
            photo={{
              id: "hamburg",
              src: "/hamburg_0.jpg",
              caption: "Hamburg, Germany",
              description: "this was the day i finally understood why people enjoyed long walks on the beach.",
            }}
          />
          , and{" "}
          <PhotoReveal
            text="Berlin"
            photo={{
              id: "berlin",
              src: "/berlin_0.jpg",
              caption: "Berlin, Germany",
              description: "view from a restaurant situated on the top level of a parking garage!",
            }}
          />
          , before settling in{" "}
          <PhotoReveal
            text="Bonn"
            photo={{
              id: "bonn",
              src: "/bonn_0.jpg",
              caption: "Bonn, Germany",
              description: "such a beautiful city.",
            }}
          />{" "}
          for a few months.
        </div>
      </div>
    </Section>
  );
};

export default EtcSection;
