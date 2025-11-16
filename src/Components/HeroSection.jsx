import React from "react";
import img from "../Assets/img/Herosection.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="py-20 px-10 flex flex-col lg:flex-row justify-around items-center lg:pt-28 relative overflow-hidden">
      {/* Sarcastic Meme Background */}

      {/* Circular Gradient Spots */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-orange to-lightYellow opacity-20 blur-xl md:blur-2xl animate-pulse -top-10 md:-top-20 -left-10 md:-left-20"></div>
        <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-lightYellow to-orange opacity-20 blur-xl md:blur-2xl animate-pulse -bottom-5 md:-bottom-10 right-5 md:right-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-sm md:max-w-md  lg:max-w-lg mt-12 lg:mt-10 text-center lg:text- ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xlxl font-bold mb-4  text-black drop-shadow-md font-tillana">
          Welcome to AI Hilarious Harry
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-4 text-black drop-shadow-md font-tillana">
          Think you can handle our sass? Join the most entertaining coin in the
          game.
        </p>
        <p className="text-orange-400 lg:text-xl font-bold drop-shadow-md font-pragati">
          ⚠️ Warning: Your ego may not survive
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center">
          <Button text="Whitepaper" />
          <Button text="Join Us" />
        </div>
      </div>

      {/* Image */}
      <div className="relative mt-5 lg:ml-5 z-10">
        <img
          src={img}
          alt="Hilarious Harry"
          className="w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
