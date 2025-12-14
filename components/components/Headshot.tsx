import Image from "next/image";

export default function Headshot({size}:{size:number}) {
  return (
    <div 
    className="relative"      
    style={{ width: size, height: size }}
>
      <Image
        src="/headshot.jpeg"
        alt="photo of me"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
