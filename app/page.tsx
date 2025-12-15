'use client'
import About from "@/components/about/About";
import MyLink from "@/components/components/MyLink";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import {NavContext} from "@/components/context/NavContext";
import { useState } from "react";
import type { SectionName } from "@/components/lib/types";
import Experience from "@/components/experience/Experience";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionName>("about");
  
  return (
    <NavContext.Provider value = {{currentSection, setCurrentSection}}>
      <div className="md:flex-1">
        <Navigation />
      </div>
      <div className="md:flex-1">
        <About />
        <Experience/>

      </div>
    </NavContext.Provider>
  );
}
