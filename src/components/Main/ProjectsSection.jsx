import { useState } from "react";
import {Projects} from "./Projects";
const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="p-28 pt-10 bg-black-300" id="Projects">
      <h1 className="main-title m-10 relative inline-block">Projects</h1>
      <div className="flex gap-5 justify-center">
        {Projects.map(({ id }) => (
          <div
            className={`h-[500px] w-[300px] cont rounded-3xl relative`}
            onMouseEnter={() => {
              setIsHovered(true);
              setHoveredId(id);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setHoveredId(null);
            }}
            key={id}
          >
            <div
              className={`w-4 h-4 rounded-full absolute top-4 left-36 transition-all duration-1000 ease-in-out ${
                isHovered && id === hoveredId ? "bg-primary shadow-line" : "bg-black-100"
              }`}
            ></div>
          </div>
        ))}
        {/* <div
          className={`h-[500px] w-[300px] cont rounded-3xl relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`w-4 h-4 rounded-full absolute top-4 left-36 transition-all duration-1000 ease-in-out ${
              isHovered ? "bg-primary shadow-line" : "bg-black-100"
            }`}
          ></div>
        </div>
        <div
          className={`h-[500px] w-[300px] cont rounded-3xl relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`w-4 h-4 rounded-full absolute top-4 left-36 transition-all duration-1000 ease-in-out ${
              isHovered ? "bg-primary shadow-line" : "bg-black-100"
            }`}
          ></div>
        </div>
        <div
          className={`h-[500px] w-[300px] cont rounded-3xl relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`w-4 h-4 rounded-full absolute top-4 left-36 transition-all duration-1000 ease-in-out ${
              isHovered ? "bg-primary shadow-line" : "bg-black-100"
            }`}
          ></div>
        </div>
        <div
          className={`h-[500px] w-[300px] cont rounded-3xl relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`w-4 h-4 rounded-full absolute top-4 left-36 transition-all duration-1000 ease-in-out ${
              isHovered ? "bg-primary shadow-line" : "bg-black-100"
            }`}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsSection;
