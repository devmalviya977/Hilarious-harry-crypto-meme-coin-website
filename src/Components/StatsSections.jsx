import React from "react";
import table from "../Assets/img/Market Update.png";

const StatsSections = () => {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-20 flex justify-center flex-col items-center">
      <div className="w-full max-w-[90%] sm:max-w-[100%]">
        <h2 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] leading-tight text-center font-comic font-bold text-black mb-8 font-tillana">
        <span className="text-xl md:text-5xl">🫡</span> Stats says it all..!! <span className="text-xl md:text-5xl">🫡</span>
        </h2>

        {/* Image Container */}
        <div className="relative flex items-center justify-center w-full">
          {/* Table Image */}
          <div className="relative z-10">
            <img
              src={table}
              alt="Market Update"
              className="w-full h-auto max-w-[40rem] sm:max-w-[35rem] md:max-w-[60rem] " // Increased size for laptop devices
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSections;
