import ExperianceList from "./ExperianseList";
import { motion } from "framer-motion";

const Experiance = () => {
  return (
    <div
      className="bg-black-300 text-white py-16 px-8 exp-bg dark:bg-slate-200"
      id="Experience"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="text-center text-4xl font-bold mb-12 main-title relative inline-block text-gray_gradient font-poppins hover:text-white-500 transition-all dark:text-slate-900"
      >
        Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="max-w-4xl mx-auto"
      >
        {ExperianceList.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start relative mb-12 last:mb-0"
          >
            <div className="flex flex-col items-center flex-shrink-0 w-24">
              <span className="bg-gray-700 dark:bg-slate-100 dark:text-slate-900 text-sm font-medium py-1 px-2 rounded-md">
                {exp.year}
              </span>
              <div className="ml-12 flex flex-row md:flex-col items-center gap-3 md:justify-between justify-center">
                <div className="w-4 h-4 bg-primary rounded-full md:mt-4"></div>
                <div className="md:w-[3px] w-32 h-[3px] bg-primary md:h-28 rounded-3xl"></div>
              </div>
            </div>

            <div className="bg-gray-800 dark:bg-slate-100 dark:text-slate-900 rounded-lg p-6 ml-8 font-roboto">
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
