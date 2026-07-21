"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FADE_MS = 300;

export function usePageTransition() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const navigate = (path: string) => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => router.push(path), FADE_MS);
  };

  return { visible: leaving || !revealed, navigate };
}
