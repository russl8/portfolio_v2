"use client";
import { usePageTransition } from "@/components/lib/usePageTransition";
import FadeOverlay from "@/components/components/FadeOverlay";
import PhotoCollage from "@/components/photos/PhotoCollage";

export default function PhotosPage() {
  const { visible, navigate } = usePageTransition();

  return (
    <>
      <div className="w-full">
        <button
          onClick={() => navigate("/")}
          className="text-secondary flex flex-row items-center group hover:cursor-pointer hover:text-subheading transition-colors"
        >
          <hr className="h-px bg-secondary flex-1 max-w-10 group-hover:max-w-20 transition-[max-width] duration-300 ease-in-out" />
          <p className="text-sm font-extrabold font-mono">BACK</p>
        </button>

        <p className="text-md font-extrabold font-mono text-subheading mt-6 mb-6">
          PHOTOS
        </p>

        <PhotoCollage />
      </div>

      <FadeOverlay visible={visible} />
    </>
  );
}
