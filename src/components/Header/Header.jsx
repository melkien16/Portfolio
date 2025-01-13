import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

import NavBars from "./NavBars";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black dark:bg-slate-200 text-gray-200 dark:text-slate-900 font-poppins px-6 sm:px-8 lg:px-28 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="font-bold text-white dark:text-black text-lg sm:text-xl lg:text-2xl cursor-pointer"
      >
        <Link to="home" smooth={true} duration={500}>
          Melkie{" "}
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <NavBars />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-primary-900 py-2 px-6 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition"
        >
          <Link to="contact" smooth={true} duration={500}>
            Let&apos;s Talk
          </Link>
        </motion.button>
      </nav>

      {/* Dark Mode Toggle */}
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleMode}
        style={{ transition: "background-color 0.5s ease" }}
      >
        {isDarkMode ? <FaMoon className="text-yellow-400 text-2xl" /> : <FaSun className="text-yellow-400 text-2xl"/>}
      </div>

      {/* Mobile Navigation */}
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
    </header>
  );
};

export default Header;
