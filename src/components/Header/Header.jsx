import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import NavBars from "./NavBars";

import Humberger from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    return storedMode === true;
  });
  const [spotlightStyle, setSpotlightStyle] = useState({ display: "none" });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setSpotlightStyle({
      left: clientX - 50, // Center the spotlight
      top: clientY - 50,
      display: "block",
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => setIsDarkMode((prev) => !prev);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black dark:bg-slate-200 text-gray-200 dark:text-slate-900 font-poppins px-6 sm:px-8 xl:px-16 lg:px-16 py-4 flex items-center justify-between shadow-md md:py-5"
      onMouseMove={handleMouseMove}
      onMouseEnter={() =>
        setSpotlightStyle((prev) => ({ ...prev, display: "block" }))
      }
      onMouseLeave={() => setSpotlightStyle({ display: "none" })}
    >
      <div
        style={{
          position: "fixed",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(148,252,19,1) 0%, rgba(148,252,19,0.6) 50%, rgba(148,252,19,0) 100%)`,
          pointerEvents: "none",
          mixBlendMode: "screen",
          filter: "blur(20px)",
          boxShadow:
            "0 0 50px rgba(148,252,19,0.5), 0 0 100px rgba(148,252,19,0.4)",
          zIndex: 10,
          ...spotlightStyle,
        }}
      ></div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="font-bold text-white dark:text-black text-lg sm:text-xl lg:text-2xl cursor-pointer"
      >
        <Link to="/">
          Melkie{" "}
        </Link>
      </motion.div>

      <nav className="hidden md:flex items-center xl:gap-12 lg:gap-6 gap-4">
        <NavBars />
      </nav>
      <div className="flex items-center space-x-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleMode}
          style={{ transition: "background-color 0.5s ease" }}
        >
          {isDarkMode ? (
            <FaMoon className="hover:text-yellow-400 text-2xl hover:scale-110 text-yellow-600 transition-all duration-300" />
          ) : (
            <FaSun className="hover:text-yellow-400 text-2xl hover:scale-110 text-yellow-600 transition-all duration-300" />
          )}
        </div>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block text-primary-900 xl:py-1 py-1 lg:px-4 px-[1px] 6 xl:px-8 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition"
          >
            Let&apos;s Talk
          </motion.button>
        </Link>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <img
              src={isOpen ? Close : Humberger}
              alt="Menu Toggle"
              className="w-8 h-8"
            />
          </button>

          {isOpen && (
            <div className="absolute top-16 right-3 bg-black dark:bg-slate-200 text-white dark:text-black rounded-lg shadow-lg p-4 transition-transform transform">
              <NavBars />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
