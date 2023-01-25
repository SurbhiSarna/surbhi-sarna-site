// Homepage Masthead Component for the website

import React from "react";
import MastheadImage from "../../assets/images/home-masthead.jpg";

const Masthead = () => {
    return (
        <div 
            className="-mt-20 h-screen" 
            style={{ 
                backgroundImage: `url(${MastheadImage})`,
                backgroundSize: "cover", 
            }}>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-5xl text-white font-bold">Welcome to the website</h1>
                <p className="text-white text-2xl">This is the masthead</p>
                <div className="flex flex-row justify-center items-center mt-10">
                    <button className="bg-white text-violet-600 font-bold py-2 px-4 rounded-full mr-4">Button 1</button>
                    <button className="bg-violet-600 text-white font-bold py-2 px-4 rounded-full">Button 2</button>
                </div>
            </div>
        </div>
    )
}

export default Masthead;