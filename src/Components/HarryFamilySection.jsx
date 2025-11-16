import React from 'react';
import treeSVG from '../Assets/img/Familytree.png';

const HarryFamilySection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-tillana font-bold">
        <span className="text-xl md:text-5xl">😮</span>  Hilarious Harry Family Members   <span className="text-xl md:text-5xl">😮</span>
        </h2>
      </div>

      {/* Tree and Family Members */}
      <div className="relative max-w-full md:max-w-4xl mx-auto">
        {/* SVG Tree */}
        <img
          src={treeSVG}
          alt="Family Tree"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HarryFamilySection;
