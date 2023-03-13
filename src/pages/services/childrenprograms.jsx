import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/kidsprograms.jpg";

const Childrenprograms = () => {
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
            Children Programs
          </h1>
        </div>
      </div>
      <div
        id="programs"
        className="max-w-7xl mx-auto py-12 md:py-20 border-t-2 px-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              The demands and pressures that children face today are
              unparalleled. There are rising cases of depression, violence,
              bullying, suicide and anxiety in children as young as five. It is
              imperative that we also focus on the mental, emotional and
              spiritual needs of children.
              <br />
              <br />I offer several programs and workshops for children focused
              on social emotional skills such as building confidence,
              understanding and managing emotions, being mindful, connecting
              with nature, practicing kindness and gratitude and building better
              habits. I use storytelling extensively in each program.
            </p>
            <ul className="list-inside text-lg md:text-xl text-slate-600 mb-4 list-none">
              <li className="py-2">
                <span className="font-semibold">Confidence and emotions:</span>{" "}
                8 session program to develop emotional intelligence and boost
                confidence and learn life skills; for 5-10 years old
              </li>
              <li className="py-2">
                <span className="font-semibold">Habits &amp; happiness:</span> 8
                session program on developing age appropriate good mental and
                emotional habits; for 5-10 years old
              </li>
              <li className="py-2">
                <span className="font-semibold">Connect with roots:</span> 8
                session program to connect with our cultural and spiritual
                roots, understand our heritage and traditions; for 8-12 year
                olds
              </li>
              <li className="py-2">
                <span className="font-semibold">Grow your happiness:</span> 5
                session program based on the science of happiness to develop
                resilience, deal with stress and enhance positive emotions; for
                teens
              </li>
              <li className="py-2">
                <span className="font-semibold">
                  Create &amp; heal with stories:
                </span>{" "}
                5 session program on how to write a healing story and to devise
                creative ways of dealing with problems; for teens
              </li>
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

export default Childrenprograms;
