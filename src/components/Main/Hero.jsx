// import { PerspectiveCamera } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import ComputerHome from "./ComputerHome";
// import { Suspense } from "react";
// import CanvaLoader from "./CanvaLoader";
// import HeroCamera from "./HeroCamera";

import TestimonialSlider from "./TestimonialsSection";
import About from "./About";
import Experiance from "./Ex";
import Skills from "./Skills";
import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import IMGHero from "../../assets/HeroImg/business-7745314_1920.png";
import pattern from "../../assets/HeroImg/pattern.png";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    <Fragment>
      <div
        className="relative md:mt-16 mt-9 lg:p-16 lg:px-28 px-6 flex items-center flex-col md:flex-row md:justify-end bg-cover bg-center font-poppins dark:bg-slate-200 bg-black text-slate-100 dark:text-slate-900"
        onMouseMove={handleMouseMove}
        onMouseEnter={() =>
          setSpotlightStyle((prev) => ({ ...prev, display: "block" }))
        }
        onMouseLeave={() => setSpotlightStyle({ display: "none" })}
        id="home"
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

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={pattern}
            loading="lazy"
            className={`absolute xl:w-[450px] md:w-[350px] w-72 sm:w-96 ${
              isHovered
                ? "md:left-0 bottom-80 left-1 sm:left-2 sm:bottom-44 sm:scale-100 xl:left-6 xl:bottom-8 md:bottom-36 md:scale-105"
                : "xl:left-10 xl:bottom-5 md:bottom-32 bottom-80 sm:bottom-44 scale-100 left-1"
            } transition-all duration-700`}
          />
          <img
            src={IMGHero}
            loading="lazy"
            className={`xl:w-[70%] md:w-[70%] w-[95%] xl:h-[80%] absolute ${
              isHovered
                ? "left-1 md:left-32 xl:left-14 sm:bottom-44 md:bottom-32 xl:bottom-2 bottom-80 scale-105"
                : "md:left-20 xl:left-8 xl:bottom-0 md:bottom-28 bottom-80 sm:bottom-44 left-1 scale-100"
            } transition-all duration-700`}
          />
        </div>
        <div className="flex flex-col md:flex-col-reverse lg:flex-row md:justify-end items-end h-[77vh] z-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="md:mt-36 xl:mt-16 sm:mt-36 mt-28 md:my-10 flex flex-col  items-center lg:absolute lg:top-52"
          >
            <h1 className="text-[2rem] font-bold md:mt-7 mt-10 mb-2 md:mb-1 cursor-pointer">
              <span className="text-white dark:lg:text-slate-900 lg:text-slate-50">
                Hi, I&apos;m
              </span>
              <span className="lg:text-7xl md:text-6xl text-primary-200 text-4xl font-extrabold l px-4 hover:motion-preset-focus ">
                MELKIE <span className="hidden sm:inline-block">YILK</span>
              </span>
            </h1>
            <p className="mb-14 lg:text-[24px] font-tas">
              Full-Stack Web Developer | Tech Enthusiast
            </p>
            <p className="mb-6 text-center">
              I craft innovative, scalable solutions that empower organizations
              to achieve their goals.
            </p>

            <div className="flex flex-col items-start justify-start md:flex-row gap-4">
              <button className="bg-primary py-2 px-7 rounded-3xl hover:bg-transparent transition-all text-white hover:border-[2px] sm:hover:border-[3px] hover:text-primary-50 border-primary ">
                <Link to="/Projects" smooth={true} duration={500}>
                  View Projects
                </Link>
              </button>
              <button className="text-primary py-2 px-12 rounded-3xl hover:px-14 hover:bg-primary border-[2px] sm:border-[3px] border-primary hover:text-white-800 transition-all dark:bg-white">
                <Link to="/contact" smooth={true} duration={500}>
                  Hire Me
                </Link>
              </button>
            </div>
          </motion.div>
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
      <About />
      <Experiance />
      <Skills />
      <TestimonialSlider />
    </Fragment>
  );
};

export default Hero;
