import { useState } from "react";
import "devicon/devicon.min.css";
import { Languages, Frameworks, Tools } from "./SkillsAndTools";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="p-28">
      <h1 className="text-3xl font-bold mb-10 text-center main-title relative inline-block text-gray_gradient hover:text-white-500 transition-all">
      Skills &amp; Technologies
      </h1>
      <div className="grid grid-cols-3 gap-7">
        <div className="skill-container hover:border-l-2 hover:border-r-2 rounded-3xl border-primary transition-all ease-in-out">
          <h1 className="my-3 text-3xl font-bold sub-title relative inline-block ml-20 mb-8 hover:text-white-500 font-tas transition-all">
            Languages
          </h1>
          <div className="grid grid-cols-3">
            {Languages.map(({ id, name, className }) => {
              return (
                <div
                  key={id}
                  className={`h-48 w-32 flex items-center ${
                    isHovered && hoveredIndex === id
                      ? "bg-helper-default text-white gap-1"
                      : "text-helper-default bg-transparent gap-10"
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
                        ? "flex-col-reverse gap-10"
                        : "flex-col gap-6"
                    }`}
                  >
                    <div
                      className={`w-14 h-[2px] rounded-3xl transition-all duration-300 ease-in-out ${
                        isHovered && hoveredIndex === id
                          ? "bg-white"
                          : "bg-helper-default"
                      }`}
                    ></div>
                    <p>{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill-container hover:border-l-2 hover:border-r-2 rounded-3xl border-primary transition-all ease-in-out">
          <h1 className="my-3 text-3xl font-bold sub-title relative inline-block ml-20 mb-8 hover:text-white-500 font-tas transition-all">
            Languages and Toos
          </h1>
          <div className="grid grid-cols-3 ">
            {Frameworks.map(({ id, name, className }) => {
              return (
                <div
                  key={id}
                  className={`h-48 w-32 flex items-center ${
                    isHovered && hoveredIndex === id
                      ? "bg-helper-default text-white gap-1"
                      : "text-helper-default bg-transparent gap-10"
                  } justify-center flex-col p-14 m-2 cursor-pointer transition-all duration-300 ease-in-out`}
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
                        ? "flex-col-reverse gap-10"
                        : "flex-col gap-6"
                    } hover:`}
                  >
                    <div
                      className={`w-14 h-[3px] transition-all duration-300 ease-in-out ${
                        isHovered && hoveredIndex === id
                          ? "bg-white"
                          : "bg-helper-default"
                      }`}
                    ></div>
                    <p>{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill-container hover:border-l-2 hover:border-r-2 rounded-3xl border-primary transition-all ease-in-out">
          <h1 className="my-3 text-3xl font-bold sub-title relative inline-block ml-20 mb-8 hover:text-white-500 font-tas transition-all">
            Languages and Toos
          </h1>
          <div className="grid grid-cols-3">
            {Tools.map(({ id, name, className }) => {
              return (
                <div
                  key={id}
                  className={`h-48 w-32 flex items-center ${
                    isHovered && hoveredIndex === id
                      ? "bg-helper-default text-white gap-1"
                      : "text-helper-default bg-transparent gap-10"
                  } justify-center flex-col p-14 m-2 cursor-pointer transition-all duration-300 ease-in-out`}
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
                        ? "flex-col-reverse gap-10"
                        : "flex-col gap-6"
                    } hover:`}
                  >
                    <div
                      className={`w-14 h-[3px] transition-all duration-300 ease-in-out ${
                        isHovered && hoveredIndex === id
                          ? "bg-white"
                          : "bg-helper-default"
                      }`}
                    ></div>
                    <p>{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
