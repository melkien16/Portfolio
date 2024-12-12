import NavBars from "./NavBars";
import {
  Link,

} from "react-scroll";
const Header = () => {
  return (
    <div className="px-16 flex justify-between items-center text-gray-200 text-[18px] fixed right-0 left-0 top-0 bg-black z-50 font-poppins">
      <div className="bg-primary-900 font-extrabold text-white border border-primary rounded-md px-3 text-[24px] hover:bg-black-600 hover:text-primary-900 transition-all cursor-pointer">
        <Link to="/" smooth={true} duration={500}>Melkie</Link>
      </div>
      <NavBars />
      <button className="text-primary-900 py-1 px-8 rounded-3xl hover:bg-prim-900 border-[3px] border-primary m-5 hover:text-primary-300 hover:bg-black-600 transition-all">
        <Link to="contact" smooth={true} duration={500}>Let&apos;s Talk</Link>
      </button>
    </div>
  );
};

export default Header;
