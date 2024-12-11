const Contact = () => {
  return (
    <div className="bg-black-200 p-28 pt-10">
      <h1 className="main-title text-3xl relative inline-block font-tas">
        Contact
      </h1>
      <div className="flex gap-5 justify-center items-center">
        <p className="text-5xl leading-relaxed font-light">
          I am not hard to find,<br /> let&apos;s create something <br /> truly{" "}
          <span className="font-tas text-primary-900 text-9xl l">special</span>
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
          <button className="bg-primary border-[3px] py-1 px-10 my-3 rounded-3xl hover:bg-transparent transition-all text-white hover:border-[3px] hover:text-primary-900 border-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
