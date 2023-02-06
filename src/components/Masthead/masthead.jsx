// Homepage Masthead Component for the website

import React from "react";
import MastheadImage from "../../assets/images/home-masthead.jpg";
import leftquote from "../../assets/svg/lquote.svg";
import rightquote from "../../assets/svg/rquote.svg";

const Masthead = () => {
    return (
        <div 
            className="-mt-20 h-screen bg-center bg-no-repeat bg-cover" 
            style={{ 
                backgroundImage: `url(${MastheadImage})`,
                backgroundSize: "cover",
            }}>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-2xl text-white font-bold px-5 md:px-10 md:text-4xl">
                    <span><img className="w-4 md:w-8 my-4" src={leftquote} alt="Left Quote Sign" /></span>
                        If you have given up hope of ever being happy, cheer up.<br/>
                        Never lose hope. Your soul, being a reflection of the ever joyous Spirit, is in essence, happiness itself.
                    <span className="flex justify-end"><img className="w-4 md:w-8 mt-4 right-0" src={rightquote} alt="Left Quote Sign" /></span>
                </h1>
                <p className="text-white text-2xl p-4 md:px-10 font-semibold">- Paramahansa Yogananda</p>
            </div>
        </div>
    )
}

export default Masthead;