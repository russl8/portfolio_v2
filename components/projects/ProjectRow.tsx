"use client";
import Image from "next/image";
import type { Project } from "../lib/types";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SkillButton from "./SkillButton";
import Link from "next/link";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

const ProjectRow = ({ project }: ProjectCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const hasImages = project.images.length > 0;

  return (
    <>
      <tr
        onClick={() => hasImages && setModalOpen(true)}
        className={cn(
          "group border-t border-white/10 align-top z-10 transition-colors duration-200",
          hasImages && "cursor-pointer hover:bg-white/5",
        )}
      >
        <td className="relative py-4 my-auto text-subheading text-sm font-semibold px-2">
          <Link
            href={project.websiteUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="group/link hover:cursor-pointer hover:text-accent/90 transition-colors duration-250 py-4">
              {project.name}
            </span>
          </Link>

          {hasImages && (
            <span
              className="
                hidden lg:block
                pointer-events-none absolute top-1/2 right-full -translate-y-1/2 mr-4
                w-40 aspect-4/3 rounded-xs overflow-hidden
                bg-secondary/10 shadow-lg
                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
                z-20
              "
            >
              <span className="relative block w-full h-full">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </span>
            </span>
          )}
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

      {hasImages && modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default ProjectRow;
