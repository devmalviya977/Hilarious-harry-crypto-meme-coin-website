import React from "react";
import topmemsani from "../Assets/img/Herosection.png";
import putinimg from "../Assets/img/meme.svg";
import union from "../Assets/img/union.svg";
import opps from "../Assets/img/opps.svg";

const MemesSection = () => {
  return (
    <section
      className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 flex md:flex-1 flex-col items-center gap-0 mt-20"
      style={{ width: "auto", height: "auto" }}
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl  leading-tight text-center font-comic font-bold text-black mb-8">
      <span className="text-xl md:text-5xl">👹</span> Top Hilarious Memes <span className="text-xl md:text-5xl">👹</span>
        <br />
        by Harry
      </h2>
      
      {/* Meme Card */}
      <div className="flex items-center justify-center mt-10 sm:mt-20">
        <div
          className="relative z-10 bg-white w-[280px] max-w-[906px] md:w-[650px] sm:w-[525px] lg:w-[906px] xl:w-[906px] md:h-[327px] sm:h-[250px] h-[450px] flex md:flex-1 flex-col lg:flex-none items-center justify-center rounded-[30px] border-orange-500 border-4 border-b-[12px] border-l-[12px] p-4 shadow-lg"
          style={{ top: "20px" }}
        >
          {/* "Oops" Sticker */}
          <div className="absolute sm:-top-[100px] sm:-left-[110px] -top-[68px] -left-[74px] z-0">
            <img
              src={opps}
              alt="Oops Sticker"
              className="sm:w-[185px] sm:h-[185px] md:w-[200px] md:h-[200px] w-[130px]"
            />
          </div>
        
          {/* Meme Image */}
          <div className="absolute md:flex-1 flex-col left-4 right-4 top-6">
            <img
              src={putinimg}
              alt="Hilarious Meme"
              className="md:w-[457px] max-w-[457px] h-auto sm:w-[300px] w-[220px] sm:h-auto object-cover ml-0 sm:ml-4 rounded-md"
            />
          </div>

          {/* "Union" Sticker */}
          <div className="absolute mt-[14rem] -top-4 sm:-top-[12rem] sm:right-2 md:-top-[14rem] md:right-4 lg:-top-[12rem] lg:right-[10rem] md:flex-1 flex-col">
            <img
              src={union}
              alt="Union Sticker"
              className="w-[150px] md:w-[208px] h-auto"
            />
          </div>

          {/* Astronaut Animation */}
          <div className="absolute sm:top-20 -bottom-6 md:flex-1 flex-col right-5 sm:-right-6 md:-right-8 lg:-right-10">
            <img
              src={topmemsani}
              alt="Cool Sticker"
              className="w-[10rem] mb-8  md:w-[280px]  lg:w-[15rem] lg:mr-10 lg:mb-14 h-auto m-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemesSection;
