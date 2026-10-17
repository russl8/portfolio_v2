"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, X } from "lucide-react";
import type { Experience } from "../lib/types";
import { cn } from "@/lib/utils";

type ExperienceModalProps = {
  experience: Experience;
  onClose: () => void;
};

const formatDate = (month: string, year: number) =>
  new Date(year, Number(month) - 1).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const paragraphs = experience.description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={experience.company}
        className={cn(
          "relative w-full max-w-xl max-h-full overflow-y-auto",
          "rounded-xs bg-[#1b2221] shadow-2xl",
          "animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer absolute top-4 right-4 text-secondary hover:text-header transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* header */}
        <div className="p-6 flex flex-row gap-4 items-center">
          <div className="w-14 aspect-square relative rounded-xs overflow-hidden shrink-0">
            <Image
              src={experience.logoPath}
              alt={experience.company}
              fill
              className="object-cover"
            />
          </div>
          <div className="pr-6">
            <Link
              target="_blank"
              href={experience.websiteUrl}
              className="group/link flex flex-row text-header text-lg font-semibold hover:opacity-60 transition-opacity duration-300"
            >
              {experience.company}
              <MoveUpRight className="ml-1 w-4 self-end group-hover/link:translate-x-0.75 group-hover/link:-translate-y-0.75 transition-transform duration-200" />
            </Link>
            <p className="text-subheading text-sm">{experience.position}</p>
            <p className="text-secondary text-xs mt-0.5">
              {formatDate(experience.startMonth, experience.startYear)} –{" "}
              {formatDate(experience.endMonth, experience.endYear)}
            </p>
          </div>
        </div>

        {/* body */}
        <div className="px-6 pb-6">
          <div className="space-y-2">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-body leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {experience.technologies.length > 0 && (
            <p className="mt-4 text-xs text-accent">
              {experience.technologies.join(" · ")}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ExperienceModal;
