import IMG from "../../assets/img2.jpg";
import IMG2 from "../../assets/02.jpg";
import IMG3 from "../../assets/03.png";
import IMG4 from "../../assets/04.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.1,
        ease: "easeInOut",
      }}
      className="px-28 py-20 text-white-700"
      id="about"
    >
      <h1 className="main-title m-3 relative inline-block text-gray_gradient hover:text-white-500 transition-all">
        About
      </h1>

      <div className="flex justify-center my-12 motion-preset-blur-right motion-duration-2000">
        <div className="flex justify-start gap-9">
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold sub-title relative inline-block mb-8 font-tas hover:text-white-500 transition-all">
              Who I Am
            </h1>
            <p className="hover:border-y-[3px] hover:border-primary rounded-lg hover:px-4 hover:py-8 transition-all">
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
        <img
          className="w-1/2"
          src={IMG}
          width={600}
          alt="Image"
          loading={"lazy"}
        />
      </div>

      <div className="flex justify-center my-12 motion-preset-blur-right motion-duration-2000">
        <img
          className="w-1/2"
          src={IMG2}
          width={600}
          alt="Image"
          loading={"lazy"}
        />
        <div className="flex justify-center gap-9">
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-primary rounded-full shadow-line z-50"></div>
            <div className="w-[3px] bg-primary h-full shadow-line"></div>
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
          </div>
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold sub-title relative inline-block mb-8 font-tas hover:text-white-500 transition-all">
              What Drives Me
            </h1>
            <p className="hover:border-y-[3px] hover:border-primary rounded-lg hover:px-4 hover:py-8 transition-all">
              Curiosity and innovation are at the heart of my journey. I thrive
              on mastering emerging technologies, solving complex challenges,
              and collaborating with others to build systems that truly make a
              difference.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-12 motion-preset-blur-right motion-duration-2000">
        <div className="flex justify-start gap-9">
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold sub-title relative inline-block mb-8 font-tas hover:text-white-500 transition-all">
              My Mission
            </h1>
            <p className="hover:border-y-[3px] hover:border-primary rounded-lg hover:px-4 hover:py-8 transition-all">
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
        <img
          className="w-1/2"
          src={IMG3}
          width={600}
          alt="Image"
          loading={"lazy"}
        />
      </div>

      <div className="flex my-12 motion-preset-blur-right motion-duration-2000">
        <img
          className="w-1/2"
          src={IMG4}
          width={600}
          alt="Image"
          loading={"lazy"}
        />
        <div className="flex justify-center gap-9">
          <div className="flex items-center flex-col ">
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
            <div className="w-[3px] bg-primary h-full shadow-line"></div>
            <div className="w-3 h-3 bg-primary rounded-full shadow-line"></div>
          </div>
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold sub-title relative inline-block mb-8 hover:text-white-500 font-tas transition-all">
              Why Collaborate With Me?
            </h1>

            <ul className="hover:border-y-[3px] hover:border-primary rounded-lg hover:px-4 hover:py-8 transition-all">
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
      </div>
    </motion.div>
  );
};

export default About;
