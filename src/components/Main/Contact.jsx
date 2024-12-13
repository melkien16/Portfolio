import { motion } from "framer-motion";
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
      className="bg-black-200 lg:p-28 p-6 pt-0 flex flex-col justify-center items-center "
      id="contact"
    >
      <div className="py-4 px-7 bg-primary -mt-8 rounded-3xl">
        <h1 className="text-black-100 text-2xl relative inline-block font-roboto">
          Let&apos;s get connected and work together
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <p className="lg:text-5xl text-4xl md:leading-relaxed font-extralight">
          I am not hard to find,
          <br /> let&apos;s create something <br /> truly{" "}
          <span className="font-tas text-primary-900 lg:text-9xl text-6xl l">special</span>
        </p>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-2 mt-4 rounded-md bg-black-600 text-white-800 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 mt-4 rounded-md bg-black-600 text-white-800 focus:outline-none"
          />
          <textarea
            name=""
            id=""
            cols="40"
            rows="5"
            placeholder="Message"
            className="block w-full p-2 mt-4 rounded-md bg-black-600 text-white-800 focus:outline-none"
          ></textarea>
          <button className="bg-primary border-[3px] py-1 px-10 my-3 rounded-3xl hover:bg-transparent transition-all text-white hover:border-[3px] hover:text-primary-900 border-primary hover:px-12 duration-500 ease-in-out">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
