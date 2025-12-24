import Image from "next/image";
import type { Project } from "../lib/types";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SkillButton from "./SkillButton";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectRow = ({ project }: ProjectCardProps) => {
  return (
    <tr className="border-t border-white/10 align-top z-10">
      {/* make this an actual link */}
      <td className="py-4  my-auto text-subheading text-sm font-semibold">
        <Link href={project.websiteUrl} target="_blank">
          <span className="group hover:cursor-pointer hover:text-accent/90 transition-colors duration-250 py-4 ">
            {project.name}
            <MoveUpRight
              className={cn(
                "inline ml-1 w-3",
                "transition-transform duration-200",
                "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                "hidden sm:inline",
              )}
            />
          </span>
        </Link>
      </td>

      <td className="py-4 px-2 text-sm text-secondary leading-relaxed align-top">
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
