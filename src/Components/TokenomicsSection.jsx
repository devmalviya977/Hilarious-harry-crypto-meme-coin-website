import React from "react";
import img from "../Assets/img/tokonomic.png";

const TokenomicsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 ">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-8 text-center text-black font-tillana">
        <span className="text-xl md:text-5xl">😤</span> Hilarious Tokenomics{" "}
        <span className="text-xl md:text-5xl">😤</span>
      </h1>

      {/* Tokenomics Chart */}
      <div className="relative my-8 sm:my-12">
        <img
          src={img}
          className="w-72 sm:w-[30rem] md:w-[35rem] lg:w-[45rem] transition-all duration-300 hover:scale-105"
          alt="Tokenomics Graph"
        />
      </div>
      <h4 className="text-xl m-3 sm:text-2xl font-bold text-center font-tillana">
        Total Supply = 10 Trillion
      </h4>

      {/* Description */}
      <p className="text-center max-w-2xl text-base sm:text-lg text-gray-700 leading-relaxed px-4 font-pragati">
        RoastCoin isn’t just a coin; it’s a statement. A statement that says, ‘I
        don’t take myself too seriously, but I take my laughs very seriously.’
        Whether you’re in it for the memes or the money, we’ve got your
        back—with a side of sarcasm.
      </p>
    </div>
  );
};

export default TokenomicsSection;
