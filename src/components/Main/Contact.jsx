import React, { useState } from "react";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import Phone from "/src/assets/contact-photos/phone-call.png";
import Email from "/src/assets/contact-photos/communications.png";
import Location from "/src/assets/contact-photos/placeholder.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.split(" ").length > 500) {
      newErrors.message = "Message must not exceed 500 words.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div
      className="relative pt-12 lg:pt-32 bg-black-200 dark:bg-slate-100 dark:text-slate-900 text-slate-200 lg:px-28 p-6 flex flex-col lg:pb-14"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
        className="md:py-10 bg-primary md:-mt-8 -mt-4 rounded-3xl "
      >
        <h1 className="text-black-100 text-center text-2xl font-roboto">
          Let&apos;s get connected and work together
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
        className="flex flex-col lg:flex-row gap-10 justify-between items-center mt-10"
      >
        <div className="flex flex-col gap-4 lg:gap-10 xl:gap-20">
          <p className="md:text-4xl text-3xl md:leading-tight text-center md:text-left font-poppins self-start">
            <q>
              Every great project begins with a simple hello.
              <br /> let&apos;s connect and create something <br /> truly{" "}
              <span className="font-tas text-primary-900 lg:text-8xl text-6xl l">
                special
              </span>
            </q>
          </p>
          <div className="flex gap-4 md:gap-10 text-slate-900">
            <a
              href="https://www.linkedin.com/in/melkie-yilk-08a862297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
            >
              <i className="devicon-linkedin-plain"></i>
              <span className="text-sm"> Linkedin</span>
            </a>
            <a
              href="https://github.com/melkien16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
            >
              <i className="devicon-github-original"></i>
              <span className="text-sm"> Github</span>
            </a>
            <a
              href="https://twitter.com/melkien_d12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
            >
              <i className="devicon-twitter-original"></i>
              <span className="text-sm"> Twitter</span>
            </a>

            <a
              href="https://www.facebook.com/melkien16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
            >
              <i className="devicon-facebook-plain"></i>
              <span className="text-sm"> Facebook</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-[48px] font-poppins text-lg text-slate-900">
          <div className="w-80 h-32 bg-black-600 text-white-800 dark:text-black-100 dark:bg-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-around">
            <img src={Phone} width={40} alt="" />
            <p>+251-946-157-252</p>
          </div>
          <div className="w-80 h-32 bg-black-600 text-white-800 dark:text-black-100 dark:bg-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-around">
            <img src={Email} width={40} alt="" />
            <p>melkie.yilk-ug@aau.edu.et</p>
          </div>
          <div className="w-80 h-32 bg-black-600 text-white-800 dark:text-black-100 dark:bg-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-around">
            <img src={Location} width={40} alt="" />
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full max-w-md dark:bg-slate-300 dark:text-slate-950 bg-slate-900 text-slate-200 p-6 rounded-lg shadow-lg"
        >
          <input
            type="hidden"
            name="access_key"
            value="8d88662d-209e-46b0-9994-1a148ad502b3"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-slate-700 dark:bg-slate-50"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-slate-700 dark:bg-slate-50"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-slate-700 dark:bg-slate-50"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
