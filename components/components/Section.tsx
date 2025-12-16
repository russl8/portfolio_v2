import { useEffect, useRef } from "react";
import type { SectionName } from "../lib/types";

interface SectionProps {
  sectionName: SectionName;
  children: React.ReactNode;
  onEnter: (sectionName: SectionName) => void;
}
const Section = ({ sectionName, children, onEnter }: SectionProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current || !onEnter) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(sectionName);

        if (entry.isIntersecting) {
          onEnter(sectionName);
        }
      },
      {
        root: null,
        threshold: 0.8,
      },
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [sectionName, onEnter]);

  return (
    <section ref={ref} className="relative scroll-mt-24 mb-32" id={sectionName}>
      <p
        className="z-2 lg:hidden text-md font-extrabold font-mono text-subheading w-[screen]
       sticky top-0 bg-background shadow-2xs backdrop-blur-md pt-4 pb-6 
      "
      >
        {sectionName.toUpperCase()}
      </p>
      {children}
    </section>
  );
};

export default Section;
