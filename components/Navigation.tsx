import Link from "next/link";
import { useNavContext } from "./context/NavContext";
import Intro from "./intro/Intro";
import { SectionName } from "./lib/types";

const Navigation = () => {
  return (
    <nav className="text-subtext lg:fixed">
      <Intro />
      <div className="pt-10 hidden lg:flex flex-col">
        <NavLink linkText="about" />
        <NavLink linkText="experience" />
        <NavLink linkText="projects" />
      </div>
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
    // <Link  scroll={false}>
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
        h-px bg-secondary flex-1 mr-2 max-w-6
        group-hover:max-w-12
        transition-[width] duration-200 ease-in-out
        ${isActive ? "max-w-12" : ""}
      `}
    />
    <p className="text-xs font-extrabold font-mono">
      {linkText.toUpperCase()}
    </p>
  </a>
// </Link>

  );
};


export default Navigation;
