import { useState } from "react";
import "devicon/devicon.min.css";
import { Languages, Frameworks, Tools } from "./SkillsAndTools";
import { motion } from "framer-motion";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div
      className="lg:p-28 p-6 lg:pt-10 pt-5 text-slate-100 bg-slate-950 dark:bg-slate-200 dark:text-slate-950"
      id="Skills"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="main-title m-4 my-8 lg:m-3 lg:ml-20 md:ml-16 sm:ml-10  relative inline-block text-gray_gradient hover:text-white-500 transition-all dark:text-slate-900"
      >
        Skills &amp; Technologies
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7"
      >
        <div className="skill-container hover:border-l-2 hover:border-r-2 rounded-3xl border-primary transition-all ease-in-out">
          <h1 className="my-3 text-3xl font-bold sub-title relative md:inline-block mb-8 hover:text-white-500 font-tas transition-all text-center md:ml-20 m-40">
            Languages
          </h1>
          <div className="grid grid-cols-3">
            {Languages.map(({ id, name, className, level }) => {
              return (
                <div
                  key={id}
                  className={`sm:h-48 h-36 sm:w-32 w-24 flex items-center justify-center ${
                    isHovered && hoveredIndex === id
                      ? "bg-helper-default text-white gap-1"
                      : "text-helper-default bg-transparent sm:gap-10 gap-4"
                  } justify-center flex-col m-[2px] cursor-pointer transition-all duration-300 ease-in-out`}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setHoveredIndex(id);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setHoveredIndex(null);
                  }}
                >
                  <i className={`${className}`}></i>
                  <div
                    className={`flex flex-col items-center justify-center ${
                      isHovered && hoveredIndex === id
                        ? "flex-col-reverse sm:gap-10 gap-5"
                        : "flex-col sm:gap-6 gap-2"
                    } hover:`}
                  >
                    <div
                      className={`w-14 h-2 rounded-3xl transition-all duration-300 ease-in-out ${
                        isHovered && hoveredIndex === id
                          ? "bg-white"
                          : "bg-helper-default"
                      }`}
                    >
                      <div
                        className="bg-red-900 h-2 rounded-3xl"
                        style={{ width: level }}
                      ></div>
                    </div>
                    <p>{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill-container hover:border-l-2 hover:border-r-2 rounded-3xl border-primary transition-all ease-in-out">
          <h1 className="text-3xl font-bold sub-title relative lg:ml-20  hover:text-white-500 font-tas transition-all mt-4 mb-8 text-center m-10">
            Libraries and Frameworks
          </h1>
          <div className="grid grid-cols-3 ">
            {Frameworks.map(({ id, name, className, level }) => {
              return (
                <div
                  key={id}
                  className={`sm:h-48 h-36 sm:w-32 w-24 flex items-center justify-center ${
                    isHovered && hoveredIndex === id
                      ? "bg-helper-default text-white gap-1"
                      : "text-helper-default bg-transparent sm:gap-10 gap-4"
                  } justify-center flex-col m-[2px] cursor-pointer transition-all duration-300 ease-in-out`}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setHoveredIndex(id);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setHoveredIndex(null);
                  }}
                >
                  <i className={`${className}`}></i>
                  <div
                    className={`flex flex-col items-center justify-center ${
                      isHovered && hoveredIndex === id
                        ? "flex-col-reverse sm:gap-10 gap-5"
                        : "flex-col sm:gap-6 gap-2"
                    } hover:`}
                  >
                    <div
                      className={`w-14 h-2 rounded-3xl transition-all duration-300 ease-in-out ${
                        isHovered && hoveredIndex === id
                          ? "bg-white"
                          : "bg-helper-default"
                      }`}
                    >
                      <div
                        className="bg-red-900 h-2 rounded-3xl"
                        style={{ width: level }}
                      ></div>
                    </div>
                    <p>{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill-container hover:border-l-2 hover:border-r-2 rounded-3xl border-primary transition-all ease-in-out">
          <h1 className="my-3 text-3xl font-bold sub-title relative lg:ml-20 mb-8 hover:text-white-500 font-tas transition-all text-center m-40">
            Tools
          </h1>
          <div className="grid grid-cols-3">
            {Tools.map(({ id, name, className, level }) => {
              return (
                <div
                  key={id}
                  className={`sm:h-48 h-36 sm:w-32 w-24 flex items-center justify-center ${
                    isHovered && hoveredIndex === id
                      ? "bg-helper-default text-white gap-1"
                      : "text-helper-default bg-transparent sm:gap-10 gap-4"
                  } justify-center flex-col m-[2px] cursor-pointer transition-all duration-300 ease-in-out`}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setHoveredIndex(id);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setHoveredIndex(null);
                  }}
                >
                  <i className={`${className}`}></i>
                  <div
                    className={`flex flex-col items-center justify-center ${
                      isHovered && hoveredIndex === id
                        ? "flex-col-reverse sm:gap-10 gap-5"
                        : "flex-col sm:gap-6 gap-2"
                    } hover:`}
                  >
                    <div
                      className={`w-14 h-2 rounded-3xl transition-all duration-300 ease-in-out ${
                        isHovered && hoveredIndex === id
                          ? "bg-white"
                          : "bg-helper-default"
                      }`}
                    >
                      <div
                        className="bg-red-900 h-2 rounded-3xl"
                        style={{ width: level }}
                      ></div>
                    </div>
                    <p>{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
