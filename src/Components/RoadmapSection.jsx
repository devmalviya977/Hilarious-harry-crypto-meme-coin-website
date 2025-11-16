import React from 'react';
import img from '../Assets/img/roadmap.svg';

const RoadmapSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Title Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4 font-tillana">
      <span className="text-xl md:text-5xl">😎</span> The Hilarious Roadmap<span className="text-xl md:text-5xl">😎</span>
      </h1>
      <p className="text-center text-orange-500 mb-6 sm:mb-8 max-w-md sm:max-w-xl font-pragati">
        We believe in fun without limits, decentralization without compromise, and a community that thrives on memes.
      </p>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center space-y-10 sm:space-y-16">
        {/* Timeline SVG */}
        <img 
          src={img} 
          alt="Roadmap" 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
        />
      </div>
    </div>
  );
};

export default RoadmapSection;
