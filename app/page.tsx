"use client";
import AboutSection from "@/components/about/AboutSection";
import MyLink from "@/components/components/MyLink";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { NavContext } from "@/components/context/NavContext";
import { useState } from "react";
import type { SectionName } from "@/components/lib/types";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectSection from "@/components/projects/ProjectSection";
import EtcSection from "@/components/etc/EtcSection";
import FadeOverlay from "@/components/components/FadeOverlay";
import { usePageTransition } from "@/components/lib/usePageTransition";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionName>("about");
  const { visible } = usePageTransition();

  return (
    <NavContext.Provider value={{ currentSection, setCurrentSection }}>
      <div className="flex flex-col lg:flex-row">
        <div className="md:flex-1">
          <Navigation />
        </div>
        <div className="md:flex-1 text-lg">
          <AboutSection />
          <ExperienceSection />
          <ProjectSection />
          <EtcSection />
        </div>
      </div>
      <FadeOverlay visible={visible} />
    </NavContext.Provider>
  );
}
