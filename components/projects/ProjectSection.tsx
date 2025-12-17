import { useState } from "react";
import Section from "../components/Section";
import { useNavContext } from "../context/NavContext";
import { projects } from "../lib/projects";
import ProjectRow from "./ProjectRow";
const ProjectSection = () => {
  const context = useNavContext();

  /**
   * <= md: project name (isLink=true), desc
   * <= lg: project name (isLink=false), desc, link
   * <= xl: project name (isLink=false), desc, techologies, link
   *
   *
   * or do we want a project card
   *
   */
  return (
<Section sectionName="projects" onEnter={context.setCurrentSection}>
  <div className="rounded-xl border border-white/5 bg-black/30 backdrop-blur-sm">
    <table className="w-full border-collapse">
      <thead className="text-subheading text-sm">
        <tr className="border-b border-white/5">
          <th className="py-3 text-left font-semibold">Project</th>
          <th className="py-3 text-left font-semibold">Description</th>
          <th className="py-3 text-left font-semibold">Built With</th>
        </tr>
      </thead>
      <tbody className="text-secondary">
        {projects.map((proj) => (
          <ProjectRow key={proj.name} project={proj} />
        ))}
      </tbody>
    </table>
  </div>
</Section>
  );
};

export default ProjectSection;
