import Image from "next/image";
import type { Experience } from "../lib/types";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import ExperienceModal from "./ExperienceModal";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className={cn(
          "group rounded-xs bg-accent/5 text-secondary",
          "transition-all duration-500",
          "lg:flex lg:flex-row px-4 py-6",
          "mb-6 lg:w-170 experience-card",
          "cursor-pointer hover:bg-accent/15 hover:shadow-md",
        )}
      >
        {/* icon */}
        <div className="block w-15 aspect-square relative rounded-xs overflow-hidden mr-4 self-center">
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
            <p
              className={cn(
                "flex flex-row text-header text-xs sm:text-sm md:text-lg font-semibold relative",
              )}
            >
              {experience.company}
            </p>
            <p className="text-xs lg:text-sm font-semibold text-secondary hidden lg:block self-center">
              {experience.startMonth}/{experience.startYear} -{" "}
              {experience.endMonth}/{experience.endYear}
            </p>
          </span>
          <p className="text-secondary text-xs sm:text-sm">
            {experience.position}
          </p>
          <p className="text-xs lg:text-sm text-secondary block lg:hidden">
            {experience.startMonth}/{experience.startYear} -{" "}
            {experience.endMonth}/{experience.endYear}
          </p>
        </div>
      </div>

      {isOpen && (
        <ExperienceModal experience={experience} onClose={closeModal} />
      )}
    </>
  );
};

export default ExperienceCard;
