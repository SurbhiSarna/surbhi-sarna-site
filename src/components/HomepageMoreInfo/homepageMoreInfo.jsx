import React from 'react';
import zenImage from '../../assets/images/background.jpg';
import { Link } from 'react-router-dom';

const HomepageMoreInfo = () => {

    return (
        <div style={{
          backgroundImage: `url(${zenImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div className="flex flex-col md:flex-row justify-center items-center self-center max-w-7xl mx-auto text-slate-700 font-semibold leading-8">
            <p className="text-xl md:text-2xl leading-8 md:w-1/2 px-6 py-8 md:p-12">
              I work 1:1 as well as offer group workshops and classes. My services include both online and offline mode.
            </p>
            <ul className="text-lg md:text-xl list-disc text-left md:w-1/2 px-2 py-8 md:p-20">
                <li>Counselling and Coaching</li>
                <li>Pranic Healing</li>
                <li>Workshops</li>
                <li>Social Emotional Learning</li>
                <li>Storytelling</li>
                <li>Meditation Circle</li>
              </ul>
          </div>
          <Link to="/contact">
              <button className="focus:outline-none focus:shadow-outline border-slate-700 bg-slate-700 text-xl text-white font-bold py-4 px- rounded-full cursor-pointer hover:text-white hover:bg-slate-900 mb-12">
                  Work with Me
              </button>
          </Link>
      </div>
    );
};

export default HomepageMoreInfo;
    