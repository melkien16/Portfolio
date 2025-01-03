import { useState } from "react";
import { Projects } from "./Projects";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div
      className="lg:p-28 p-6 sm:p-10 lg:pt-10 bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-200"
      id="Projects"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="main-title m-2 lg:m-3 lg:ml-20 md:ml-16 sm:ml-10  relative inline-block text-gray_gradient hover:text-white-500 transition-all dark:text-slate-900 my-10"
      >
        My Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Projects.map(({ id, title, description, image, href }) => (
          <div
            className={`relative overflow-hidden transform ease-out mb-11 group rounded-2xl shadow-md bg-gray-800 dark:bg-gray-200 hover:shadow-xl transition-all duration-500 ${
              isHovered && id === hoveredId ? "scale-105 shadow-xl" : ""
            }`}
            key={id}
            onMouseEnter={() => {
              setIsHovered(true);
              setHoveredId(id);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setHoveredId(null);
            }}
          >
            <div
              className="h-[384px] w-full bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110 transform group-hover:scale-110"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>

            <div
              className={`absolute inset-0 dark:bg-black-100 bg-black bg-opacity-60 dark:bg-opacity-70 flex flex-col justify-center items-center p-10 transition-opacity duration-300 ${
                isHovered && id === hoveredId ? "opacity-100" : "md:opacity-0"
              }`}
            >
              <h2 className="text-white dark:text-slate-200 text-xl lg:text-2xl font-semibold mb-4 text-center">
                {title}
              </h2>
              <p className="text-gray-300 dark:text-slate-200 text-sm lg:text-base mb-6 text-center">
                {description}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-medium text-slate-200 bg-primary rounded-full hover:bg-transparent hover:border-[3px] dark:text-slate-200 hover:px-8 hover:border-primary dark:hover:bg-transparent transition-all"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
