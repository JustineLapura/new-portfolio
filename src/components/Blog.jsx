import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-screen pt-24 ">
      <div className="w-full h-[250px] rounded-lg overflow-hidden ">
        <img
          src="/cosmetic1.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full flex mt-4 gap-20">
        <div className="w-2/5 h-full m-auto space-y-5">
          <p className="text-gray-500 ">
            Dive into the world of cosmetics, where beauty meets artistry!
            Discover the latest trends, timeless classics, and expert tips to
            enhance your natural charm. Join me on this cosmetic journey, where
            colors, textures, and creativity intertwine to create a canvas of
            allure and glamour.
          </p>
          <Link to="/shop">
            <button className="px-8 py-2 rounded-full font-semibold text-white bg-gray-400 hover:scale-105 duration-200 hover:bg-gray-500 mt-4">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="w-3/5 flex items-center justify-between">
          <img
            src="/cosmetic2.jpeg"
            alt=""
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 cursor-pointer"
          />
          <img
            src="/cosmetic3.jpeg"
            alt=""
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 cursor-pointer"
          />
          <img
            src="/cosmetic4.jpeg"
            alt=""
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
