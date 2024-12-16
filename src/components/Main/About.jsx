import IMG from "../../assets/img2.jpg";
import IMG2 from "../../assets/02.jpg";
import IMG3 from "../../assets/03.png";
import IMG4 from "../../assets/04.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="lg:px-28 px-6 lg:py-20 md:py-10 py-2 text-slate-100 bg-slate-900 dark:bg-slate-200 dark:text-slate-900"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="main-title m-2 lg:m-3 relative inline-block text-gray_gradient hover:text-white-500 transition-all"
      >
        About
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="flex flex-col-reverse lg:flex-row justify-center my-3 md:my-12 motion-preset-blur-right motion-duration-2000"
      >
        <div className="flex justify-start lg:gap-9 gap-3 lg:w-1/2 flex-row-reverse md:flex-row w-full">
          <div className="w-[500px] lg:mt-8">
            <h1 className="md:my-3 text-2xl  md:text-3xl font-bold sub-title relative inline-block mb-4 lg:mb-8 font-tas hover:text-white-500 transition-all">
              Who I Am
            </h1>
            <p className="hover:border-y-[3px] hover:border-primary rounded-lg hover:px-1 md:hover:px-4 md:hover:py-8 hover:py-1 transition-all">
              I’m Melkie, a 3rd year Information System Student and dedicated
              Full-Stack Web Developer passionate about creating impactful and
              scalable solutions and a dedicated learner of data structures and
              algorithms. I specialize in crafting seamless, responsive
              applications that meet user needs.
            </p>
          </div>
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
            <div className="w-[3px] bg-primary h-full shadow-line"></div>
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-100% rounded-lg"
            src={IMG}
            width={600}
            alt="Image"
            loading={"lazy"}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="flex flex-col lg:flex-row justify-center lg:my-12 my-8 motion-preset-blur-right motion-duration-2000"
      >
        <div className="lg:w-1/2 ">
          <img
            className="100% rounded-lg"
            src={IMG2}
            width={600}
            alt="Image"
            loading={"lazy"}
          />
        </div>
        <div className="my-6 flex justify-center md:gap-9 gap-3 lg:w-1/2">
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-primary rounded-full shadow-line z-50"></div>
            <div className="w-[3px] bg-primary h-full shadow-line"></div>
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
          </div>
          <div className="w-[500px] lg:mt-8">
            <h1 className="lg:my-3 text-2xl lg:text-3xl font-bold sub-title relative inline-block mb-4 lg:mb-8 font-tas hover:text-white-500 transition-all ml-4">
              What Drives Me
            </h1>
            <p className="hover:border-y-[3px] hover:px-1 hover:border-primary rounded-lg lg: lg:hover:py-8 hover:py-1 transition-all">
              Curiosity and innovation are at the heart of my journey. I thrive
              on mastering emerging technologies, solving complex challenges,
              and collaborating with others to build systems that truly make a
              difference.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="flex flex-col-reverse lg:flex-row justify-center my-3 md:my-12 motion-preset-blur-right motion-duration-2000"
      >
        <div className="flex justify-start lg:gap-9 gap-3 lg:w-1/2 flex-row-reverse md:flex-row w-full mt-8">
          <div className="w-[500px] lg:mt-8">
            <h1 className="md:my-3 text-2xl  md:text-3xl font-bold sub-title relative inline-block mb-4 lg:mb-8 font-tas hover:text-white-500 transition-all">
              My Mission
            </h1>
            <p className="hover:border-y-[3px] hover:border-primary rounded-lg lg:hover:px-4 hover:px-1 lg:hover:py-8 hover:py-1 transition-all">
              My mission is to empower organizations by delivering solutions
              that amplify their growth and solve real-world problems. I’m
              particularly driven to create impactful systems for businesses and
              building systems that not only meet requirements but exceed
              expectations.
            </p>
          </div>
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
            <div className="w-[3px] bg-primary h-full shadow-line"></div>
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-100% rounded-lg"
            src={IMG3}
            width={600}
            alt="Image"
            loading={"lazy"}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="flex flex-col lg:flex-row justify-center lg:my-12 my-8 motion-preset-blur-right motion-duration-2000"
      >
        <div className="lg:w-1/2">
          <img
            className="w-100% rounded-lg"
            src={IMG4}
            width={600}
            alt="Image"
            loading={"lazy"}
          />
        </div>
        <div className="my-6 flex justify-center md:gap-9 gap-3 lg:w-1/2">
          <div className="flex items-center flex-col ">
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
            <div className="w-[3px] bg-primary h-full shadow-line"></div>
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
          </div>
          <div className="w-[500px] lg:mt-8">
            <h1 className="lg:my-3 text-2xl lg:text-3xl font-bold sub-title relative inline-block mb-4 lg:mb-8 font-tas hover:text-white-500 transition-all ml-4">
              Why Collaborate With Me?
            </h1>

            <ul className="hover:border-y-[3px] hover:px-1 hover:border-primary rounded-lg lg: lg:hover:py-8 hover:py-1 transition-all">
              <li>
                <span className="font-bold italic">Committed</span>, Every
                project I take on is approached with precision and purpose
              </li>
              <li>
                <span className="font-bold italic">Collaborative</span>, I value
                teamwork and shared visions for success
              </li>
              <li>
                <span className="font-bold italic">Visionary</span>, I align my
                work with long-term goals, ensuring innovation and tangible
                results
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
