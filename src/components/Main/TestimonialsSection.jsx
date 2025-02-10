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
  const [spotlightStyle, setSpotlightStyle] = useState({ display: "none" });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setSpotlightStyle({
      left: clientX - 50,
      top: clientY - 50,
      display: "block",
    });
  };

  return (
    <div
      className="relative lg:p-16 md:p-20 sm:p-14 p-10 pb-20 bg-slate-950 dark:bg-slate-200 dark:text-slate-950 text-slate-200"
      onMouseMove={handleMouseMove}
      onMouseEnter={() =>
        setSpotlightStyle((prev) => ({ ...prev, display: "block" }))
      }
      onMouseLeave={() => setSpotlightStyle({ display: "none" })}
    >
      <div
        style={{
          position: "fixed",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(148,252,19,.8) 0%, rgba(148,252,19,0.4) 50%, rgba(148,252,19,0) 100%)`,
          pointerEvents: "none",
          mixBlendMode: "screen",
          filter: "blur(20px)",
          boxShadow:
            "0 0 50px rgba(148,252,19,0.5), 0 0 70px rgba(148,252,19,0.5), 0 0 100px rgba(148,252,19,0.4)",
          zIndex: 10,
          ...spotlightStyle,
        }}
      ></div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="text-4xl text-center font-extrabold m-4 my-8 lg:m-3 lg:ml-20 md:ml-16 sm:ml-10 text-gray_gradient hover:text-white-500 transition-all dark:text-slate-900 lg:my-8"
      >
        Words That Inspire Me
      </motion.h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
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
              className={`text-center h-[400px] md:h-96 w-full p-5 pt-8 shadow-2xl bg-slate-900 dark:bg-transparent mb-20 flex flex-col justify-between pb-8 cursor-pointer transition-all duration-500 rounded-md ${
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
                    className="rounded-full h-24 w-24 mx-auto mb-5"
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
