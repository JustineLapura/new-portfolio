import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 px-20 flex justify justify-between items-center shadow-xl">
      <div className="flex items-center gap-4 ">
        <img
          className="w-20 h-20 cursor-pointer"
          src="/cosmetic-logo.png"
          alt=""
        />
        <h1 className="text-3xl text-yellow-700 font-bold cursor-pointer">
          Jovan Cosmetics
        </h1>
      </div>
      <div className="">
        <ul className="flex items-center gap-6 uppercase font-semibold text-yellow-700">
          <Link to="/">
            <li className="hover:text-gray-600 duration-200">Home</li>
          </Link>
          <Link to="/blog">
            <li className="hover:text-gray-600 duration-200">Blog</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-gray-600 duration-200">About</li>
          </Link>
          <Link to="/courses">
            <li className="hover:text-gray-600 duration-200">Courses</li>
          </Link>
          <Link to="/shop">
            <li className="hover:text-gray-600 duration-200">Shop</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-gray-600 duration-200">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
