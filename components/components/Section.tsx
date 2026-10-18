import { useEffect, useRef, useState } from "react";
import type { SectionName } from "../lib/types";
import { cn } from "@/lib/utils";

interface SectionProps {
  sectionName: SectionName;
  children: React.ReactNode;
  onEnter: (sectionName: SectionName) => void;
}


const visibilityRatios = new Map<SectionName, number>();

const sectionOrder: SectionName[] = ["about", "experience", "projects", "other"];

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
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);

  // the mobile header is stuck once the zero-height sentinel above it scrolls past the top of the viewport
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

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
      className="relative scroll-mt-20 lg:scroll-mt-24 mb-44 lg:last:mb-0"
      id={sectionName}
    >
      <div ref={sentinelRef} aria-hidden />
      <p
        className={cn(
          "z-2 lg:hidden text-md font-extrabold font-mono -mx-6 px-6 text-subheading w-[screen]",
          "sticky top-0 pt-4 pb-6 transition-[backdrop-filter] duration-200",
          isStuck && "backdrop-blur-sm",
        )}
      >
        {sectionName.toUpperCase()}
      </p>
      {children}
    </section>
  );
};

export default Section;
