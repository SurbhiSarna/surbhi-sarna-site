import React, { useEffect } from 'react';
import leftquote from '../../assets/svg/lquote.svg';
import rightquote from '../../assets/svg/rquote.svg';
import { Link } from 'react-router-dom';

const SplitImageTextwithQuotes = (props) => {

    const { quote, author, splittext, buttontext, buttonlink, imageurl, buttonicon, buttontype } = props.props;

    let button;
    if(buttontype == "Link") {
      button = 
      <Link to={buttonlink}>
        <button 
            className="focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold py-2 px-12 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600"
        >
            {buttontext}
        </button>
      </Link>
    } else {
      button =
        <a href={buttonlink} className="flex flex-row justify-center items-center focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold py-2 px-6 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600">
          <img
              className="w-6 md:w-10 pr-2"
              src={buttonicon}
              alt="Button Icon"
          />
          {buttontext}
        </a>
    }
    
    return (
        <div className="bg-white grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
        <div
          style={{
            backgroundImage: `url(${imageurl})`,
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
            {quote}
            <span className="flex justify-end">
              <img
                className="w-4 right-0"
                src={rightquote}
                alt="Left Quote Sign"
              />
            </span>
            <br />{author}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 md:p-24 text-xl md:text-2xl text-slate-900 font-semibold leading-8">
            {splittext}
          </p>
          {button}
        </div>
      </div>
    );
};

export default SplitImageTextwithQuotes;
    