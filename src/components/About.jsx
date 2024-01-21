import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-[1200px] min-h-screen mx-auto pt-28 ">
      <div className="w-full h-full flex items-center">
        <div className="flex justify-center items-center w-full h-full">
          <img className="w-[80%] h-[500px] rounded" src="/CEO.jpg" alt="" />
        </div>
        <div
          className="w-full h-full space-y-7"
          style={{
            fontFamily: "CoffeeFont, sans-serif", // Replace CoffeeFont with the actual name of your font
          }}
        >
          <h1 className="font-semibold text-xl text-gray-500">CEO</h1>
          <p className="text-2xl font-bold text-gray-800">Mark Jovan Moreno</p>
          <p className="text-gray-800 font-semibold">
            Welcome to the visionary world of Mark Jovan Moreno, the CEO with a
            passion for cosmetics! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Officiis earum consectetur nemo ipsam, fuga
            ducimus inventore, error cum qui aliquid tempore beatae eveniet
            voluptas autem. Dignissimos, minus. Ipsam perspiciatis veniam,
            voluptate assumenda sint, magnam vitae.
          </p>
          <p className="text-gray-500">
            Mark Jovan's journey in the beauty industry has been marked by
            dedication and innovation. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dignissimos dolorum facere qui distinctio
            necessitatibus! Veniam non nihil maiores in tenetur voluptas qui
            voluptatum sequi modi at fuga harum amet quas dolore facilis quae
            accusantium aspernatur repellat nulla dolores laboriosam, totam
            reiciendis consequuntur? Reprehenderit officiis corporis laboriosam
            culpa itaque vitae veniam, suscipit error iusto repellat fugit
            voluptatem harum, excepturi tempora similique.
          </p>
          <div className="w-full flex justify-end">
            <button className="px-6 py-2 text-white font-bold rounded-full bg-gray-400 hover:bg-gray-500 hover:scale-105 duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
