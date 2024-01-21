import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex gap-16 max-w-[1200px] min-h-screen mx-auto pt-28 ">
      <div className="w-full flex flex-col justify-around py-12">
        <h1 className="text-5xl font-bold text-gray-900 tracking-wide">
          Contact
        </h1>
        <p className="text-xl font-bold text-gray-800">
          Please fill up the form to send us an email:
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam
          alias ratione est. Vitae nesciunt dolore minima sit temporibus,
          laborum excepturi quis vel sint, at tempora porro autem vero eum
          corporis modi accusantium fugit, natus ratione cum tempore blanditiis!
          Eaque tenetur vero quibusdam fugit nesciunt, provident consectetur
          amet. Doloribus, harum.
        </p>
        <p className="text-gray-800 font-bold">Email:</p>
        <p className="text-gray-700 font-semibold">markjovanmoreno@gmail.com</p>
      </div>
      <div className="w-full flex flex-col justify-around py-10">
        <input className="bg-gray-300 p-3 focus:outline-none" type="text" placeholder="Name" />
        <input className="bg-gray-300 p-3 focus:outline-none" type="text" placeholder="Email" />
        <input className="bg-gray-300 p-3 focus:outline-none" type="text" placeholder="Subject" />
        <textarea
          className="bg-gray-300 p-3 focus:outline-none"
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="w-[200px] mx-auto border-2 py-2 rounded-full bg-gray-400 text-white font-bold hover:bg-gray-500 duration-200">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
