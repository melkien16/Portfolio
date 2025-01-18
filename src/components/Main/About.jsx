import IMG from "../../assets/img2.jpg";
import IMG2 from "../../assets/02.jpg";
import IMG3 from "../../assets/03.png";
import IMG4 from "../../assets/04.jpg";
import ABI from "../../assets/abi.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="px-6 lg:px-16 py-10 lg:py-20 text-slate-100 bg-slate-950 dark:bg-slate-200 dark:text-slate-900"
      id="about"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="text-center text-slate-50 mb-8 text-5xl lg:text-6xl font-extrabold text-transparent dark:text-slate-900 cursor-pointer tracking-wide"
      >
        Who I Am
      </motion.h1>

      {/* About Information */}
      <div className="m-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Container */}
        <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] rounded-full overflow-hidden shadow-lg">
          <img
            src={ABI}
            alt="Who I Am"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
        </div>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="text-center lg:text-left text-lg lg:text-xl leading-relaxed max-w-2xl dark:text-gray-800 text-gray-200"
        >
          I’m <span className="font-semibold text-primary-50">Melkie</span>, a
          passionate
          <span className="font-semibold text-primary-50">
            {" "}
            Full-Stack Web Developer
          </span>
          and a{" "}
          <span className="font-semibold text-primary-50">
            3rd-year Information Systems
          </span>{" "}
          student. <br /> <span className="hidden lg:inline-block">
            I specialize in creating scalable and innovative web
            applications using the latest technologies such as React, Three.js,
            and more. My aim is to deliver impactful solutions that solve
            real-world problems.
          </span>
          <br />
          <br />
          I'm driven by creativity, collaboration, and a relentless pursuit of
          innovation. Let's build something remarkable together!
        </motion.p>
      </div>

      {/* Values and Vision */}
      <div className="grid lg:grid-cols-2 gap-10 mt-14">
        {/* Section 1 - Who I Am */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden w-full rounded-lg shadow-lg"
          >
            <img
              src={IMG}
              alt="Who I Am"
              className="w-full h-80 object-cover hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
          </motion.div>
          <div className="flex flex-col items-center my-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="mt-6 flex items-center space-x-3"
            >
              <i className="fas fa-user-circle text-3xl text-primary-50"></i>
              <h2 className="text-2xl font-bold dark:text-gray-800 text-slate-100 tracking-tight">
                My Role as a Developer
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="text-center mt-4 text-lg leading-relaxed max-w-3xl mx-auto dark:text-gray-600 text-slate-300 px-4"
            >
              As a Full-Stack Developer, I craft scalable web applications by
              integrating front-end and back-end technologies, ensuring smooth
              user experiences and efficient back-end processes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.7,
                ease: "easeInOut",
              }}
              className="mt-4 sm:flex justify-center space-x-6"
            >
              <div className="flex items-center space-x-2 text-primary-50 ">
                <i className="fas fa-laptop-code text-xl"></i>
                <span className="font-medium">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-50">
                <i className="fas fa-gear text-xl"></i>
                <span className="font-medium">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-50">
                <i className="fas fa-code-branch text-xl"></i>
                <span className="font-medium">Continuous Learning</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 2 - My Motivation */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden w-full rounded-lg shadow-lg"
          >
            <img
              src={IMG2}
              alt="What Drives Me"
              className="w-full h-80 object-cover hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
          </motion.div>
          <div className="flex flex-col items-center my-8 space-y-4">
            <div className="flex items-center space-x-3 mt-6">
              <i className="fas fa-cogs text-3xl text-primary-50"></i>
              <h2 className="text-2xl font-bold dark:text-gray-800 text-slate-100 tracking-tight">
                What Drives Me
              </h2>
            </div>
            <p className="text-center mt-4 text-lg leading-relaxed max-w-3xl mx-auto dark:text-gray-600 text-slate-300 px-4">
              I am deeply motivated by challenges, the ability to innovate, and
              the potential to make a positive impact on communities through
              technology.
            </p>
            <div className="mt-4 sm:flex justify-center space-x-6">
              <div className="flex items-center space-x-2 text-primary-50">
                <i className="fas fa-lightbulb text-xl"></i>
                <span className="font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-50">
                <i className="fas fa-tasks text-xl"></i>
                <span className="font-medium">Challenges</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-50">
                <i className="fas fa-users-cog text-xl"></i>
                <span className="font-medium">Impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - My Mission */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden w-full rounded-lg shadow-lg"
          >
            <img
              src={IMG3}
              alt="My Mission"
              className="w-full h-80 object-cover hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
          </motion.div>
          <div className="flex flex-col items-center my-8 space-y-4">
            <div className="flex items-center space-x-3 mt-6">
              <i className="fas fa-bullseye text-3xl text-primary-50"></i>
              <h2 className="text-2xl font-bold dark:text-gray-800 text-slate-100 tracking-tight">
                My Mission
              </h2>
            </div>
            <p className="text-center mt-4 text-lg leading-relaxed max-w-3xl mx-auto dark:text-gray-600 text-slate-300 px-4">
              My mission is to build intuitive, efficient, and innovative
              digital solutions that elevate user experience and drive business
              growth.
            </p>
            <div className="mt-4 sm:flex justify-center space-x-6">
              <div className="flex items-center space-x-2 text-primary-50">
                <i className="fas fa-rocket text-xl"></i>
                <span className="font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-50">
                <i className="fas fa-users text-xl"></i>
                <span className="font-medium">Collaboration</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-50">
                <i className="fas fa-trophy text-xl"></i>
                <span className="font-medium">Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 - Why Collaborate? */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden w-full rounded-lg shadow-lg"
          >
            <img
              src={IMG4}
              alt="Why Collaborate?"
              className="w-full h-80 object-cover hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
          </motion.div>
          <div className="flex items-center space-x-3 mt-14">
            <i className="fas fa-handshake text-3xl text-primary-50"></i>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="text-2xl font-bold dark:text-gray-800 text-slate-100 tracking-tight"
            >
              Why Collaborate?
            </motion.h2>
          </div>

          <ul className="mt-6 space-y-6 text-left lg:text-center">
            <li className="flex items-center gap-4 transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary-50">
                <i className="fas fa-check-circle text-lg"></i>
              </div>
              <span className="text-lg font-medium dark:text-gray-800 text-gray-200">
                Committed to{" "}
                <span className="font-semibold text-primary-50">
                  precision and purpose
                </span>
              </span>
            </li>
            <li className="flex items-center gap-4 transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary-50">
                <i className="fas fa-users text-lg"></i>
              </div>
              <span className="text-lg font-medium dark:text-gray-800 text-gray-200">
                Value{" "}
                <span className="font-semibold text-primary-50">teamwork</span>{" "}
                and shared visions
              </span>
            </li>
            <li className="flex items-center gap-4 transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary-50">
                <i className="fas fa-lightbulb text-lg"></i>
              </div>
              <span className="text-lg font-medium dark:text-gray-800 text-gray-200">
                Deliver{" "}
                <span className="font-semibold text-primary-50">
                  innovative, tangible results
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
