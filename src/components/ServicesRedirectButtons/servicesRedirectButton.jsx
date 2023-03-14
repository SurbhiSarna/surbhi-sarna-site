import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesRedirectButtons = (props) => {
  const links = props.props;

  return (
    <>
      <p className="text-slate-700 md:my-8 my-4 text-lg md:text-2xl font-semibold max-w-xl mx-auto px-10">
        Other Services I Offer
      </p>
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center max-w-7xl mb-4 md:mb-8">
        {/* map links */}
        {links.map((link) => (
            <Link to={link.href} className="m-2 md:m-4">
                <button className="mx-auto w-60 focus:outline-none focus:shadow-outline bg-emerald-600 text-white font-bold px-4 rounded-full hover:text-white hover:bg-emerald-800 border-emerald-600 text-lg">
                    {link.text}
                </button>
            </Link>
        ))}
      </div>
    </>
  );
};

export default ServicesRedirectButtons;
