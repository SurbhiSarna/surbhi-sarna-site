import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ContactRedirectButton = () => {
  return (
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
  );
};

export default ContactRedirectButton;
