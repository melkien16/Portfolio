import IMG from "../../assets/img2.jpg";
const About = () => {
  return (
    <div className="p-28">
      <h1 className="about-text">About</h1>
      <div className="w-full h-[1px] bg-gray-800 my-3"></div>
      <div className="flex">
        <img className="w-1/2" src={IMG} width={600} alt="Image" />
        <div className="flex justify-center gap-6">
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-prim rounded-full shadow-line z-50"></div>
            <div className="w-[3px] bg-prim h-3/4 shadow-line"></div>
          </div>
          <div className="w-[400px] mt-8">
            <h1 className="my-3 text-3xl font-bold">
              I am front end developer
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              tenetur veritatis necessitatibus alias consectetur distinctio
              tempora aliquid animi doloremque libero, rem voluptas eligendi
              perferendis quia dolorum.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-start gap-6">
          <div className="w-[400px] mt-8">
            <h1 className="my-3 text-3xl font-bold">
              I am curies to learn new tech
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              tenetur veritatis necessitatibus alias consectetur distinctio
              tempora aliquid animi doloremque libero, rem voluptas eligendi
              perferendis quia dolorum.
            </p>
          </div>
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-prim rounded-full shadow-line"></div>
            <div className="w-[3px] bg-prim h-3/4 shadow-line"></div>
          </div>
        </div>
        <img className="w-1/2" src={IMG} width={600} alt="Image" />
      </div>

      <div className="flex">
        <img className="w-1/2" src={IMG} width={600} alt="Image" />
        <div className="flex justify-center gap-6">
          <div className="flex items-center flex-col ">
            <div className="w-3 h-3 bg-prim rounded-full shadow-line"></div>
            <div className="w-[3px] bg-prim h-3/4 shadow-line"></div>
          </div>
          <div className="w-[400px] mt-8">
            <h1 className="my-3 text-3xl font-bold">
              Curruntly learn Data structure and algorithm
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              tenetur veritatis necessitatibus alias consectetur distinctio
              tempora aliquid animi doloremque libero, rem voluptas eligendi
              perferendis quia dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
