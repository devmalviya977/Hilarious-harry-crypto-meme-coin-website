import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (email) {
      const templateParams = {
        user_email: email, // The email entered by the user
        to_name: "Admin", // The name of the recipient (can be customized)
        from_email: "Hilarious Harry Newsletter", // The name or title of the newsletter (optional)
      };

      emailjs
        .send(
          serviceId, // Access the service ID from the env file
          templateId, // Access the template ID from the env file
          templateParams,
          publicKey // Access the public key from the env file
        )
        .then(
          (response) => {
            console.log(
              "Email successfully sent!",
              response.status,
              response.text
            );
            setSubmitted(true);
            setError("");
            setEmail(""); // Clear the email input
          },
          (err) => {
            console.error("Failed to send email. Error:", err);
            setError("Oops! Something went wrong. Please try again.");
          }
        );
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <div className="py-10 px-6 text-center rounded-lg mt-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
        😎 Join the Most Hilarious Newsletter Ever! 😎
      </h2>
      <p className="text-gray-700 mb-6">
        Seriously... What are you waiting for? Don’t you want AI-powered updates
        from a coin that’s probably funnier than your last Google search? Enter
        your email and get ready to be ‘nourished’ with everything hilarious
        harry.
      </p>

      {submitted ? (
        <p className="text-green-600 font-semibold">
          Congrats! Now sit back and wait for some AI-powered goodness to hit
          your inbox. Stay curious... 😏
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center space-x-3"
        >
          <input
            type="email"
            placeholder="Your email (Yes, we actually need this!)"
            className="p-3 rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out 
             text-[12px] sm:text-lg md:text-xl lg:text-xl"
          >
            Yeah, I’m In!
          </button>
        </form>
      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <p className="text-gray-500 text-sm mt-4">
        P.S. – We promise not to spam... unless you count hilarious memes as
        spam. 🤷‍♂️
      </p>
    </div>
  );
};

export default NewsletterSection;
