import { useState } from "react";
import "devicon/devicon.min.css";
import { Languages, Frameworks, Tools } from "./SkillsAndTools";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="bg-white-800">
      <h1 className="text-3xl font-bold mb-10">Skills</h1>
      <div className="flex ">
        {Languages.map(({ name, className }, index) => {
          return (
            <div
              key={index}
              className={`flex items-center ${
                isHovered && hoveredIndex === index
                  ? "bg-helper-default text-white gap-4"
                  : "text-helper-default bg-white gap-10"
              } justify-center flex-col p-14 m-2 cursor-pointer transition-all duration-300 ease-in-out`}
              onMouseEnter={() => {
                setIsHovered(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setHoveredIndex(null);
              }}
            >
              <i className={`${className}`}></i>
              <div
                className={`flex flex-col items-center justify-center gap-6 ${
                  isHovered && hoveredIndex === index
                    ? "flex-col-reverse"
                    : "flex-col"
                } hover:`}
              >
                <div
                  className={`w-14 h-[3px] transition-all duration-300 ease-in-out ${
                    isHovered && hoveredIndex === index
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

      <div className="flex">
        {Frameworks.map(({ name, className }, index) => {
          return (
            <div key={index}>
              <i className={className}></i>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex">
        {Tools.map(({ name, className }, index) => {
          return (
            <div key={index}>
              <i className={className}></i>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
