"use client";
import { useEffect } from "react";
import type { Photo } from "@/components/lib/types";

type PhotoModalProps = {
  photo: Photo;
  onClose: () => void;
};

const PhotoModal = ({ photo, onClose }: PhotoModalProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-w-2xl w-full max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-4/3 w-full bg-linear-to-br from-secondary/40 to-secondary/10 flex items-center justify-center">
          <span className="text-secondary text-xs sm:text-sm">
            photo placeholder
          </span>
        </div>
        <p className="mt-3 sm:mt-4 text-subheading text-xs sm:text-sm font-bold">{photo.caption}</p>
        <p className="mt-2 text-secondary text-xs sm:text-sm">{photo.description}</p>
        <button
          onClick={onClose}
          className="mt-3 sm:mt-4 text-secondary text-[10px] sm:text-xs font-mono hover:text-subheading transition-colors"
        >
          CLOSE (ESC)
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;
