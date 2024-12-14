import { useState, useEffect } from "react";
import NavBars from "./NavBars";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Humberger from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    return storedMode === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="lg:px-28 sm:px-8 max-md:px-6 px-6 sm:py-2 py-4 flex justify-between items-center text-gray-200 max-md:text-[16px] text-[14px] fixed right-0 lg:text-[18px] left-0 top-0 bg-black z-50 font-poppins dark:bg-slate-200 dark:text-slate-900">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary-900 sm:font-extrabold font-bold text-white border border-primary rounded-md sm:px-3 px-1 md:text-[20px] lg:text-[24px] text-[18px] sm:text-[24px] hover:bg-black-600 hover:text-primary-900 transition-all duration-100 cursor-pointer mr-4"
      >
        <Link to="/" smooth={true} duration={500}>
          Melkie
        </Link>
      </motion.div>
      <div className="md:flex hidden">
        <NavBars />

        <button className="text-primary-900 py-1 lg:px-8 max-md:px-4 rounded-3xl hover:bg-prim-900 border-[3px] max-md:border-[2px] border-primary m-4 hover:text-primary-300 hover:bg-black-600 transition-all">
          <Link to="contact" smooth={true} duration={500}>
            Let&apos;s Talk
          </Link>
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "background-color 0.5s ease",
          }}
        >
          <div
            onClick={toggleMode}
            style={{
              width: "80px",
              height: "40px",
              backgroundColor: isDarkMode ? "#444" : "#ddd",
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: isDarkMode ? "flex-end" : "flex-start",
              padding: "5px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <motion.div
              layout
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: isDarkMode ? "#fff" : "#666",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${
            isOpen
              ? "absolute top-16 right-3 bg-black-100 p-3 rounded-lg"
              : "hidden"
          } transition-all duration-700 ease-linear`}
        >
          <NavBars />
        </div>
        <img
          src={`${isOpen ? Close : Humberger}`}
          alt="Humberger"
          width={30}
          className="rounded-lg hover:bg-black-600 active:bg-black-300 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Header;
