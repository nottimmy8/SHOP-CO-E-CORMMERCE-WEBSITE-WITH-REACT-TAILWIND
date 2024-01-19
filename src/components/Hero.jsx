import React from "react";

function Hero() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 ">
      <div className="max-h-[600px]  relative flex flex-col  lg:flex-row">
        {/* Overlay */}
        <div className="absolute top-16 left-7 w-full h-full text-black max-h-[600px]flex flex-col justify-center sm:w-full md:w-[700px] lg:w-[700px] ">
          <h1 className=" px-4 text-4xl sm:text-2xl md:text-5xl lg:text-6xl font-bold flex flex-col ">
            FIND CLOTHES <span> THAT MATCHES </span>
            <span>YOUR STYLE</span>
          </h1>
          <p className="px-4 text-2xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black ml-4 text-white hidden md:flex items-center py-2 rounded-full ">
            Shop Now
          </button>
        </div>
        <img src="/Rectangle2.png" alt="" className="w-full max-h-[600px]  " />
      </div>
    </div>
  );
}

export default Hero;
