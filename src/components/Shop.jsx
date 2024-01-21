import React from "react";

const Shop = () => {
  return (
    <div className="w-full max-w-[1000px] min-h-screen mx-auto pt-28 ">
      <h1 className="text-center font-bold text-4xl italic text-gray-800">
        ONLINE SHOP
      </h1>
      <p className="max-w-[800px] mx-auto text-center text-sm mt-4">
        Discover our exquisite collection of cosmetic products that bring out
        your natural beauty. Elevate your skincare routine with our thoughtfully
        curated selection.
      </p>

      <div className="w-full h-full flex justify-between items-center gap-5 border-t-2 border-gray-500 mt-8 pt-4">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop1.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Organic Facial Cleanser
          </h1>
          <p className="text-center text-gray-500">₱200.00</p>
          <button className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500">
            ADD TO CART
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop2.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Nourishing Lip Balm
          </h1>
          <p className="text-center text-gray-500">₱120.00</p>
          <button className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500">
            ADD TO CART
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop3.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Floral Perfume Oil
          </h1>
          <p className="text-center text-gray-500">₱300.00</p>
          <button className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500">
            ADD TO CART
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop4.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Natural Glow Highlighter
          </h1>
          <p className="text-center text-gray-500">₱180.00</p>
          <button className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
