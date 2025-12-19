import Link from "next/link";
import { useNavContext } from "./context/NavContext";
import Intro from "./intro/Intro";
import { SectionName } from "./lib/types";
import Socials from "./intro/Socials";

const Navigation = () => {
  return (
    <nav className="text-subtext lg:fixed">
      <Intro />
      <div className="pt-10 pb-20 xl:pb-40 hidden lg:flex flex-col">
        <NavLink linkText="about" />
        <NavLink linkText="experience" />
        <NavLink linkText="projects" />
      </div>
      <Socials/>
    </nav>
  );
};

type NavLinkProps = {
  linkText: SectionName;
};
const NavLink = ({ linkText }: NavLinkProps) => {
  const { currentSection } = useNavContext();

  const isActive = currentSection === linkText;

  return (
    <a
      href={`#${linkText}`}
      className={`
      text-secondary flex flex-row items-center group my-2
      hover:cursor-pointer hover:text-subheading
      ${isActive ? "text-subheading" : ""}
    `}
    >
      <hr
        className={`
          h-px bg-secondary flex-1 mr-2 max-w-10
          group-hover:max-w-20
          transition-[max-width] duration-300 ease-in-out
          ${isActive ? "max-w-20" : ""}
        `}
      />
      <p className="text-sm font-extrabold font-mono">
        {linkText.toUpperCase()}
      </p>
    </a>
  );
};

export default Navigation;
