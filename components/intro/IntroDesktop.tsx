import Headshot from "../components/Headshot";

export default function IntroDesktop() {
  return (
    <div className="hidden lg:block">
      <Headshot size={150} />

      <h1 className="font-bold flex space-x-4">
        <p className="text-header text-5xl ">Russell Liu</p>
        <p className="text-subheading text-xl self-end">劉丞羲</p>
      </h1>

      <p className="text-secondary text-xl">Currently @ RBC Borealis</p>
    </div>
  );
}
