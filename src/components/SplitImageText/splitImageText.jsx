import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SplitImageText = (props) => {

    const { quote, author, splittext, buttontext, buttonlink, imageurl } = props.props;
    
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
            {quote}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="p-5 md:p-24 text-xl md:text-2xl text-slate-900 font-semibold leading-8">
            {splittext}
          </p>
          <Link to={buttonlink}>
              <button 
                  className="focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold py-2 px-12 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600"
              >
                  {buttontext}
              </button>
          </Link>
        </div>
      </div>
    );
};

export default SplitImageText;
    