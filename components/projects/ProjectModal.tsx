"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "../lib/types";
import { cn } from "@/lib/utils";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = project.images.length > 1;

  const goPrev = () => {
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % project.images.length);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl w-full max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-4/3 w-full bg-secondary/10">
          <Image
            src={project.images[index]}
            alt={`${project.name} screenshot ${index + 1}`}
            fill
            style={{ objectFit: "contain" }}
          />

          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-subheading hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next image"
                className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-subheading hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="mt-3 flex flex-row justify-center gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "cursor-pointer w-1.5 h-1.5 rounded-full transition-colors",
                  i === index ? "bg-accent" : "bg-secondary/40",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
