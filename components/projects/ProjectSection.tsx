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
  <div className="rounded-xl  backdrop-blur-sm">
    <table className="w-full">
      <thead className="text-subheading text-base font-bold">
        <tr className="">
          <th className="py-3 text-left">Project</th>
          <th className="py-3 px-2 text-left">Description</th>
          <th className="py-3 text-left">Built with</th>
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
