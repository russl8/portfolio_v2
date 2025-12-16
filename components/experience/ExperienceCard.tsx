import Image from "next/image";
import type { Experience } from "../lib/types";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  // mobile: full page, remove hover animation
  return (
    // ExperienceCard.tsx
    <div
      tabIndex={0}
      className="
        experience-card
        flex flex-row p-4 mb-6 w-160 rounded-md
        text-secondary select-none cursor-pointer
        transition-opacity duration-250
        hover:bg-secondary/15
        outline-none
      "
    >
      {/* icon */}
      <div className="block w-15 aspect-square mr-4 relative rounded-md overflow-hidden">
        <Image
          src={experience.logoPath}
          alt={experience.company}
          fill
          className="object-cover"
        />
      </div>

      
      {/* company, position, date */}
      <div className="w-full">
        <span className="flex flex-row justify-between">
          <p className="text-header text-xl font-semibold">
            {experience.company}
          </p>
          <p className="text-sm font-semibold pt-1">
            {experience.startMonth}/{experience.startYear} -{" "}
            {experience.endMonth}/{experience.endYear}
          </p>
          {/* add link icon with onhover animation */}
        </span>
        <p>{experience.position}</p>
        {/* put this in a modal */}
        {/* <p className="text-sm">{experience.description}</p> */}
      </div>
    </div>
  );
};

export default ExperienceCard;
