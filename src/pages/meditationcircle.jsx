import React from "react";
import SplitImageTextwithQuotes from "../components/SplitImageTextwithQuotes/splitImageTextwithQuotes";
import Masthead from "../components/Masthead/masthead";
import MastheadImage from "../assets/images/meditationcircle-masthead.jpg";
import whatsapp from "../assets/svg/whatsapp.svg";
import leftquote from "../assets/svg/lquote.svg";
import rightquote from "../assets/svg/rquote.svg";

export default function MeditationCircle() {
  const splittext =
    "Interested in meditation? Join our weekly online meditation circle where we practice guided meditation based on the teachings of Paramahansa Yogananda and scientific healing affirmations for healing of body, mind and soul.";
  const buttontext = "Click to join WhatsApp Community";
  const buttonlink = "https://chat.whatsapp.com/GkfSlCwf5UEGcSknAzrHv5";

  const mastheadprops = {
    type: "quote",
    imageurl: MastheadImage,
    quote: `Meditation is the science of God-realization. It is the most practical science in the world. Most people would want to meditate if they understood its value and experienced its beneficial effects.`,
    author: "- Paramahansa Yogananda",
    lquote: leftquote,
    rquote: rightquote,
  };

  return (
    <div>
      <Masthead props={mastheadprops} />
      <div className="flex flex-col justify-center items-center py-12 max-w-7xl mx-auto">
        <p className="p-12 md:p-24 text-xl md:text-2xl text-slate-900 font-semibold leading-8">
          {splittext}
        </p>
        <a href={buttonlink} className="flex flex-row justify-center items-center focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold py-2 px-6 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600">
            <img
              className="w-6 md:w-10 pr-2"
              src={whatsapp}
              alt="Button Icon"
            />
            {buttontext}
        </a>
      </div>
    </div>
  );
}
