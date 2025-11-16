import React from "react";
import aboutimg from "../../Assets/img/About.svg";

const AboutMission = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex flex-col max-w-5xl p-4 gap-0">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-0">
          {/* About and Title Section */}
          <div className="flex flex-col lg:flex-row gap-0 lg:w-2/3">
            <div className="bg-lightYellow flex items-center justify-center text-center font-bold text-2xl sm:text-3xl md:text-4xl text-black h-40 sm:h-60 w-full lg:w-[44rem]">
            Hilarious mission
            </div>
          
          </div>
          {/* Image Section */}
          <div className="bg-amber-800 flex items-center justify-center text-center font-bold text-xl sm:text-2xl md:text-4xl text-black h-40 sm:h-60 w-full lg:w-[22rem]">
            <img src={aboutimg} alt="About Hilarious Harry" className="w-[15rem] sm:max-w-[30rem] h-auto object-contain" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Story Section */}
          <div className="bg-orange p-4 sm:p-6 flex items-center justify-center text-white lg:w-full">
            <p className="text-center text-base sm:text-lg font-pragati">
              <span className="font-bold text-lg sm:text-2xl italic font-tillana">
                Once upon a time, Hilarious Harry,
              </span>
              <br />
              The king of sarcasm, decided to shoot for the stars—literally.
              Tired of roasting earthlings, he signed up for astronaut training,
              figuring that space would give him new material. After all, what
              better place to perfect his witty comebacks than in the vacuum of
              space, where no one can hear you scream—or roll their eyes? Now,
              he's the first astronaut to orbit the Earth while simultaneously
              roasting it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
