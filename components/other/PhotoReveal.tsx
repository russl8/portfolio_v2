"use client";
import { useState } from "react";
import Image from "next/image";
import type { Photo } from "../lib/types";

type PhotoRevealProps = {
  text: string;
  photo: Photo;
};

const PhotoReveal = ({ text, photo }: PhotoRevealProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <span className="group relative inline-block">
        <button
          onClick={() => setModalOpen(true)}
          className="cursor-pointer underline decoration-dotted decoration-secondary underline-offset-4 text-subheading hover:text-accent transition-colors"
        >
          {text}
        </button>

        <span
          className="
            hidden sm:block
            pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
            w-40 aspect-4/3 rounded-xs overflow-hidden
            bg-secondary/10
            opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
            transition-all duration-200
            z-10
          "
        >
          <span className="relative block w-full h-full">
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              style={{ objectFit: "cover" }}
            />
          </span>
        </span>
      </span>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 w-full bg-secondary/10">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="mt-3 sm:mt-4 text-subheading text-xs sm:text-sm font-bold">
              {photo.caption}
            </p>
            <p className="mt-2 text-secondary text-xs sm:text-sm">
              {photo.description}
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-3 sm:mt-4 text-secondary text-[10px] sm:text-xs font-mono hover:text-subheading transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoReveal;
