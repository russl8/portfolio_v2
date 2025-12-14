import Image from "next/image";

export default function About() {
  return (
    <section className="pb-20">
      <h1 className="font-bold text-4xl flex space-x-4">
        <span className="text-header text-6xl">Russell Liu</span>
        <span className="text-4xl text-subheading self-end">劉丞羲</span>
      </h1>
      <Image
        className="my-2"
        src="/headshot.jpeg"
        alt="photo of me"
        width={150}
        height={150}
      />
      <p className="text-body">
        Creating functional, fault-tolerant, and maintainable software.
      </p>
      <p className="text-secondary">Currently @ RBC Borealis</p>
    </section>
  );
}
