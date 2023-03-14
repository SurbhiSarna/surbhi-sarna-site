import React, { useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/workshops.jpg";

const Workshops = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full mx-auto">
          <h1 className="text-3xl text-white font-bold px-5 md:px-10 md:text-6xl max-w-7xl uppercase">
            Workshops
          </h1>
        </div>
      </div>
      <div
        id="workshops"
        className="max-w-7xl mx-auto py-12 md:py-20 border-t-2 px-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              I offer workshops on parenting, mental health, social emotional
              learning and storytelling. Some of the workshops that I have
              offered include
            </p>
            <ul className="list-inside text-lg md:text-xl text-slate-600 mb-4 list-disc">
              <li>Storytelling as a parenting tool</li>
              <li>Art of storytelling for teachers</li>
              <li>Storytelling in the digital age</li>
              <li>Helping children study better</li>
              <li>Therapy through stories</li>
              <li>Mindfulness for children</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ring-1 ring-violet-400 mx-auto bg-violet-800">
        <p className="text-white pt-20 pb-10 text-lg md:text-2xl font-semibold max-w-xl mx-auto p-10">
          If you would like to know more about my services or would like to work
          with me, please get in touch.
        </p>
        <Link to="/contact">
          <button className="mx-auto focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold px-12 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600 text-2xl m-4 mb-10">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Workshops;
