import React from "react";
import backgroundImage from "../../assets/images/councellingcoaching.jpg";

const ServicesContent = () => {

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "70vh",
                }}
            >
                <div className="flex flex-col justify-center items-center h-full mx-auto">
                    <h1 className="text-2xl text-white font-bold px-5 md:px-10 md:text-4xl max-w-7xl uppercase">
                        {/* {heading} */}
                    </h1>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center h-full mx-auto">
                <h1 className="text-xl text-slate-700 font-bold px-5 md:px-10 md:text-2xl max-w-7xl md:w-1/3">
                    Counselling and Life Coaching
                </h1>
                <span className="md:w-2/3">
                    <p className="text-slate-700 text-2xl p-4 md:px-10 font-semibold">
                        I work with a wide variety of clients including parents,
                        single mothers, teenagers, and adults. I use an eclectic
                        mix of modalities such as art therapy, positive
                        psychology, acceptance and commitment therapy,
                        storytelling, guided imagery, mindfulness and energy
                        healing.
                    </p>
                </span>
            </div>
        </div>
    );
};

export default ServicesContent;
