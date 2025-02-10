import { useState } from "react";
import "devicon/devicon.min.css";
import { Link } from "react-scroll";

const Footer = () => {
  const [spotlightStyle, setSpotlightStyle] = useState({ display: "none" });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setSpotlightStyle({
      left: clientX - 50,
      top: clientY - 50,
      display: "block",
    });
  };
  return (
    <footer
      className="relative lg:p-10 p-4 bg-black-600 text-white dark:text-slate-900 dark:bg-slate-300"
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
          background: `radial-gradient(circle, rgba(148,252,19,.8) 0%, rgba(148,252,19,0.4) 50%, rgba(148,252,19,0) 100%)`,
          pointerEvents: "none",
          mixBlendMode: "screen",
          filter: "blur(20px)",
          boxShadow:
            "0 0 50px rgba(148,252,19,0.5), 0 0 70px rgba(148,252,19,0.5), 0 0 100px rgba(148,252,19,0.4)",
          zIndex: 10,
          ...spotlightStyle,
        }}
      ></div>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary-900">Melkie Yilk</h2>
          <p className="mt-2 text-lg">
            © 2023 My Portfolio. All rights reserved.
          </p>
        </div>

        <ul className="hidden md:flex md:space-x-8 mg:text-lg">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-primary-900 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              smooth={true}
              duration={500}
              className="hover:text-primary-900 cursor-pointer"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              className="hover:text-primary-900 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="hover:text-primary-900 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-primary-900 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/melkie-yilk-08a862297/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-700 hover:text-primary-900"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            href="https://github.com/melkien16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://twitter.com/melkien_d12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
          >
            <i className="devicon-twitter-original"></i>
          </a>

          <a
            href="https://www.facebook.com/melkien16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-primary-900"
          >
            <i className="devicon-facebook-plain"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg text-[#D1D1D1] dark:text-slate-900">
          Developed with passion and dedication.
        </p>
        <p className="text-sm text-[#D1D1D1] dark:text-slate-900">
          Design & Development by Melkie
        </p>
      </div>
    </footer>
  );
};

export default Footer;
