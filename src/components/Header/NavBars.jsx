import NavList from "./NavList";
const NavBars = () => {
  return (
    <div className="flex justify-between items-center gap-12">
      {NavList.map(({ title, href, id }) => {
        return (
          <div key={id} className="hover:text-gray-500 transition-all">
            <a href={href}>{title}</a>
          </div>
        );
      })}
    </div>
  );
};

export default NavBars;
