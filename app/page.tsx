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

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionName>("about");

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
        </div>
      </div>
    </NavContext.Provider>
  );
}
