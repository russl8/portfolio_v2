import Image from "next/image";
import type { Experience } from "../lib/types";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  // mobile: full page, remove hover animation

  const [isModal, setIsModal] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsModal(false);
      setIsClosing(false);
    });
  };
  return (
    // modal component
    <div
      className={cn(
        isModal && ["fixed inset-0 bg-black/80 z-10 grid place-items-center"],
      )}
      onClick={() => {
        if (!isModal) setIsModal(true);
        else closeModal();
      }}
    >
      {/*  regular card component */}
      <div
        tabIndex={0}
        onClick={(e) => isModal && e.stopPropagation()}
        className={cn(
          "group rounded-lg bg-gray-900/40 text-secondary",
          "transition-all duration-500",
          "lg:flex lg:flex-row p-6",

          !isModal && [
            "mb-6 lg:w-160 experience-card ",
            "cursor-pointer hover:bg-secondary/15 hover:shadow-md",
          ],
          isModal && [
            "mx-auto my-auto",
            "max-w-3xl",
            // "w-160",
            "bg-linear-to-br from-black via-gray-900 to-black p-8 text-white",
          ],
        )}
      >
        {/* icon */}
        <div
          className={cn(
            "block w-15 aspect-square relative rounded-md overflow-hidden mr-4 self-center",
          )}
        >
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
                "flex flex-row text-header text-lg font-semibold relative",
                isModal && ["text-xl"],
              )}
            >
              {experience.company}
              <MoveUpRight
                className={cn(
                  [
                    "ml-1 w-4 font-bold align-bottom self-end",
                    "group-hover:translate-x-0.75 group-hover:-translate-y-0.75 transition-transform duration-200",
                  ],
                  isModal && ["hidden"],
                )}
              />
            </p>
            <p className={cn(["text-sm font-semibold pt-1"])}>
              {experience.startMonth}/{experience.startYear} -{" "}
              {experience.endMonth}/{experience.endYear}
            </p>
            {/* add link icon with onhover animation */}
          </span>
          <p>{experience.position}</p>
          {/* put this in a modal */}
          <p className={cn("text-sm pt-2", !isModal && ["hidden"])}>
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
