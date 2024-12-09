import IMG from "../../assets/img-1.jpg";

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center font-poppins">
      <div className="flex justify-between items-center">
        <div className="w-1/2 my-10">
          <h1 className="text-[2rem] font-bold mt-7">
            Hi, I&apos;m
            <span className="text-6xl font-extrabold l px-4">
              Melkie
            </span>
          </h1>
          <p className="mb-7 text-[24px] font-tas">Full-Stack Web Developer | Tech Enthusiast</p>
          <p className="mb-6">
            I craft innovative, scalable solutions that empower organizations to
            achieve their goals.
          </p>

          <button className="bg-primary py-2 px-7 rounded-3xl hover:bg-primary-500 transition-all text-white">
            View Projects
          </button>
          <button className="text-primary py-2 px-7 rounded-3xl hover:px-8 hover:bg-primary border-[3px] border-primary m-5 hover:text-white-800 transition-all">
            Hire Me
          </button>
        </div>
        <div className="">
          <img src={IMG} width={1000} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
