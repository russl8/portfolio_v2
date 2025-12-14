import Headshot from "../components/Headshot";

export default function IntroMobile() {
  return (
    <div className="lg:hidden mb-10">
      <Headshot size={100} />

      <h1 className="font-bold text-2xl flex space-x-4">
        <p className="text-header text-4xl">Russell Liu</p>
        <p className="text-subheading xl:text-xl self-end">劉丞羲</p>
      </h1>
      <p className="text-secondary">Currently @ RBC Borealis</p>
    </div>
  );
}
