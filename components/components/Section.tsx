import { useEffect, useRef } from "react";
import type { SectionName } from "../lib/types";

interface SectionProps {
  sectionName: SectionName;
  children: React.ReactNode;
  onEnter: (sectionName: SectionName) => void;
}


const visibilityRatios = new Map<SectionName, number>();

const sectionOrder: SectionName[] = ["about", "experience", "projects", "etc"];

const mostVisibleSection = (): SectionName | null => {
  let winner: SectionName | null = null;
  let highestRatio = 0;
  for (const name of sectionOrder) {
    const ratio = visibilityRatios.get(name) ?? 0;
    if (ratio > highestRatio) {
      highestRatio = ratio;
      winner = name;
    }
  }
  return winner;
};

const Section = ({ sectionName, children, onEnter }: SectionProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibilityRatios.set(sectionName, entry.intersectionRatio);
        const winner = mostVisibleSection();
        if (winner) onEnter(winner);
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      visibilityRatios.delete(sectionName);
    };
  }, [sectionName, onEnter]);

  return (
    <section
      ref={ref}
      className="relative scroll-mt-20 mb-44"
      id={sectionName}
    >
      <p
        className="z-2 lg:hidden text-md font-extrabold font-mono   -mx-6 px-6 text-subheading w-[screen]
       sticky top-0 pt-4 pb-6  backdrop-blur-lg
      "
      >
        {sectionName.toUpperCase()}
      </p>
      {children}
    </section>
  );
};

export default Section;
