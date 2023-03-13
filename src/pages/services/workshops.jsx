import React from "react";
import backgroundImage from "../../assets/images/workshops.jpg";

const Workshops = () => {
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
          <h1 className="text-2xl text-white font-bold px-5 md:px-10 md:text-4xl max-w-7xl uppercase">
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
    </div>
  );
}

export default Workshops;
