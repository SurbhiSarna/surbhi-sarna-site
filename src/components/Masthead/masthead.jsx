// Homepage Masthead Component for the website

import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDOM from "react-dom";

const Masthead = (props) => {

    const { type, quote, author, lquote, rquote, imageurl, imageurlmobile } = props.props;

    let mastheadcontent;

    if(type === "quote"){
        mastheadcontent =
        <div 
        className="-mt-16 h-screen bg-center bg-no-repeat bg-cover" 
        style={{ 
            backgroundImage: `url(${imageurl})`,
            backgroundSize: "cover",
        }}>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-2xl text-white font-bold px-5 md:px-10 md:text-4xl max-w-7xl">
                    <span><img className="w-4 md:w-8 my-4" src={lquote} alt="Left Quote Sign" /></span>
                        <ReactMarkdown children={quote} />
                    <span className="flex justify-end"><img className="w-4 md:w-8 mt-4 right-0" src={rquote} alt="Left Quote Sign" /></span>
                </h1>
                <p className="text-white text-2xl p-4 md:px-10 font-semibold">{author}</p>
            </div>
        </div>
    } else if(type === "image"){
        mastheadcontent =
        <div>
            <div 
                className="-mt-12 h-screen bg-center bg-no-repeat bg-cover hidden md:block" 
                style={{ 
                    backgroundImage: `url(${imageurl})`,
                    backgroundSize: "cover",
                }}>
            </div>
            <div 
                className="-mt-12 h-screen bg-center bg-no-repeat bg-cover block md:hidden" 
                style={{ 
                    backgroundImage: `url(${imageurlmobile})`,
                    backgroundSize: "cover",
                }}>
            </div>
        </div>
    }


    return (
        <>
            {mastheadcontent}
        </>
    )
}

export default Masthead;