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
import { Link } from "react-scroll";

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
          className={`absolute md:w-[550px] w-52 ${
            isHovered
              ? "md:left-4 md:bottom-6 md:scale-105"
              : "md:left-10 md:bottom-5 bottom-82 scale-100 left-1"
          } transition-all duration-700`}
        />
        <img
          src={IMGHero}
          className={`md:w-[73%] md:h-[83%] absolute ${
            isHovered
              ? "left-24 bottom-5 scale-105"
              : "md:left-20 md:bottom-0 bottom-82 left-1 scale-100 "
          } transition-all duration-700`}
        />
      </div>
      <div
        
        className="flex flex-col md:flex-col-reverse lg:flex-row md:justify-end items-end h-[77vh] z-40"
      >
        <div className="my-14 md:my-10 flex flex-col  items-center lg:absolute lg:top-52">
          <h1 className="text-[2rem] font-bold md:mt-7 mt-10 mb-2 md:mb-1 cursor-pointer">
            Hi, I&apos;m
            <span className="lg:text-8xl text-primary-200 text-5xl font-extrabold l px-4 hover:motion-preset-focus ">
              MELKIE YILK
            </span>
          </h1>
          <p className="mb-14 lg:text-[24px] font-tas">
            Full-Stack Web Developer | Tech Enthusiast
          </p>
          <p className="mb-6 text-center">
            I craft innovative, scalable solutions that empower organizations to
            achieve their goals.
          </p>

          <div className="flex flex-col items-start justify-start md:flex-row gap-4">
            <button className="bg-primary py-2 px-7 rounded-3xl hover:bg-transparent transition-all text-white hover:border-[2px] sm:hover:border-[3px] hover:text-primary-50 border-primary ">
              <Link to="Projects" smooth={true} duration={500}>
                View Projects
              </Link>
            </button>
            <button className="text-primary py-2 px-12 rounded-3xl hover:px-14 hover:bg-primary border-[2px] sm:border-[3px] border-primary hover:text-white-800 transition-all">
              <Link to="contact" smooth={true} duration={500}>
                Hire Me
              </Link>
            </button>
          </div>
        </div>
        {/* <div className="hidden w-3/4 h-full lg:flex items-start justify-start">
          <div className="w-full h-full flex items-start justify-start">
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
      </div>
    </div>
  );
};

export default Hero;
