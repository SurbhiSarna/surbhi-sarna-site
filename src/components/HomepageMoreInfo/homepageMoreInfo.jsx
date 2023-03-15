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
            <ul className="text-lg md:text-xl text-left md:w-1/2 px-2 py-8 md:p-20">
                <li className='my-2'>🟣&nbsp;&nbsp;<Link to="/services/counselling" className='font-semibold text-violet-800 hover:text-violet-900 hover:underline pb-2'>Counselling and Coaching</Link></li>
                <li className='my-2'>🟣&nbsp;&nbsp;<Link to="/services/pranic" className='font-semibold text-violet-800 hover:text-violet-900 hover:underline'>Pranic Healing</Link></li>
                <li className='my-2'>🟣&nbsp;&nbsp;<Link to="/services/parentingguidance" className='font-semibold text-violet-800 hover:text-violet-900 hover:underline'>Parenting Guidance</Link></li>
                <li className='my-2'>🟣&nbsp;&nbsp;<Link to="/services/childrenprograms" className='font-semibold text-violet-800 hover:text-violet-900 hover:underline'>Programs for Children and Teens</Link></li>
                <li className='my-2'>🟣&nbsp;&nbsp;<Link to="/services/workshops" className='font-semibold text-violet-800 hover:text-violet-900 hover:underline'>Workshops</Link></li>
                <li className='my-2'>🟣&nbsp;&nbsp;<Link to="/storytelling" className='font-semibold text-violet-800 hover:text-violet-900 hover:underline'>Storytelling</Link></li>
              </ul>
          </div>
          <Link to="/contact">
              <button className="focus:outline-none focus:shadow-outline border-emerald-600 bg-emerald-600 text-xl text-white font-bold py-4 rounded-full cursor-pointer hover:text-white hover:bg-emerald-800 mb-12">
                  Work with Me
              </button>
          </Link>
      </div>
    );
};

export default HomepageMoreInfo;
    