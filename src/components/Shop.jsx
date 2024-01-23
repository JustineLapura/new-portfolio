import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    // Set addedToCart to false after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 1000); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="w-full max-w-[1000px] min-h-screen mx-auto pt-28 ">
      <motion.h1
        className="text-center font-bold text-4xl italic text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        ONLINE SHOP
      </motion.h1>
      <motion.p
        className="max-w-[800px] mx-auto text-center text-sm mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Discover our exquisite collection of cosmetic products that bring out
        your natural beauty. Elevate your skincare routine with our thoughtfully
        curated selection.
      </motion.p>

      <div className="w-full h-full flex justify-between items-center gap-5 border-t-2 border-gray-500 mt-8 pt-4">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop1.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Organic Facial Cleanser
          </h1>
          <p className="text-center text-gray-500">₱200.00</p>
          <button
            onClick={handleAddToCart}
            className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500"
          >
            ADD TO CART
          </button>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop2.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Nourishing Lip Balm
          </h1>
          <p className="text-center text-gray-500">₱120.00</p>
          <button
            onClick={handleAddToCart}
            className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500"
          >
            ADD TO CART
          </button>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop3.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Floral Perfume Oil
          </h1>
          <p className="text-center text-gray-500">₱300.00</p>
          <button
            onClick={handleAddToCart}
            className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500"
          >
            ADD TO CART
          </button>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <img
            className="w-[200px] h-[250px] rounded hover:scale-105 duration-200 mb-4"
            src="shop4.jpeg"
            alt=""
          />
          <h1 className="text-center font-bold text-xl text-gray-800">
            Natural Glow Highlighter
          </h1>
          <p className="text-center text-gray-500">₱180.00</p>
          <button
            onClick={handleAddToCart}
            className="w-[150px] mx-auto text-xs  py-2 text-white mt-2 rounded-full bg-gray-400 font-semibold hover:scale-105 duration-200 hover:bg-gray-500"
          >
            ADD TO CART
          </button>
        </motion.div>
      </div>
      {/* added to cart modal  */}
      <AnimatePresence>
        {addedToCart && (
          <motion.div
            className="fixed h-20 w-[300px] flex justify-center items-center text-white text-xl font-semibold bg-black/60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl"
            exit={{ opacity: 0 }}
          >
            item has been added
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
