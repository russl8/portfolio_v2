import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Headshot({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xs transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/headshot.jpeg"
        alt="photo of me"
        fill
        style={{ objectFit: "cover", borderRadius: "2px" }}
      />
    </div>
  );
}
