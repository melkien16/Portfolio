import IMG from "../../assets/img2.jpg";
import IMG2 from "../../assets/02.jpg";
import IMG3 from "../../assets/03.png";
import IMG4 from "../../assets/04.jpg";

const About = () => {
  return (
    <div className="p-28">
      <h1 className="about-text">About</h1>
      <div className="w-full h-[1px] bg-gray-800 my-3"></div>

      <div className="flex">
        <div className="flex justify-start gap-6">
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold">Who I Am</h1>
            <p>
              I’m Melkie, a 3rd year Information System Student and dedicated
              Full-Stack Web Developer passionate about creating impactful and
              scalable solutions and a dedicated learner of data structures and
              algorithms. I specialize in crafting seamless, responsive
              applications that meet user needs.
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
        <img className="w-1/2" src={IMG2} width={600} alt="Image" />
        <div className="flex justify-center gap-6">
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-prim rounded-full shadow-line z-50"></div>
            <div className="w-[3px] bg-prim h-3/4 shadow-line"></div>
          </div>
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold">What Drives Me</h1>
            <p>
              Curiosity and innovation are at the heart of my journey. I thrive
              on mastering emerging technologies, solving complex challenges,
              and collaborating with others to build systems that truly make a
              difference.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-start gap-6">
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold">My Mission</h1>
            <p>
              My mission is to empower organizations by delivering solutions
              that amplify their growth and solve real-world problems. I’m
              particularly driven to create impactful systems for businesses and
              building systems that not only meet requirements but exceed
              expectations.
            </p>
          </div>
          <div className="flex items-center flex-col z-40">
            <div className="w-3 h-3 bg-prim rounded-full shadow-line"></div>
            <div className="w-[3px] bg-prim h-3/4 shadow-line"></div>
          </div>
        </div>
        <img className="w-1/2" src={IMG3} width={600} alt="Image" />
      </div>

      <div className="flex">
        <img className="w-1/2" src={IMG4} width={600} alt="Image" />
        <div className="flex justify-center gap-6">
          <div className="flex items-center flex-col ">
            <div className="w-3 h-3 bg-prim rounded-full shadow-line"></div>
            <div className="w-[3px] bg-prim h-3/4 shadow-line"></div>
          </div>
          <div className="w-[500px] mt-8">
            <h1 className="my-3 text-3xl font-bold">
              Why Collaborate With Me?
            </h1>
            <p>
              <ul>
                <li>
                  <span className="font-bold italic">Committed</span>, Every
                  project I take on is approached with precision and purpose
                </li>
                <li>
                  <span className="font-bold italic">Collaborative</span>, I
                  value teamwork and shared visions for success
                </li>
                <li>
                  <span className="font-bold italic">Visionary</span>, I align
                  my work with long-term goals, ensuring innovation and tangible
                  results
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
