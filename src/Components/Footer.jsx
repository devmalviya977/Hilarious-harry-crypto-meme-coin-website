import React from "react";
import img1 from "../Assets/img/footertele.svg";
import img2 from "../Assets/img/footerx.svg";
import img3 from "../Assets/img/footer.svg";
import divider from "../Assets/img/dashline.svg";

const Footer = () => {
  return (
    <footer className="text-black p-4 sm:p-8">
      <div className="flex flex-col">
        <img src={divider} alt="" className="py-5" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 p-2 bg-orange  border-black border-b-8 border-r-8 border-t-2 border-l-2 rounded-lg">
          <p className="text-base sm:text-lg">All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#telegram" className="text-black text-lg">
              <img src={img1} alt="Telegram Icon" className="w-10 sm:w-12" />
            </a>
            <a href="#x" className="text-black text-lg">
              <img src={img2} alt="X Icon" className="w-10 sm:w-12" />
            </a>
            <a href="#facebook" className="text-black text-lg">
              <img src={img3} alt="Facebook Icon" className="w-10 sm:w-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
