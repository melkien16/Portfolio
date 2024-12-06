import IMG from "../../assets/img-1.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center p-11">
      <div className="flex justify-between">
        <div className="w-1/2 m-10">
          <h1 className="text-[2rem] font-bold m-6">
            Hello Welcome, I am {" "}
            <span className="text-[2.5rem] text-blue-800 font-extrabold">Melkie</span>
          </h1>
          <p className="m-6">
            A 3rd Year Information science student.Currently, I'm focused on
            learning React Js, Tailwind Css, Three Js and Data Structure and
            algorithm in python.
          </p>
          <button className="mx-6 bg-blue-800 py-2 px-7 rounded-lg hover:px-8 hover:bg-blue-900 transition-all">
            See More
          </button>
        </div>
        <div className="w-1/2">
          <img src={IMG} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
