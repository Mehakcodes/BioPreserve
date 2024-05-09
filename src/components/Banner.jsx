import React from "react";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"

    >
      <h1 className="text-4xl font-semibold mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        impedit!
      </h1>
      <p className="text-xl mb-4">Subscribe To Get Latest Updates</p>
      <div className="flex justify-center items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="px-4 py-2 mr-2 border border-gray-300 rounded-l"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Banner;
