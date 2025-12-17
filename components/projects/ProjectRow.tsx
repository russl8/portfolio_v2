import Image from "next/image";
import type { Project } from "../lib/types";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SkillButton from "./SkillButton";

interface ProjectCardProps {
  project: Project;
}

const ProjectRow = ({ project }: ProjectCardProps) => {
  return (
    <tr
      className="
        border-b border-white/5
        transition-colors

      "
    >
      <td className="py-4 text-subheading font-semibold">
        {project.name}
      </td>

      <td className="py-4 text-sm text-secondary leading-relaxed">
        {project.description}
      </td>

      <td className="py-4">
        <div className="flex flex-row flex-wrap gap-2">
          {project.technologies.map((skill) => (
            <SkillButton key={skill} skill={skill} />
          ))}
        </div>
      </td>
    </tr>
  );
};


export default ProjectRow;

