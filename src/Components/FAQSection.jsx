import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is  Hilarious Harry Meme Coin?",
      answer:
        "Hilarious Harry Meme Coin is the only coin that brings the world of AI-powered memes and digital humor together! It’s a cryptocurrency designed for tech enthusiasts, meme lovers, and AI aficionados. Want to invest in AI-generated laughs? You’ve come to the right place!",
    },
    {
      question: "How do I buy Hilarious Harry Meme Coin?",
      answer:
        "Buying Hilarious Harry Meme Coin is easy! Simply visit one of our supported cryptocurrency exchanges, follow the instructions, and get started in the world of AI-driven meme fun.",
    },
    {
      question: "Is this coin actually powered by AI?",
      answer:
        "Yes! Hilarious Harry Meme Coin uses AI technology to power a network of meme generation and community engagement. It’s all about bringing AI innovation into the world of memes and online culture.",
    },
    {
      question: "Can I make a fortune with  Hilarious Harry Meme Coin?",
      answer:
        "While Hilarious Harry Meme Coin is all about fun and AI-driven humor, cryptocurrency investments can always fluctuate. Remember, while fortunes can be made, investing wisely and understanding the market is important!",
    },
    {
      question: "Is  Hilarious Harry Meme Coin a joke?",
      answer:
        "Is a toadstool a toad or a stool? Some questions will forever remain a mystery. But yes, we’re all about having fun while revolutionizing the meme economy! Wingardium Leviosa your mood with Harry Meme Coin!",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-semibold font-tillana mb-6 text-center">
        <span className="text-xl md:text-5xl">🤔</span> Frequently Asked
        Questions <span className="text-xl md:text-5xl">🤔</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-orange border-r-4 border-b-4 bg-lightYellow rounded-lg p-4 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-tillana font-medium">
                {faq.question}
              </h3>
              <button
                className="text-2xl font-bold focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`faq-content-${index}`}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <p
                id={`faq-content-${index}`}
                className="mt-2 font-pragati text-left text-black transition-opacity duration-300 ease-in-out"
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
