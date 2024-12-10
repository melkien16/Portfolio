import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ComputerHome from "./ComputerHome";
import { Suspense } from "react";
import CanvaLoader from "./CanvaLoader";
import HeroCamera from "./HeroCamera";
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
    <div className="bg mt-16 p-16 px-28 flex items-center bg-cover bg-center font-poppins">

      <div className="flex justify-between items-center h-[77vh]">
        <div className="w-1/2 my-10">
          <h1 className="text-[2rem] font-bold mt-7">
            Hi, I&apos;m
            <span className="text-6xl font-extrabold l px-4">Melkie</span>
          </h1>
          <p className="mb-7 text-[24px] font-tas">
            Full-Stack Web Developer | Tech Enthusiast
          </p>
          <p className="mb-6">
            I craft innovative, scalable solutions that empower organizations to
            achieve their goals.
          </p>

          <button className="bg-primary border-[3px] py-2 px-7 rounded-3xl hover:bg-transparent transition-all text-white hover:border-[3px] hover:text-primary-900 border-primary">
            View Projects
          </button>
          <button className="text-primary py-2 px-7 rounded-3xl hover:px-8 hover:bg-primary border-[3px] border-primary m-5 hover:text-white-800 transition-all">
            Hire Me
          </button>
        </div>
        <div className="w-3/4 h-full flex items-start justify-start">
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
    </div>
  );
};

export default Hero;
