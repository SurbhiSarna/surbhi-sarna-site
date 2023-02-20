// Homepage Masthead Component for the website

import React from "react";
import MastheadImage from "../../assets/images/meditationcircle-masthead.jpg";
import leftquote from "../../assets/svg/lquote.svg";
import rightquote from "../../assets/svg/rquote.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

const MeditationCircleComponent = () => {
  return (
    <div className="bg-white grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
      <div
        style={{
          backgroundImage: `url(${MastheadImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
        className="flex justify-center items-center h-5/6"
      >
        <p className="mx-auto text-white text-lg md:text-xl font-bold px-20">
          <span>
            <img className="w-4" src={leftquote} alt="Left Quote Sign" />
          </span>
          Meditation is the science of God-realization. It is the most practical
          science in the world.
          <br />
          Most people would want to meditate if they understood its value and
          experienced its beneficial effects.”
          <span className="flex justify-end">
            <img
              className="w-4 right-0"
              src={rightquote}
              alt="Left Quote Sign"
            />
          </span>
          <br />- Paramahansa Yogananda
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="p-8 md:p-16 text-xl md:text-2xl text-slate-900 font-semibold leading-8">
            Interested in meditation? Join our weekly online meditation circle where we practice guided meditation based on the teachings of Paramahansa Yogananda and scientific healing affirmations for healing of body, mind and soul. 
        </p>
        <a href="https://chat.whatsapp.com/LeKIdGcHdS6LTWqfC0r9tX" className="flex flex-row justify-center items-center focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold py-2 px-6 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600">
            <img
                className="w-6 md:w-10 pr-2"
                src={whatsapp}
                alt="WhatsApp"
            />
            Click to join WhatsApp Group
        </a>
      </div>
    </div>
  );
};

export default MeditationCircleComponent;
