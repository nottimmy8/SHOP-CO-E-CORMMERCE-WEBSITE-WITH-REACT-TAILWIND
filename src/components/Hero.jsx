import React from "react";
import img from "../img/Rectangle2.png";

function Hero() {
  return (
    <div>
      <div>
        {/* Overlay */}
        <div></div>
        <img src={img} alt="" className="w-full max-h-[500px] " />
      </div>
    </div>
  );
}

export default Hero;
