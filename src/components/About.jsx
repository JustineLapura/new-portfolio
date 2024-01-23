import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full max-w-[1200px] min-h-screen mx-auto pt-28 ">
      <div className="w-full h-full flex items-center">
        <motion.div
          className="flex justify-center items-center w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img className="w-[80%] h-[500px] rounded" src="/CEO.jpg" alt="" />
        </motion.div>
        <div
          className="w-full h-full space-y-7"
          style={{
            fontFamily: "CoffeeFont, sans-serif", // Replace CoffeeFont with the actual name of your font
          }}
        >
          <motion.h1
            className="font-semibold text-xl text-gray-500"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            CEO
          </motion.h1>
          <motion.p
            className="text-2xl font-bold text-gray-800"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Mark Jovan Moreno
          </motion.p>
          <motion.p
            className="text-gray-800 font-semibold"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Welcome to the visionary world of Mark Jovan Moreno, the CEO with a
            passion for cosmetics! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Officiis earum consectetur nemo ipsam, fuga
            ducimus inventore, error cum qui aliquid tempore beatae eveniet
            voluptas autem. Dignissimos, minus. Ipsam perspiciatis veniam,
            voluptate assumenda sint, magnam vitae.
          </motion.p>
          <motion.p
            className="text-gray-500"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Mark Jovan's journey in the beauty industry has been marked by
            dedication and innovation. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dignissimos dolorum facere qui distinctio
            necessitatibus! Veniam non nihil maiores in tenetur voluptas qui
            voluptatum sequi modi at fuga harum amet quas dolore facilis quae
            accusantium aspernatur repellat nulla dolores laboriosam, totam
            reiciendis consequuntur? Reprehenderit officiis corporis laboriosam
            culpa itaque vitae veniam, suscipit error iusto repellat fugit
            voluptatem harum, excepturi tempora similique.
          </motion.p>
          <motion.div
            className="w-full flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="px-6 py-2 text-white font-bold rounded-full bg-gray-400 hover:bg-gray-500 hover:scale-105 duration-200">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
