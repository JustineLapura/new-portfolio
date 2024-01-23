import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-screen pt-24 ">
      <motion.div
        className="w-full h-[250px] rounded-lg overflow-hidden "
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/cosmetic1.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="w-full h-full flex mt-4 gap-20">
        <div className="w-2/5 h-full m-auto space-y-5">
          <motion.p
            className="text-gray-500 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Dive into the world of cosmetics, where beauty meets artistry!
            Discover the latest trends, timeless classics, and expert tips to
            enhance your natural charm. Join me on this cosmetic journey, where
            colors, textures, and creativity intertwine to create a canvas of
            allure and glamour.
          </motion.p>
          <Link to="/shop">
            <motion.button
              className="px-8 py-2 rounded-full font-semibold text-white bg-gray-400 hover:scale-105 duration-200 hover:bg-gray-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              SHOP NOW
            </motion.button>
          </Link>
        </div>
        <div className="w-3/5 flex items-center justify-between">
          <motion.img
            src="/cosmetic2.jpeg"
            alt=""
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.img
            src="/cosmetic3.jpeg"
            alt=""
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
          <motion.img
            src="/cosmetic4.jpeg"
            alt=""
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
