// Testimonials Slider using React Awesome Slider

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";
import "./styles.css";

const sliderConfiguration = {
  gap: 50,
  perView: 1,
  startAt: 0,
  type: "slider",
};

const TestimonialsSlider = () => {
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    return () => slider.mount();
  }, [slider]);

  return (
    <>
      {" "}
      <div className="bg-yellow-50 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-violet-700">
              What People Say
            </h2>
            <p className="text-lg md:text-xl text-violet-700 my-4 font-bold">
              Testimonials
            </p>
          </div>
        </div>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide text-emerald-700 px-8 font-bold">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#059669" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 3c-5.252 1.039-9 4.905-9 10.609v7.391h9.983v-10h-3.983c0-2.211 1.563-4.932 3.996-5.849l-.996-2.151zm14 0c-5.252 1.039-8.983 4.905-8.983 10.609v7.391h9.983v-10h-4c0-2.211 1.563-4.932 3.995-5.849l-.995-2.151zm-.567 1.156l.241.52c-2.394 1.391-3.674 4.159-3.674 6.324v1h4v8h-7.983v-6.391c0-4.687 2.82-8.248 7.416-9.453m-14-.001l.241.521c-2.394 1.391-3.674 4.159-3.674 6.324v1h3.983v8h-7.983v-6.391c0-4.686 2.827-8.247 7.433-9.454"/></svg>
                <span className="mx-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br /><br />
                  - John Doe
                </span>
              </li>
              <li className="glide__slide text-emerald-700 px-8 font-bold">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#059669" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 3c-5.252 1.039-9 4.905-9 10.609v7.391h9.983v-10h-3.983c0-2.211 1.563-4.932 3.996-5.849l-.996-2.151zm14 0c-5.252 1.039-8.983 4.905-8.983 10.609v7.391h9.983v-10h-4c0-2.211 1.563-4.932 3.995-5.849l-.995-2.151zm-.567 1.156l.241.52c-2.394 1.391-3.674 4.159-3.674 6.324v1h4v8h-7.983v-6.391c0-4.687 2.82-8.248 7.416-9.453m-14-.001l.241.521c-2.394 1.391-3.674 4.159-3.674 6.324v1h3.983v8h-7.983v-6.391c0-4.686 2.827-8.247 7.433-9.454"/></svg>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br /><br />
                - John Doe
              </li>
              <li className="glide__slide text-emerald-700 px-8 font-bold">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#059669" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 3c-5.252 1.039-9 4.905-9 10.609v7.391h9.983v-10h-3.983c0-2.211 1.563-4.932 3.996-5.849l-.996-2.151zm14 0c-5.252 1.039-8.983 4.905-8.983 10.609v7.391h9.983v-10h-4c0-2.211 1.563-4.932 3.995-5.849l-.995-2.151zm-.567 1.156l.241.52c-2.394 1.391-3.674 4.159-3.674 6.324v1h4v8h-7.983v-6.391c0-4.687 2.82-8.248 7.416-9.453m-14-.001l.241.521c-2.394 1.391-3.674 4.159-3.674 6.324v1h3.983v8h-7.983v-6.391c0-4.686 2.827-8.247 7.433-9.454"/></svg>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br /><br />
                - John Doe
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center justify-center pt-5">
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left focus:outline-none focus:shadow-outline bg-white text-emerald-600 font-bold py-2 px-6 rounded-full hover:text-white hover:bg-emerald-600 border-emerald-700" data-glide-dir="<">
                Prev
              </button>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--right focus:outline-none focus:shadow-outline bg-white text-emerald-600 font-bold py-2 px-6 rounded-full mr-4 hover:text-white hover:bg-emerald-600 border-emerald-700" data-glide-dir=">">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSlider;
