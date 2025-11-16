import React from "react";
import img from "../../Assets/img/ai img.png";
import Button from "../../Components/Button";

const MissionHero = () => {
  return (
    <section className="py-20 px-5 md:pt-40 flex flex-col md:flex-row justify-around items-center">
      {/* Image for Mobile Devices */}
      <div className="md:hidden mb-6">
        <img src={img} alt="Hilarious Harry" className="w-56 max-w-xs mx-auto" />
      </div>
      
      {/* Text Content */}
      <div className="max-w-md md:mt-14 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md font-tillana">
          Hilarious Harry Dynamic Mission
        </h1>
        <p className="text-lg mb-4 font-pragati">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
        <p className="text-orange-600 font-bold font-pragati">
          ⚠️ Warning: Your ego may not survive
        </p>
        <div className="mt-6 flex flex-row space-x-4 justify-center md:justify-start">
          <Button text="Whitepaper" />
          <Button text="Join Us" />
        </div>
      </div>

      {/* Image for Desktop Devices */}
      <div className="hidden md:block">
        <img src={img} alt="Hilarious Harry" className="w-[25rem]" />
      </div>
    </section>
  );
};

export default MissionHero;
