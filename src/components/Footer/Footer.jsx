import "devicon/devicon.min.css";

const Footer = () => {
  return (
    <footer className="lg:p-10 p-4 bg-black-600 text-white dark:text-slate-900 dark:bg-slate-200">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary-900">Melkie Yilk</h2>
          <p className="mt-2 text-lg">
            © 2023 My Portfolio. All rights reserved.
          </p>
        </div>

        <ul className="hidden md:flex md:space-x-8 mg:text-lg">
          <li>
            <a href="#home" className="hover:text-primary-900">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary-900">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-primary-900">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary-900">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary-900">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/melkie-yilk-08a862297/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-700 hover:text-primary-900"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://twitter.com/melkien_d12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
          >
            <i className="devicon-twitter-original"></i>
          </a>

          <a
            href="https://www.facebook.com/melkien16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-primary-900"
          >
            <i className="devicon-facebook-plain"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg text-[#D1D1D1] dark:text-slate-900">
          Developed with passion and dedication.
        </p>
        <p className="text-sm text-[#D1D1D1] dark:text-slate-900">Design & Development by Melkie</p>
      </div>
    </footer>
  );
};

export default Footer;
