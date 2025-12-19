import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  const buttonIconClassnames: string =
    "w-5 h-5 hover:text-header/75 cursor-pointer transition-colors duration-200";
  return (
    <div className="flex flex-row text-secondary">
      <Link href={"https://github.com/russl8"} target="_blank">
        <Github className={` ${buttonIconClassnames} `} />
      </Link>

      <Link href={"https://linkedin.com/in/russliu"} target="_blank">
        <Linkedin className={` ml-4 ${buttonIconClassnames} `} />
      </Link>

      <Link href={"mailto:rssliu88@gmail.com"}>
        <Mail className={` ml-4 ${buttonIconClassnames} `} target="_blank" />
      </Link>
    </div>
  );
};

export default Socials;
