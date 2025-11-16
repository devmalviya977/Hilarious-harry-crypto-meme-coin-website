import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img1 from "../Assets/img/footertele.svg";
import img2 from "../Assets/img/footerx.svg";
import img3 from "../Assets/img/footer.svg";
import { FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        alert("📬 Message sent! Harry might reply... or not! 😂");
        e.target.reset();
      },
      (error) => {
        alert("🚨 Oops! Harry's owl lost your message. Try again later. 🦉");
      }
    );

    e.target.reset();
  };

  return (
    <div className="py-10 md:my-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-tillana text-black mb-8">
          <span className="text-xl md:text-5xl">📝</span> Contact Harry{" "}
          <span className="text-xl md:text-5xl">📝</span>
        </h2>

        {/* Contact Form */}
        <div className="border-2 border-black bg-lightYellow bg-opacity-70 border-r-8 border-b-8 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
            <h3 className="text-lg md:text-2xl font-bold text-black font-tillana mb-6">
              Reach Out to Harry's Team
            </h3>

            <div className="flex flex-col md:flex-row text-center md:text-left gap-5">
              <div className="flex justify-center md:justify-start">
                <FaEnvelope className="text-black text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-sm md:text-lg font-bold text-black">
                  Email
                </h3>
                <p className="text-black text-sm md:text-md">
                  info@hilariousharry.com
                </p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 mt-6">
            <div className="text-left">
              <label className="block text-black font-semibold">
                What's Your Name? 🤔
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full placeholder:text-black border-black border-2 border-r-4 border-b-4 bg-orange rounded-lg p-3 mt-1 focus:outline-none focus:border-white"
                placeholder="Enter your hilarious name"
                required
              />
            </div>
            <div className="text-left">
              <label className="block text-black font-semibold">
                Your Email 📨
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full placeholder:text-black border-black border-2 border-r-4 border-b-4 bg-orange rounded-lg p-3 mt-1 focus:outline-none focus:border-white"
                placeholder="Where can Harry spam you?"
                required
              />
            </div>
            <div className="text-left">
              <label className="block text-black font-semibold">
                Your Message 💬
              </label>
              <textarea
                name="message"
                className="w-full placeholder:text-black border-black border-2 border-r-4 border-b-4 bg-orange rounded-lg p-3 mt-1 focus:outline-none focus:border-white"
                placeholder="Tell Harry something funny!"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-orange hover:border-orange hover:border-2 transition-all"
            >
              🚀 Send to Harry!
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-10">
          <h3 className="text-lg font-semibold text-black mb-4">
            Follow Harry's Shenanigans
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-orange hover:text-lightYellow text-2xl"
            >
              <img src={img1} alt="" className="w-8" />{" "}
              {/* Updated X (Twitter) logo */}
            </a>
            <a
              href="https://twitter.com"
              className="text-orange hover:text-lightYellow text-2xl"
            >
              <img src={img2} alt="" className="w-8" />{" "}
              {/* Updated X (Twitter) logo */}
            </a>
            <a
              href="https://linkedin.com"
              className="text-orange hover:text-lightYellow text-2xl"
            >
              <img src={img3} alt="" className="w-8" />{" "}
              {/* Updated X (Twitter) logo */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
