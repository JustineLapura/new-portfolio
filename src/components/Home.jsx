import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex items-center w-full max-w-[1150px] h-[90vh] pt-24 mx-auto ">
      <motion.div
        className="w-[60%] h-[450px] bg-yellow-900/90 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <img className="w-full h-full" src="/jovan1.png" alt="" />
      </motion.div>
      <div
        style={{
          fontFamily: "CoffeeFont, sans-serif", // Replace CoffeeFont with the actual name of your font
        }}
        className="w-full h-full flex flex-col justify-center gap-8 ps-16"
      >
        <motion.h1
          className="text-6xl font-semibold"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi!
        </motion.h1>
        <motion.p
          className="text-6xl font-semibold"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          I'm Mark Jovan Moreno
        </motion.p>
        <motion.p
          className="text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Explore the fascinating world of cosmetic content! Uncover the
          artistry behind beauty as we delve into the intricate details of
          makeup, skincare, and self-expression. From the latest trends to
          timeless classics, discover the secrets that enhance natural beauty
          and boost confidence. Join me on this cosmetic journey, where colors,
          textures, and creativity intertwine to create a canvas of allure and
          glamour.
        </motion.p>
        <Link to="/courses">
          <motion.button
            className="w-40 py-2 rounded-full border-2 border-yellow-700 hover:bg-yellow-700 text-yellow-700 hover:text-white font-semibold cursor-pointer hover:scale-105 duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            View Work
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
