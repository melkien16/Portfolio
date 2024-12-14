import "devicon/devicon.min.css";

const Footer = () => {
  return (
    <footer className="lg:p-10 p-4 bg-black-500 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#8CED1F]">Melkie Yilk</h2>
          <p className="mt-2 text-lg">
            © 2023 My Portfolio. All rights reserved.
          </p>
        </div>

        <ul className="hidden md:flex md:space-x-8 mg:text-lg">
          <li>
            <a href="#home" className="hover:text-[#8CED1F]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#8CED1F]">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#8CED1F]">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#8CED1F]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#8CED1F]">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/melkie-yilk-08a862297/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-700 hover:text-[#8CED1F]"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-[#8CED1F]"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://twitter.com/melkien_d12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-[#8CED1F]"
          >
            <i className="devicon-twitter-original"></i>
          </a>

          <a
            href="https://www.facebook.com/melkien16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-[#8CED1F]"
          >
            <i className="devicon-facebook-plain"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg text-[#D1D1D1]">
          Developed with passion and dedication.
        </p>
        <p className="text-sm text-[#D1D1D1]">Design & Development by Melkie</p>
      </div>
    </footer>
  );
};

export default Footer;
