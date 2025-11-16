import React from 'react';

const Button = ({ text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className={`${style} flex items-center justify-center gap-2  px-4 sm:py-1 sm:px-3 md:py-2 md:px-4 bg-lightYellow text-black font-tillana rounded-full shadow-md transition-all duration-300 ease-in-out border-2 border-orange hover:bg-amber-400`}
    >
      <span className="text-sm sm:text-xs md:text-sm font-base">{text}</span>
      <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-orange rounded-full text-white">
        ➔
      </span>
    </button>
  );
};

export default Button;
