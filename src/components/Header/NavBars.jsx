import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import NavList from "./NavList";

const NavBars = () => {
  return (
    <nav className="grid md:flex md:justify-between items-center md:gap-6 xl:gap-12">
      {NavList.map(({ title, href, id }) => (
        <div
          key={id}
          className="relative text-[16px] lg:text-[18px] hover:text-primary-500 transition-colors duration-300"
        >
          {href === "/home" || href === "/projects" || href === "/contact" ? (
            <Link to={href} className="cursor-pointer nav-list">
              {title}
            </Link>
          ) : (
            <ScrollLink
              to={href}
              smooth={true}
              duration={500}
              className="cursor-pointer nav-list"
            >
              {title}
            </ScrollLink>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBars;
