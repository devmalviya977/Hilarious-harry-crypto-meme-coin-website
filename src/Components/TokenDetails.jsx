import React from 'react';
import { FaCalendarAlt, FaCoins, FaPercent } from 'react-icons/fa';

const TokenDetails = () => {
  return (
    <div className="bg-gradient-to-r from-bg-none font-tillana py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-black mb-10">
        <span className="text-xl md:text-5xl">🫠</span> Token Sale Details <span className="text-xl md:text-5xl">🫠</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-pragati gap-8 text-center md:text-left">
          {/* Pre-Sale Start */}
          <div className="bg-lightYellow bg-opacity-50 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaCalendarAlt className="text-orange text-2xl" />
              <h3 className="text-lg md:text-xl font-bold text-black">Pre-Sale Start</h3>
            </div>
            <p className="text-black mt-2 text-sm md:text-base">Dec 22nd 2024 (12:00 AM UTC)</p>
            <hr className="border-t border-t-orange my-4" />
            <div className="space-y-2">
              <p className="text-sm md:text-lg font-semibold text-black">Number of Tokens</p>
              <p className="text-black">10000000000000</p>

              <p className="text-sm md:text-lg font-semibold text-black">Tokens for Presale</p>
              <p className="text-black">3000000000000</p>
            </div>
          </div>

          {/* Pre-Sale End */}
          <div className="bg-amber-950 bg-opacity-80 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaCalendarAlt className="text-lightYellow text-2xl" />
              <h3 className="text-lg md:text-xl font-bold text-white">Pre-Sale End</h3>
            </div>
            <p className="text-white mt-2 text-sm md:text-base"> Jan 2nd 2025 (12:00 AM UTC)</p>
            <hr className="border-t border-t-lightYellow my-4" />
            <div className="space-y-2">
              <p className="text-sm md:text-lg font-semibold text-white"> Tokens Name </p>
              <p className="text-white">HIHA</p>

              <p className="text-sm md:text-lg font-semibold text-white">Tax on Each Transaction</p>
              <p className="text-white text-2xl">
                0 <FaPercent className="inline text-lightYellow" />
              </p>
            </div>
          </div>

          {/* Other Details */}
          <div className="bg-lightYellow bg-opacity-50 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaCoins className="text-orange text-2xl" />
              <h3 className="text-lg md:text-xl font-bold text-black">Acceptable Currencies</h3>
            </div>
            <p className="text-black mt-2 text-sm md:text-base">SOL</p>
            <hr className="border-t border-t-orange my-4" />
            <div className="space-y-2">
              <p className="text-sm md:text-lg font-semibold text-black">Minimal Transaction Amount</p>
              <p className="text-black"> 0.1 SOL</p>

              <p className="text-sm md:text-lg font-semibold text-black">Max Transaction Amount</p>
              <p className="text-black">1 SOL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
