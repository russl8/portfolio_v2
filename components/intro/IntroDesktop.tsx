import Headshot from "../components/Headshot";

export default function IntroDesktop() {
  return (
    <div className="hidden lg:block">
      <Headshot size={150} />

      <h1 className="font-bold flex space-x-4">
        <span className="text-header text-4xl xl:text-6xl">Russell Liu</span>
        <span className="text-subheading xl:text-xl self-end">劉丞羲</span>
      </h1>

      <p className="text-secondary">Currently @ RBC Borealis</p>
    </div>
  );
}
