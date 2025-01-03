import ExperianceList from "./ExperianseList";
import { motion } from "framer-motion";
import { useState } from "react";

const Experiance = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div
      className="lg:px-28 px-6 lg:py-20 md:py-10 py-2 text-slate-100 bg-slate-950 dark:bg-slate-100 dark:text-slate-900"
      id="Experience"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
        className="main-title m-2 lg:m-3 lg:ml-20 md:ml-16 sm:ml-10  relative inline-block text-gray_gradient hover:text-white-500 transition-all dark:text-slate-900 my-10"
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
        {ExperianceList.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start relative mb-12 last:mb-0"
            onMouseEnter={() => setHoveredId(index)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex ml-14 mb-4 md:flex-col items-center justify-center flex-shrink-0 w-24 gap-1">
              <span className="bg-gray-700 dark:bg-slate-100 dark:text-slate-900 text-sm font-medium py-1 px-2 rounded-md">
                {exp.year}
              </span>
              <div className="flex flex-row md:flex-col items-center gap-3 md:justify-between justify-center">
                <div className="w-4 h-4 bg-primary rounded-full md:mt-4"></div>
                <div className="md:w-[3px] w-32 h-[3px] bg-primary md:h-44 rounded-3xl"></div>
              </div>
            </div>

            <div
              className={`bg-gray-800 dark:bg-slate-100 dark:text-slate-900 rounded-lg transition-transform duration-300 ease-in-out shadow-xl ${
                hoveredId === index ? "scale-105" : "scale-100"
              } ml-8 font-roboto p-6`}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <h4 className="text-xl text-primary-900 mb-4">{exp.company}</h4>
              <p className="text-lg leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experiance;
