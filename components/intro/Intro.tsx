import Image from "next/image";
import IntroMobile from "./IntroMobile";
import IntroDesktop from "./IntroDesktop";

export default function Intro() {
  return (
    <section className="">
      <IntroMobile />
      <IntroDesktop />
    </section>
  );
}
