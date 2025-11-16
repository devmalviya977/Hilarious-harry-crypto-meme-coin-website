import React from 'react';
import logo1 from '../Assets/img/xlog.svg';
import logo2 from '../Assets/img/telegramlogo.svg';

const SocialDualButton = () => {
  return (
    <div className="flex items-center justify-center p-2 sm:p-4">
      <div className="bg-lightYellow flex items-center rounded-full overflow-hidden focus:outline-none">
        {/* Logo 1 */}
        <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 p-1 sm:p-2 md:p-3">
          <img src={logo1} alt="Logo 1" className="w-5 sm:w-6 md:w-8 lg:w-8" />
        </button>

        {/* Logo 2 */}
        <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 p-1 sm:p-2 md:p-3">
          <img src={logo2} alt="Logo 2" className="w-5 sm:w-6 md:w-8 lg:w-8" />
        </button>
      </div>
    </div>
  );
};

export default SocialDualButton;
