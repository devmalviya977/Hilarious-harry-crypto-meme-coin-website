import React from "react";
import brickWall from "../../Assets/img/wall img.png"; // Update the path to your image

const HeroSection = () => {
  return (
    <div className="bg-[#F8EABA] pt-24">
      <div className="relative">
        {/* Wall Image */}
        <img
          src={brickWall}
          alt="Brick Wall Background"
          className="w-full h-[200px] md:h-auto object-cover object-center"
        />

        {/* Text Overlay Section with Blur and Transparent Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white bg-opacity-60 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 drop-shadow-lg shadow-black font-tillana">
              Hilarious Harry: <br />
              A Journey of Laughter <br /> and Friendship
            </h1>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 justify-center">
        <button className="bg-lightYellow hover:bg-yellow-600  border-2 border-orange text-black font-bold py-2 px-4 rounded-full flex items-center space-x-2">
          <span>Whitepaper</span>
          <span> ➔</span>
        </button>
        <button className="bg-orange hover:bg-orange-600 border-2 border-lightYellow text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
          <span>Join Us</span>
          <span> ➔</span>
        </button>
      </div>

      {/* Description Section */}
      <div className="mt-8 px-4 text-center text-black max-w-2xl mx-auto">
        <p className="text-base md:text-lg font-pragati">
          Hilarious Harry stands out not just as a token name, but as a symbol
          of fun and innovation. As we venture into the realms of blockchain
          technology, Harry embodies the spirit of community, creativity, and,
          most importantly, laughter.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
