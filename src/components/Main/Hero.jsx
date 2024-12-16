// import { PerspectiveCamera } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import ComputerHome from "./ComputerHome";
// import { Suspense } from "react";
// import CanvaLoader from "./CanvaLoader";
// import HeroCamera from "./HeroCamera";
import { useState } from "react";
import { motion } from "framer-motion";
import IMGHero from "../../assets/HeroImg/business-7745314_1920.png";
import pattern from "../../assets/HeroImg/pattern.png";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="md:mt-16 mt-9 lg:p-16 lg:px-28 px-6 flex items-center flex-col md:flex-row md:justify-end bg-cover bg-center font-poppins dark:bg-slate-100 bg-black text-slate-100 dark:text-slate-900"
      id="home"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={pattern}
          className="absolute md:top-32 left-10 md:w-[550px] w-52"
          style={{
            left: `${isHovered ? "1rem" : "2.5rem"}`,
            bottom: `${isHovered ? "1.5rem" : "1.25rem"}`,
            transition: "all .7s",
            scale: `${isHovered ? "1.06" : "1"}`,
          }}
        />
        <img
          src={IMGHero}
          className="md:w-[73%] md:h-[83%] absolute"
          style={{
            left: `${isHovered ? "6.4rem" : "5.8rem"}`,
            bottom: `${isHovered ? "1.25rem" : "0"}`,
            transition: "all .7s",
            scale: `${isHovered ? "1.04" : "1"}`,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="flex flex-col md:flex-col-reverse lg:flex-row md:justify-end items-end h-[77vh] z-40"
      >
        <div className="lg:w-1/2 my-14 md:m-6 md:my-10 flex flex-col justify-center items-center">
          <h1 className="text-[2rem] font-bold md:mt-7 mt-10 mb-2 md:mb-1">
            Hi, I&apos;m
            <span className="lg:text-6xl text-5xl font-extrabold l px-4 hover:motion-preset-focus ">
              Melkie
            </span>
          </h1>
          <p className="mb-16 lg:text-[24px] font-tas">
            Full-Stack Web Developer | Tech Enthusiast
          </p>
          <p className="mb-6 text-center">
            I craft innovative, scalable solutions that empower organizations to
            achieve their goals.
          </p>

          <div>
            <button className="bg-primary py-2 px-7 rounded-3xl hover:bg-transparent transition-all text-white hover:border-[2px] sm:hover:border-[3px] hover:text-primary-900 border-primary">
              <a href="#Projects">View Projects</a>
            </button>
            <button className="text-primary py-2 px-7 rounded-3xl hover:px-8 hover:bg-primary border-[2px] sm:border-[3px] border-primary m-5 hover:text-white-800 transition-all">
              <a href="#contact">Hire Me</a>
            </button>
          </div>
        </div>
        {/* <div className="hidden w-3/4 h-full lg:flex items-start justify-start">
          <motion.div className="w-full h-full flex items-start justify-start">
            {/* <Leva /> */}
        {/* <Canvas className="">
              <Suspense fallback={<CanvaLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <HeroCamera>
                  <ComputerHome
                    scale={1}
                    position={[1, -9.3, 0.9]}
                    rotation={[-3.1, 3.7, 3.1]}
                  />
                </HeroCamera>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
          </div> */}
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Hero;
