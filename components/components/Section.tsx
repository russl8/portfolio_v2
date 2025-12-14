interface SectionProps {
  sectionName: string;
  children: React.ReactNode;
}
const Section = ({ sectionName, children }: SectionProps) => {
  return (
    <section className="relative">

      <p className="lg:hidden text-md font-extrabold font-mono text-subheading w-[100vw]
       sticky top-0 bg-background/85 backdrop-blur-sm pt-4 pb-6
      ">
        {sectionName.toUpperCase()}</p>
      {children}
    </section>
  );
};

export default Section;
