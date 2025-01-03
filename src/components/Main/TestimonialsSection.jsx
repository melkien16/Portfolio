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
  return (
    <div className="p-28 pt-10 pb-20 bg-slate-950 dark:bg-slate-200 dark:text-slate-950 text-slate-100">
      <h1 className="text-3xl font-bold text-center font-poppins m-6 mb-10">
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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
              className="text-center h-96 p-5 pt-8 shadow-2xl bg-slate-900 dark:bg-transparent rounded-lg mb-20 flex flex-col justify-between"
            >
              <div className="text-md">
                <img src={leftquote} alt="" width={40} />

                <p className="m-4 italic dark:text-[#555] text-gray-100">
                  {testimonial.feedback}
                </p>
                <div className="flex justify-end">
                  <img src={rightquote} alt="" width={40} />
                </div>
              </div>
              <div className="flex gap-2 justify-start items-center mt-5">
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full h-16 w-16 mx-auto mb-5"
                  />
                </div>
                <h3 className="font-tas">{testimonial.name}</h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
