import NavBars from "./NavBars";
const Header = () => {
  return (
    <div className=" p-4 px-16 flex justify-between items-center text-gray-200 text-[18px] fixed right-0 left-0 top-0 bg-[#0a0a24] z-50">
      <div className="font-extrabold text-[#22ff34] border border-[#22ff34] rounded-md px-3 py-2 text-3xl hover:bg-[#22ff34] hover:text-black-300 transition-all hover:transition-all cursor-pointer">
        Melkie
      </div>
      <NavBars />
    </div>
  );
};

export default Header;
