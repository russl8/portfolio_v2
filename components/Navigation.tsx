import Intro from "./intro/Intro";

const Navigation = () => {
  return (
    <nav className="text-subtext lg:fixed">
      <Intro />
      <div className="pt-10 hidden lg:flex flex-col">
        <NavLink text="About" />
        <NavLink text="Experience" />
        <NavLink text="Projects" />
      </div>
    </nav>
  );
};

type NavLinkProps = {
  text: String;
};
const NavLink = ({ text }: NavLinkProps) => {
  return (
    <div
      className="text-secondary flex flex-row items-center group my-2
            hover:cursor-pointer hover:text-subheading"
    >
      <hr
        className="h-px bg-secondary flex-1 mr-2 max-w-6
                    group-hover:max-w-12
                    **transition-[width] duration-200 ease-in-out**"
      />
      <p className="text-xs font-extrabold font-mono">{text.toUpperCase()}</p>
    </div>
  );
};

export default Navigation;
