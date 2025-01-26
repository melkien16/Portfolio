import { useState, useEffect } from "react";
import { Projects } from "./Projects";
import { motion } from "framer-motion";
import { FaThumbsUp } from "react-icons/fa";
import GitHubRepositories from "./GitHubRepositories";

const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [spotlightStyle, setSpotlightStyle] = useState({ display: "none" });

  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem("projectLikes");
    return savedLikes
      ? JSON.parse(savedLikes)
      : Projects.reduce((acc, project) => {
          acc[project.id] = { count: 0, liked: false };
          return acc;
        }, {});
  });

  useEffect(() => {
    localStorage.setItem("projectLikes", JSON.stringify(likes));
  }, [likes]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setSpotlightStyle({
      left: clientX - 50, // Center the spotlight
      top: clientY - 50,
      display: "block",
    });
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => {
      const currentState = prevLikes[id];
      return {
        ...prevLikes,
        [id]: {
          count: currentState.liked
            ? currentState.count - 1
            : currentState.count + 1,
          liked: !currentState.liked,
        },
      };
    });
  };

  return (
    <div
      className="relative pt-12 lg:p-16 p-6 sm:p-10 lg:pt-20 bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-200"
      onMouseMove={handleMouseMove}
      onMouseEnter={() =>
        setSpotlightStyle((prev) => ({ ...prev, display: "block" }))
      }
      onMouseLeave={() => setSpotlightStyle({ display: "none" })}
    >
      {/* Spotlight */}
      <div
        style={{
          position: "fixed",
          width: "150px",
          height: "150px",
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

      <motion.h1
        initial={{ opacity: 0, scale: 0.98, y: 20, x: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="text-4xl text-center font-extrabold m-4 my-8 lg:m-3 lg:ml-20 md:ml-16 sm:ml-10 text-gray_gradient hover:text-white-500 transition-all dark:text-slate-900 lg:my-8"
      >
        Showcase of My Work
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {Projects.map(({ id, title, description, image, href }) => (
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeInOut",
            }}
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
              <div className="mt-4 flex items-center space-x-3">
                <FaThumbsUp
                  onClick={() => handleLike(id)}
                  className={`text-2xl cursor-pointer transition-colors duration-300 ${
                    likes[id].liked ? "text-blue-600" : "text-gray-400"
                  } hover:text-blue-500`}
                />
                <span className="text-white dark:text-slate-200">
                  {likes[id].count} {likes[id].count === 1 ? "Like" : "Likes"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Add GitHub repositories section below the project cards */}
      <GitHubRepositories />
    </div>
  );
};

export default ProjectsSection;
