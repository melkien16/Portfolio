import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ComputerHome from "./ComputerHome";
import { Suspense } from "react";
import CanvaLoader from "./CanvaLoader";
import HeroCamera from "./HeroCamera";
import { motion } from "framer-motion";
import IMG from "../../assets/exp.png";

// import { Leva, useControls } from "leva";

const Hero = () => {
  // const controls = useControls("ComputerHome", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },

  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 2.5,
  //     min: 0,
  //     max: 10,
  //   },
  // });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.1,
        ease: "easeInOut",
      }}
      className="bg mt-16 lg:p-16 lg:px-28 px-6 flex items-center flex-col bg-cover bg-center font-poppins"
      id="home"
    >
      <div className="flex flex-col md:flex-col-reverse lg:flex-row md:justify-between items-center h-[77vh]">
        <div className="lg:hidden absolute top-16 -z-10">
          <img
            src={IMG}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="lg:w-1/2 my-14 md:m-6 md:my-10 flex flex-col justify-center items-center">
          <h1 className="text-[2rem] font-bold md:mt-7 mt-10 mb-2 md:mb-1">
            Hi, I&apos;m
            <span className="text-6xl font-extrabold l px-4 hover:motion-preset-focus ">
              Melkie
            </span>
          </h1>
          <p className="mb-7 text-[24px] font-tas">
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
        <div className="hidden w-3/4 h-full lg:flex items-start justify-start">
          <div className="w-full h-full flex items-start justify-start">
            {/* <Leva /> */}
            <Canvas className="">
              <Suspense fallback={<CanvaLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <HeroCamera>
                  <ComputerHome
                    scale={1}
                    position={[1, -9.3, 0.9]}
                    rotation={[-3.1, 3.7, 3.1]}
                    // scale={controls.scale}
                    // position={[
                    //   controls.positionX,
                    //   controls.positionY,
                    //   controls.positionZ,
                    // ]}
                    // rotation={[
                    //   controls.rotationX,
                    //   controls.rotationY,
                    //   controls.rotationZ,
                    // ]}
                  />
                </HeroCamera>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
