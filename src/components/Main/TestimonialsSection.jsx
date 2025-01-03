import { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import leftquote from "/quotes/leftquote.png";
import rightquote from "/quotes/rightquote.png";

import testimonials from "./Testimonials";

const TestimonialSlider = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="p-28 pt-10 pb-20 bg-slate-950 dark:bg-slate-200 dark:text-slate-950 text-slate-100">
      <h1 className="main-title m-2 lg:m-3 lg:ml-20 md:ml-16 sm:ml-10  relative inline-block text-gray_gradient hover:text-white-500 transition-all dark:text-slate-900 text-2xl">
        Words That Inspire Me
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map(({ id, name, feedback, image }) => (
          <SwiperSlide key={id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
              onMouseEnter={() => {
                setHoveredId(id);
              }}
              onMouseLeave={() => {
                setHoveredId(null);
              }}
              className={`text-center h-96 p-5 pt-8 shadow-2xl bg-slate-900 dark:bg-transparent rounded-b-full mb-20 flex flex-col justify-between pb-8 border-2 border-primary cursor-pointer transition-all duration-500 ${
                hoveredId === id
                  ? "bg-slate-800 dark:bg-slate-50 shadow-xl"
                  : ""
              }`}
            >
              <div className="text-md">
                <img src={leftquote} alt="" width={40} className="ml-6" />

                <p className="m-4 italic dark:text-[#555] text-gray-100">
                  {feedback}
                </p>
                <div className="flex justify-end">
                  <img src={rightquote} alt="" width={40} />
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center mt-5">
                <div>
                  <img
                    src={image}
                    alt={name}
                    className="rounded-full h-16 w-16 mx-auto mb-5"
                  />
                </div>
                <h3 className="font-tas">{name}</h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
