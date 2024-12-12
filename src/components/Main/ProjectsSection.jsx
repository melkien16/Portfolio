import { useState } from "react";
import { Projects } from "./Projects";
const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="p-28 pt-10 bg-black-500" id="Projects">
      <h1 className="main-title m-10 relative inline-block">Projects</h1>
      <div className="flex gap-5 justify-center">
        {Projects.map(({ id, title, description, image, href }) => (
          <div
            className={` h-[500px] w-[300px] cont rounded-3xl relative transition-all duration-300 ease-in-out ${
              isHovered && id === hoveredId
                ? "scale-105 shadow-2xl"
                : "shadow-lg"
            }`}
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
            <a href={href}>
              <img src={image} alt="" className="rounded-3xl" height={200} />
            </a>
            <h1 className="text-white text-xl font-bold mt-5 text-center font-tas">
              {title}
            </h1>
            <p className="text-white text-center m-4">{description}</p>

            <div
              className={`w-4 h-4 rounded-full absolute top-4 left-36 transition-all duration-1000 ease-in-out ${
                isHovered && id === hoveredId
                  ? "bg-primary shadow-line"
                  : "bg-black-100"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
