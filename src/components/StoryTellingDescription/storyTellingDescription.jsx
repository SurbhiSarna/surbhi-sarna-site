import React from "react";
import {Link} from 'react-router-dom';
import surbhiimage4 from "../../assets/images/surbhi-image4.jpg";
import surbhiimage5 from "../../assets/images/surbhi-image5.jpg";

const StoryTellingDescription = (props) => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-12 md:py-16 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-violet-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl pb-10">
                <span className="block">
                  Can you imagine a world devoid of stories?
                </span>
              </h2>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl pb-10">
                <span className="block">
                  The very meaning of life would fly out
                </span>
              </h2>
              <p className="mt-3 text-xl text-semibold font-sans text-slate-700 m-2 md:m-4">
                <span className="font-semibold">
                  Stories shape us and much of the world around us. For me
                  personally they have been the guideposts on my journey of
                  self-discovery. The metaphors, the imagery, the fantasy land,
                  the characters- they have all revealed hidden aspects of
                  myself and guided me on my journey. Through stories I have
                  been able to make sense of myself and the world around me.
                </span>
                <br />
                <br />
                And perhaps it is this power of stories that make them so
                profound and an indispensable part of our lives. I feel
                fortunate to have witnessed this power first hand when I began
                telling stories to children some eight years back. I have seen
                stories work their magic on not just kids but even adults. I can
                safely say that stories lighten our hearts, heal our wounds,
                restore a sense of purpose and fill our life with joy.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center md:mt-10 p-10 mx-auto max-w-7xl">
        <img
          className="w-4/5 lg:w-2/5 rounded-xl shadow-xl ring-1 ring-violet-400 -rotate-6 p-2 m-12"
          src={surbhiimage4}
          alt="Surbhi Image"
        />
        <p className="text-lg font-semibold font-sans md:text-left md:text-xl text-slate-700 md:ml-8 md:p-8 lg:w-1/2 text-center">
          I have come to visualize stories as containers of life energies.
          Engaging with a story can unleash our own life energies and bring
          about what we need. Stories tap into our subconscious mind releasing
          memories, images and emotions.
          <br />
          <br />
          The help that stories give is multifaceted. They can serve as guides
          to bring insights into our problems, bridges to help us form
          meaningful connections, food to nourish our emotions and mind and
          tonic to rejuvenate our inner life. In sharing stories I experience
          that the teller, listener and the space in between, all become touched
          by joy and wonder.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-2 md:p-10 mx-auto max-w-7xl">
        <span className="text-lg font-semibold font-sans md:text-left md:text-xl text-slate-700 md:ml-8 md:p-8 lg:w-1/2 text-center">
          I use storytelling both in my counselling practice as well in group
          settings. I have told stories to children, teenagers and adults. I
          have designed and conducted social emotional learning and mental
          health programs using stories for various age groups. 
          Be it working
          individually with a client or telling stories to a group, stories are
          potent healing sources that serve us according to our need.
          <br />
          <br />
          If you would like to experience the power of story as an individual or
          if you would like to bring stories to your classroom or organisation,
          please get in touch with me. 
          <br />
          <br />
        </span>
        <img
          className="w-4/5 lg:w-2/5 rounded-xl shadow-xl ring-1 ring-violet-400 rotate-6 p-1 m-12 flex-1"
          src={surbhiimage5}
          alt="Surbhi Image"
        />
      </div>
      <Link to="/contact">
          <button 
              className="mx-auto focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold px-12 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600 text-2xl"
          >
            Contact Me
          </button>
      </Link>
    </div>
  );
};

export default StoryTellingDescription;