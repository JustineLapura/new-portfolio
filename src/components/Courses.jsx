import React from "react";

const Courses = () => {
  return (
    <div className="w-full max-w-[1200px] min-h-screen mx-auto pt-28">
      <div className="w-full h-full flex items-center">
        <div className="w-full">
          <img
            className="w-[550px] h-[200px] rounded-lg object-cover border-2 hover:scale-105 duration-200"
            src="/cosmetic5.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-full flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">Beauty at Home</h1>
          <p className="text-xl font-semibold">A 6-week online course</p>
          <p className="mt-8 text-gray-500">
            Unleash your inner beauty artist with our "Beauty at Home" course.
            Over a span of 6 weeks, dive into the world of cosmetics from the
            comfort of your home. Learn the secrets of skincare, makeup
            techniques, and self-care practices to enhance your natural
            radiance.
          </p>
        </div>
      </div>
      <div className="w-full h-full flex items-center mt-8">
        <div className="w-full h-full flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">Cosmetology</h1>
          <p className="text-xl font-semibold">A 4-week online course</p>
          <p className="mt-8 text-gray-500">
            Immerse yourself in the art and science of cosmetology with our
            4-week online course. From skincare fundamentals to advanced makeup
            techniques, this course covers it all.
          </p>
        </div>
        <div className="w-full flex justify-end items-center">
          <img
            className="w-[550px] h-[200px] rounded-lg object-cover border-2 hover:scale-105 duration-200"
            src="/cosmetic6.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
