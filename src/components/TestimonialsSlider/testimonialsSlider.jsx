// Testimonials Slider using React Awesome Slider

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";
import "./styles.css";
import testimonialBg from "../../assets/images/testimonial-bg-2.png";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const sliderConfiguration = {
  gap: 50,
  perView: 1,
  startAt: 0,
  type: "slider",
  swipeThreshold: 80,
  autoplay: 5000,
  hoverpause: true,
};

const TestimonialsSlider = () => {
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    slider.mount();
  }, [slider]);

  const testimonialQuotes = [
    {
      quote: "I felt so good in just one session and felt as if I was taking to a person who is very close to me and who understands me. Thank you so much for your time and making me understand.",
      author: "SB, Chandigarh"
    },
    {
      quote: "You are really good at your work. Your unique approach has boosted my confidence. I could connect with myself coming out of my cocoon.",
      author: "PD, Hyderabad"
    },
    {
      quote: "Surbhi did my sister’s healing. She took the time to understand the patient holistically and then worked on her with so much love and care. She followed up regularly and reassured. So much gratitude for her.",
      author: "MS, Mumbai"
    },
    {
      quote: "I had a swollen foot and acute pain. I was under medication for around 25 days but recovering very slowly. Healing helped me to recover very fast and the pain has almost vanished. Thanks.",
      author: "SM, Bhubaneswar"
    },
    {
      quote: "My relationship with my daughter is much better after she had a session with you. With your gentle yet deep conversation, you helped me with the realization that she is a child who goes more with the flow and her sensitivity is her biggest strength. Thank you.",
      author: "RA, Delhi"
    },
  ]


  return (
    <>
      {" "}
      <div className="bg-purple-900 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="my-5 text-2xl md:text-4xl font-bold text-slate-100">
              What People Say
            </h2>
          </div>
        </div>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
                  {testimonialQuotes.map((quote, index) => {
                    return (
                      <div key={index}>
                        <li className="glide__slide mt-6 flex flex-col justify-center items-center" 
                            style={{ 
                              backgroundImage: `url(${testimonialBg})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                          }}>
                          <p className="p-4 font-bold text-slate-200 text-xl md:text-3xl">{quote.quote}</p>
                          <p className="p-2 font-semibold text-slate-300 text-lg md:text-xl">- {quote.author}</p>
                        </li>
                      </div>
                    )
                  })}
            </ul>
          </div>
          <div className="my-5 flex flex-row items-center justify-center pt-5">
            <div className="glide__arrows" data-glide-el="controls">
              <button className="mx-4 md:mx-16 glide__arrow glide__arrow--left focus:outline-none focus:shadow-outline bg-white text-slate-600 font-bold py-2 px-6 rounded-full hover:text-white hover:bg-slate-600 border-slate-700" data-glide-dir="<">
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="mx-4 md:mx-16 glide__arrow glide__arrow--right focus:outline-none focus:shadow-outline bg-white text-slate-600 font-bold py-2 px-6 rounded-full mr-4 hover:text-white hover:bg-slate-600 border-slate-700" data-glide-dir=">">
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSlider;
