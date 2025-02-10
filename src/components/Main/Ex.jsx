import React, { useState } from "react";
import ExperianceList from "./ExperianseList";
import { motion } from "framer-motion";

const Experiance = () => {
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
    <div
      className="relative pt-12 lg:px-16 px-6 lg:py-20 md:py-10 py-2 text-slate-200 bg-slate-950 dark:bg-slate-200 dark:text-slate-950"
      id="experience"
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

      <motion.h1
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="text-4xl text-center font-extrabold m-4 my-8 lg:m-3 lg:ml-20 md:ml-16 sm:ml-10 text-gray_gradient hover:text-white-500 transition-all dark:text-slate-900 lg:my-8"
      >
        Experiance
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
        {ExperianceList.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeInOut",
            }}
            key={index}
            className="flex space-x-0 flex-col md:flex-row items-start relative mb-10 last:mb-0"
          >
            <div className="flex ml-14 mb-4 md:ml-4 md:flex-col items-center justify-center flex-shrink-0 w-24 gap-1">
              <span className="bg-gray-700 dark:bg-slate-100 dark:text-slate-900 text-sm font-medium py-1 px-2 rounded-md">
                {exp.year}
              </span>
              <div className="flex flex-row md:flex-col items-center gap-3 md:justify-between justify-center">
                <div className="w-4 h-4 bg-primary rounded-full md:mt-4"></div>
                <div className="md:w-[3px] w-32 h-[3px] bg-primary md:h-44 rounded-3xl"></div>
              </div>
            </div>

            <div
              className={`bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg transition-transform duration-300 hover:scale-105 ease-in-out shadow-xl ml-8 md:ml-auto font-roboto p-6`}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <h4 className="text-xl text-primary-900 mb-4">{exp.company}</h4>
              <p className="text-lg leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experiance;
