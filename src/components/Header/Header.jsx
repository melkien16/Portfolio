import NavBars from "./NavBars";
const Header = () => {
  return (
    <div className=" p-6 px-16 flex justify-between items-center text-gray-200 text-[18px]">
      <div className="font-extrabold text-3xl hover:text-gray-500 transition-all">Melkie</div>
      <NavBars />
      <div className="p-2 rounded-2xl shadow-2xl text-[1.5rem] bg-slate-700">⬆️</div>
    </div>
  );
};

export default Header;
