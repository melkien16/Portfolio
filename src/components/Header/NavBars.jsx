import { Link } from "react-scroll";
import NavList from "./NavList";
const NavBars = () => {
  return (
    <div className="flex justify-between items-center gap-12">
      {NavList.map(({ title, href, id }) => {
        return (
          <div
            key={id}
            className="hover:text-primary-500 transition-all text-[18px] relative"
          >
            <Link to={href} smooth={true} duration={500} className="nav-list cursor-pointer">
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavBars;
