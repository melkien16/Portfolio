import { Link } from "react-scroll";
import NavList from "./NavList";
const NavBars = () => {
  return (
    <div className="grid md:flex md:justify-between items-center md:gap-4 xl:gap-12 md:mr-10">
      {NavList.map(({ title, href, id }) => {
        return (
          <div
            key={id}
            className="hover:text-primary-500 transition-all text-[16px] lg:text-[18px] relative"
          >
            <Link
              to={href}
              smooth={true}
              duration={500}
              spy={true}
              className="nav-list cursor-pointer"
              activeStyle={{
                color: "#8CED1F",
                transition: "all 1s",
              }}
            >
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavBars;
