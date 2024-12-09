import NavList from "./NavList";
const NavBars = () => {
  return (
    <div className="flex justify-between items-center gap-12">
      {NavList.map(({ title, href, id }) => {
        return (
          <div key={id} className="hover:text-primary-500 transition-all text-[18px] relative">
            <a href={href} className="nav-list">{title}</a>
          </div>
        );
      })}
    </div>
  );
};

export default NavBars;
