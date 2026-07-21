"use client";
import Image from "next/image";
import { usePageTransition } from "@/components/lib/usePageTransition";
import FadeOverlay from "./FadeOverlay";

export default function Headshot({ size }: { size: number }) {
  const { visible, navigate } = usePageTransition();

  return (
    <>
      <button
        onClick={() => navigate("/photos")}
        className="group relative rounded-xs cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        style={{ width: size, height: size }}
      >
        <span
          className="
            absolute left-1/2 -top-5 -translate-x-1/2
            text-secondary text-xs font-mono whitespace-nowrap
            opacity-100
            transition-opacity duration-300
            pointer-events-none
          "
        >
          click me!!
        </span>

        <Image
          src="/headshot.jpeg"
          alt="photo of me"
          fill
          style={{ objectFit: "cover", borderRadius: "2px" }}
        />
      </button>

      <FadeOverlay visible={visible} />
    </>
  );
}
