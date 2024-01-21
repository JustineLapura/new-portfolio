import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center w-full max-w-[1150px] h-[90vh] pt-24 mx-auto ">
      <div className="w-[60%] h-[450px] bg-yellow-900/90 rounded">
        <img className="w-full h-full" src="/jovan1.png" alt="" />
      </div>
      <div
        style={{
          fontFamily: "CoffeeFont, sans-serif", // Replace CoffeeFont with the actual name of your font
        }}
        className="w-full h-full flex flex-col justify-center gap-8 ps-16"
      >
        <h1 className="text-6xl font-semibold">Hi!</h1>
        <p className="text-6xl font-semibold">I'm Mark Jovan Moreno</p>
        <p className="text-gray-500">
          <p className="text-gray-500">
            Explore the fascinating world of cosmetic content! Uncover the
            artistry behind beauty as we delve into the intricate details of
            makeup, skincare, and self-expression. From the latest trends to
            timeless classics, discover the secrets that enhance natural beauty
            and boost confidence. Join me on this cosmetic journey, where
            colors, textures, and creativity intertwine to create a canvas of
            allure and glamour.
          </p>
        </p>
        <Link to="/courses">
          <button className="w-40 py-2 rounded-full border-2 border-yellow-700 hover:bg-yellow-700 text-yellow-700 hover:text-white font-semibold cursor-pointer hover:scale-105 duration-200">
            View Work
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
