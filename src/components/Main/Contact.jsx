import { motion } from "framer-motion";
import Phone from "/src/assets/contact-photos/phone-call.png";
import Email from "/src/assets/contact-photos/communications.png";
import Location from "/src/assets/contact-photos/placeholder.png";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.1,
        ease: "easeInOut",
      }}
      className="bg-black-200 dark:bg-slate-100 dark:text-slate-900 text-slate-200 lg:px-28 p-6 pt-0 flex flex-col lg:pb-14"
      id="contact"
    >
      <div className="py-4 px-7 bg-primary -mt-8 rounded-3xl text-center">
        <h1 className="text-black-100 text-2xl font-roboto">
          Let&apos;s get connected and work together
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt-10">
        <p className="md:text-4xl text-3xl md:leading-tight text-center md:text-left font-poppins">
          <q>
            Every great project begins with a simple hello.
            <br /> let&apos;s connect and create something <br /> truly{" "}
            <span className="font-tas text-primary-900 lg:text-8xl text-6xl l">
              special
            </span>
          </q>
        </p>

        <div className="flex flex-col gap-4 font-poppins text-lg text-slate-900">
          <div className="w-80 h-32 bg-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-around">
            <img src={Phone} width={40} className="" alt="" />
            <p>+251-946-157-252</p>
          </div>
          <div className="w-80 h-32 bg-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-around">
            <img
              src={Email}
              width={40}
              className=""
              alt=""
            />
            <p>melkie.yilk-ug@aau.edu.et</p>
          </div>
          <div className="w-80 h-32 bg-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-around">
            <img
              src={Location}
              width={40}
              className=""
              alt=""
            />
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-3 my-8 rounded-md bg-black-600 text-white-800 dark:text-black-100 dark:bg-gray-300 dark:shadow-lg focus:outline-none dark:placeholder-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-3 my-8 rounded-md bg-black-600 text-white-800 dark:text-black-100 dark:bg-gray-300 dark:shadow-lg focus:outline-none dark:placeholder-white"
          />
          <textarea
            cols="40"
            rows="5"
            placeholder="Message"
            className="block w-full p-3 my-8 rounded-md bg-black-600 text-white-800 dark:text-black-100 dark:bg-gray-300 dark:shadow-lg focus:outline-none dark:placeholder-white"
          ></textarea>
          <button className="bg-primary border-[3px] py-1 px-14 my-3 rounded-lg hover:bg-transparent transition-all text-white hover:border-[3px] hover:text-primary-900 border-primary hover:px-20 duration-500 ease-in-out">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
