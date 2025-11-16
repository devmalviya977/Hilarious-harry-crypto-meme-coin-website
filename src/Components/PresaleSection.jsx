import React from "react";
import img from "../Assets/img/presale img.png";

const PresaleSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4 font-bold mb-8 text-center text-black font-tillana">
        <span className="text-xl md:text-5xl">🧠</span> Hilarious Harry Presale 
        <span className="text-xl md:text-5xl">🧠</span>
      </h1>

      {/* Image */}
      <div className="relative mb-8">
        <img
          src={img}
          alt="Hilarious Harry Presale"
          className="w-[12.6rem] h-[13rem] sm:h-[15.6rem] sm:w-[15rem] rounded-full object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-center max-w-lg text-base sm:text-lg text-black mb-8 font-pragati">
        Because you’re tired of the same old crypto jargon and serious faces.
        You want something fresh, fun, and just a little bit cheeky. Plus, who
        doesn’t want a coin that roasts its holders? We keep you entertained
        while you ride the market waves—just don’t say we didn’t warn you.
      </p>

      {/* Button */}
      <button className="bg-orange hover:bg-lightYellow text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg border-2 border-orange-600 transition duration-300 font-pragati">
        View Hilarious Harry Presale Alert
      </button>
    </div>
  );
};

export default PresaleSection;
