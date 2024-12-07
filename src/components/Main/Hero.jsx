import IMG from "../../assets/img-1.jpg";

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center">
      <div className="flex justify-between items-center">
        <div className="w-1/2 my-10">
          <h1 className="text-[2rem] font-bold mt-7 font-serif">
            Hello, I am{" "}
            <span className="text-[2.5rem] text-prim font-extrabold l">
              Melkie
            </span>
          </h1>
          <p className="mb-7">FullStack Web Developer | Python Developer</p>
          <p className="mb-6">
            A 3rd Year Information science student.Currently, Im focused on
            learning React Js, Tailwind Css, Three Js and Data Structure and
            algorithm in python.
          </p>

          <button className="bg-prim-900 py-2 px-7 rounded-3xl hover:bg-prim-500 transition-all">
            See More
          </button>
          <button className="text-prim-900 py-2 px-7 rounded-3xl hover:px-8 hover:bg-prim-900 border-[3px] border-prim m-5 hover:text-white-800 transition-all">
            Contact me
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
