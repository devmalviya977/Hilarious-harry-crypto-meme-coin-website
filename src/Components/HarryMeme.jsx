import React from 'react';
import img1 from "../Assets/img/meme1.png";
import img2 from "../Assets/img/meme2.png";
import img3 from "../Assets/img/meme3.png";

const HarryMeme = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white pb-14 px-5">
      
      <div className="w-full flex flex-col md:flex-row gap-3">
        <img
          src={img1}
          alt="Hilarious Harry Meme 1"
          className="rounded-lg shadow-lg w-full md:w-[25%] h-auto"
        />
        <img
          src={img2}
          alt="Hilarious Harry Meme 2"
          className="rounded-lg shadow-lg w-full md:w-[49%] h-auto"
        />
        <img
          src={img3}
          alt="Hilarious Harry Meme 3"
          className="rounded-lg shadow-lg w-full md:w-[25%] h-auto"
        />
      </div>
    </section>
  );
};

export default HarryMeme;
