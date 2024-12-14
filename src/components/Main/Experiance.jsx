import ExperianceList from "./ExperianseList";
import { motion } from "framer-motion";

const Experiance = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration:   1.5,
        delay: 0.1,
        ease: "easeInOut",
      }}
      className="bg-black-300 text-white py-16 px-8 exp-bg dark:bg-slate-200"
      id="Experience"
    >
      <h2 className="text-center text-4xl font-bold mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {ExperianceList.map((exp, index) => (
          <div
            key={index}
            className="flex items-start relative mb-12 last:mb-0"
          >
            <div className="flex flex-col items-center flex-shrink-0 w-24">
              <span className="bg-gray-700 dark:bg-slate-100 dark:text-slate-900 text-sm font-medium py-1 px-2 rounded-md">
                {exp.year}
              </span>
              <div className="flex flex-col items-center gap-3 justify-between">
                <div className="w-4 h-4 bg-primary rounded-full mt-4"></div>
                <div className="w-[3px] bg-primary h-28 rounded-3xl"></div>
              </div>
            </div>

            <div className="bg-gray-800 dark:bg-slate-100 dark:text-slate-900 rounded-lg p-6 ml-8 font-roboto">
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <h4 className="text-xl text-primary-900 mb-4">{exp.company}</h4>
              <p className="text-lg leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experiance;
