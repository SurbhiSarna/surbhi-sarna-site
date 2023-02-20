import React from 'react';
import healingImage from '../../assets/images/healing-image.jpg';
import leftquote from '../../assets/svg/lquote.svg';
import rightquote from '../../assets/svg/rquote.svg';
import { Link } from 'react-router-dom';

const SplitImageText = (props) => {

    console.log(props)

    return (
        <div className="bg-green-100 grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
        <div
          style={{
            backgroundImage: `url(${healingImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
          className="flex justify-center items-center h-5/6"
        >
          <p className="mx-auto text-slate-200 text-lg font-bold px-20">
            <span>
              <img className="w-4" src={leftquote} alt="Left Quote Sign" />
            </span>
            “You have the power to heal your life, and you need to know that. We think so often that
            we are helpless, but we’re not. We always have the power of our minds. Claim and
            consciously use your power.”
            <span className="flex justify-end">
              <img
                className="w-4 right-0"
                src={rightquote}
                alt="Left Quote Sign"
              />
            </span>
            <br />- Louise Hay
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 md:p-24 text-xl md:text-2xl text-white font-semibold leading-8 text-slate-600">
            My work as a healer is to shine the light on your journey and
            empower you to claim back your power. The unfolding miracles of
            change, hope and transformation that I see in my clients are
            treasures that I receive along the way.
          </p>
          <Link to="/about">
              <button 
                  className="focus:outline-none focus:shadow-outline bg-white text-slate-600 font-bold py-2 px-12 rounded-full hover:text-white hover:bg-slate-600 border-slate-700"
              >
                  Learn More
              </button>
          </Link>
        </div>
      </div>
    );
};

export default SplitImageText;
    