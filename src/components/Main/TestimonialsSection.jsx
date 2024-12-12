import { motion } from "framer-motion";
const TestimonialsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.1,
        ease: "easeInOut",
      }}
      className="h-[500px] p-28 pt-10"
    >
      <h1 className="text-3xl font-bold main-title relative inline-block">
        Testmonial
      </h1>
    </motion.div>
  );
};

export default TestimonialsSection;
