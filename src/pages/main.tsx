import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import BgImage from "../assets/images/first_page.png";

const TypingEffect: React.FC = () => {
  const words = [
    "Express ",
    "Logistics",
    "Parcel Tracking",
    "Fleet Management",
    "On-Time Shipping",
  ];

  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const handleTyping = setInterval(() => {
      const currentWord = words[wordIndex];
      const textLength = currentText.length;

      if (isTyping) {
        if (textLength < currentWord.length) {
          setCurrentText(currentWord.substring(0, textLength + 1));
        } else {
          setIsTyping(false);
        }
      } else {
        if (textLength > 0) {
          setCurrentText(currentWord.substring(0, textLength - 1));
        } else {
          setIsTyping(true);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, 150);

    return () => clearInterval(handleTyping);
  }, [currentText, wordIndex, isTyping]);

  return (
    <span className="bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent">
      {currentText}
      <span className="blink-cursor">|</span>
    </span>
  );
};

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
  id="home"
  className="relative w-full min-h-screen flex flex-col justify-start items-center text-center px-4 sm:px-6 md:px-8 pt-[70px] text-white overflow-hidden"
>
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <img
      src={BgImage}
      alt="Background"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  <div className="relative z-10 w-full flex flex-col items-center pb-20">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight mt-10">
      Reliable Courier Services for <TypingEffect /> Deliveries
    </h1>

    <p className="text-lg sm:text-lg md:text-2xl max-w-2xl mt-4">
      Fast, Secure, and Smart Logistics Solutions for Your Business
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-4xl px-4">
      <div className="bg-white/20 backdrop-blur-md text-green-600 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Book your shipment</h3>
        <p className="mb-4 text-center">
          Tap on the “BOOK NOW” button for booking courier slot.
        </p>
        <button
          onClick={() => navigate("/book")}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition cursor-pointer"
        >
          BOOK NOW
        </button>
      </div>

      <div className="bg-white/20 backdrop-blur-md text-blue-400 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Track your shipment</h3>
        <p className="mb-4 text-center">
          Want to know where your courier is? Tap on “TRACK”
        </p>
        <button
          onClick={() => navigate("/track")}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer"
        >
          TRACK
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 text-lg sm:text-xl text-white">
      {[
        "Over 1M Parcels Delivered",
        "Trusted by 5,000+ Businesses",
        "98% On-Time Delivery Rate",
      ].map((text, index) => (
        <div key={index} className="flex items-center gap-2">
          <CheckCircleIcon className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Main;
