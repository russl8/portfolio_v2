import Image from "next/image";
import type {  Project } from "../lib/types";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const ProjectRow = ({ project }: ProjectCardProps) => {
    return (
    <tr>
        <td>
          {project.name}
        </td>
        <td>{project.description}</td>
        <td>
          {project.technologies.map(skill => <SkillButton skill={skill}/>)}
        </td>
        <td>
          {project.websiteUrl}
        </td>
    </tr>
  )
};

export default ProjectRow;

const SkillButton = ({skill}: {skill:String})=> {
  return (
    <div>
      {skill}
    </div>
  )
}