import { useState } from "react";
import Section from "../components/Section";
import { useNavContext } from "../context/NavContext";
import { projects } from "../lib/projects";
import ProjectRow from "./ProjectRow";
const ProjectSection = () => {
  const context = useNavContext();

  return (
    <Section sectionName="projects" onEnter={context.setCurrentSection}>
      <table className="text-secondary">
        <thead>
          <tr>
            <td>Project</td>
            <td>Description</td>
            <td>Built With</td>
            <td>Link</td>
          </tr>
        </thead>
        <tbody >
          {projects.map((proj) => (
            <ProjectRow key={proj.name} project={proj} />
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default ProjectSection;
