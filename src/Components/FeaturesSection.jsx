import React from "react";
import divider from "../Assets/img/Vector 169.svg";
import imageSrc from "../Assets/img/Herosection.png";

const FeaturesSection = () => {
  return (
    <div className="py-12 mx-10">
      <div className="mb-20">
        <img src={divider} alt="Decorative divider" className="mx-auto" />
        <h2 className="text-center text-2xl text-black sm:text-3xl md:text-4xl font-bold my-5">
          <span className="text-xl md:text-5xl">🤪</span> Why choose Hilarious Harry?{" "}
          <span className="text-xl md:text-5xl">🤪</span>
        </h2>
        <img src={divider} alt="Decorative divider" className="mx-auto" />
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 items-center">
        {/* Feature Card 1 */}
        <FeatureCard
          imageSrc={imageSrc}
          title="Hops and Cheers in Every Transaction:"
          description="Immerse yourself in the world of Hilarious Harry, where each transaction is filled with the spirit of hops and cheers. Enjoy a unique crypto journey that's both entertaining and rewarding."
        />

        {/* Feature Card 2 */}
        <FeatureCard
          imageSrc={imageSrc}
          title="Revolutionary Experience:"
          description="Experience the thrill of crypto transactions like never before. With Hilarious Harry, each interaction becomes a source of joy, laughter, and celebration. Say goodbye to mundane transactions and welcome a new era."
        />

        {/* Feature Card 3 */}
        <FeatureCard
          imageSrc={imageSrc}
          title="Hops and Cheers in Every Transaction:"
          description="Immerse yourself in the world of Hilarious Harry, where each transaction is filled with the spirit of hops and cheers. Enjoy a unique crypto journey that's both entertaining and rewarding."
        />
      </div>

      {/* Divider with Arrows */}
      <div className="mt-12 flex justify-center">
        <DashedDivider />
      </div>
    </div>
  );
};

// Card Component
const FeatureCard = ({ title, description, imageSrc }) => {
  return (
    <div className="relative rounded-lg shadow-lg p-6 text-center w-full max-w-xs lg:mx-14 lg:max-w-sm h-auto pt-12 bg-[#2C1403] opacity-60 border-t border-l border-b-8 border-r-8 border-black mt-10">
      {/* Image positioned halfway out of the card */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <img
          src={imageSrc}
          alt="Feature showcasing Hilarious Harry"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-lightYellowyellow-200 bg-white"
        />
      </div>
      <h3 className="font-bold text-lg text-white mb-4 mt-12 font-tillana">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-white font-pragati">
        {description}
      </p>
    </div>
  );
};

// Dashed Divider with Arrows SVG
const DashedDivider = () => {
  return (
    <svg
      width="300"
      height="30"
      viewBox="0 0 300 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15 H80 M100 15 H180 M200 15 H280"
        stroke="black"
        strokeWidth="2"
        strokeDasharray="6,6"
      />
      {/* Arrows */}
      <path d="M80 15 L90 10 L90 20 Z" fill="black" />
      <path d="M180 15 L190 10 L190 20 Z" fill="black" />
    </svg>
  );
};

export default FeaturesSection;
