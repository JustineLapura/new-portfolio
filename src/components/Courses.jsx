import React from "react";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <div className="w-full max-w-[1200px] min-h-screen mx-auto pt-28">
      <div className="w-full h-full flex items-center">
        <motion.div
          className="w-full"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img
            className="w-[550px] h-[200px] rounded-lg object-cover border-2 hover:scale-105 duration-200"
            src="/cosmetic5.jpg"
            alt=""
          />
        </motion.div>
        <div className="w-full h-full flex flex-col">
          <motion.h1
            className="text-2xl font-bold text-gray-800"
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
          >
            Beauty at Home
          </motion.h1>
          <motion.p
            className="text-xl font-semibold"
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2 }}
          >
            A 6-week online course
          </motion.p>
          <motion.p
            className="mt-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Unleash your inner beauty artist with our "Beauty at Home" course.
            Over a span of 6 weeks, dive into the world of cosmetics from the
            comfort of your home. Learn the secrets of skincare, makeup
            techniques, and self-care practices to enhance your natural
            radiance.
          </motion.p>
        </div>
      </div>
      <div className="w-full h-full flex items-center mt-8">
        <div className="w-full h-full flex flex-col">
          <motion.h1
            className="text-2xl font-bold text-gray-800"
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
          >
            Cosmetology
          </motion.h1>
          <motion.p
            className="text-xl font-semibold"
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2 }}
          >
            A 4-week online course
          </motion.p>
          <motion.p
            className="mt-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Immerse yourself in the art and science of cosmetology with our
            4-week online course. From skincare fundamentals to advanced makeup
            techniques, this course covers it all.
          </motion.p>
        </div>
        <motion.div
          className="w-full flex justify-end items-center"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img
            className="w-[550px] h-[200px] rounded-lg object-cover border-2 hover:scale-105 duration-200"
            src="/cosmetic6.jpeg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
