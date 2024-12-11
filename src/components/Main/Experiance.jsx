import Experiance from "./ExperianseList";

const Skills = () => {
  return (
    <div className="bg text-white py-16 px-8">
      <h2 className="text-center text-4xl font-bold mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {Experiance.map((exp, index) => (
          <div
            key={index}
            className="flex items-start relative mb-12 last:mb-0"
          >
            <div className="flex flex-col items-center flex-shrink-0 w-24">
              <span className="bg-gray-700 text-sm font-medium py-1 px-2 rounded-md">
                {exp.year}
              </span>
              <div className="flex flex-col items-center gap-3 justify-between">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-4"></div>
                <div className="w-[3px] bg-yellow-500 h-28 rounded-3xl"></div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 ml-8">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <h4 className="text-lg text-yellow-400 mb-4">{exp.company}</h4>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
