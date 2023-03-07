import React from "react";
import surbhiimage2 from "../../assets/images/surbhi-image2.jpg";
import surbhiimage3 from "../../assets/images/surbhi-image3.jpg";
import backgroundImage from "../../assets/images/background.jpg";
import testimonialBg from "../../assets/images/testimonial-bg.png";

const AboutPageContent = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white pt-6 sm:pt-10 lg:overflow-visible">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 p-4">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:p-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mx-auto">
              About Me
            </h1>
          </div>
        </div>
        <div className="md:-mt-12 md:-ml-12 md:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-full max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 md:w-[57rem]"
            src={surbhiimage2}
            alt="Surbhi Image"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-xl p-4">
              <p>
                Often times one hears storytellers say that they did not chose
                the story, the story chose them. In life too there are some
                things which chose you or call you. The path that I had
                envisioned for myself was the conventional beaten down track but
                life has its own mysterious ways. This is my story of how I
                became a healer.
                <br />
                <br />
                I grew up in Ambala, a small town in Haryana. Looking back I can
                see the invisible threads and undercurrents which were silently
                working on me and shaping my path. Stories, imagination and
                spirituality were weaving and working on a harmonious pattern
                right from my childhood.
                <br />
                <br />
                As a four year old I vividly recall looking at the sky and
                imaging my favourite Deity emerge from the clouds and my four
                year old mind questioning about creation, about life and death.{" "}
                <br />
                <br />
                Another favourite memory is my father’s voice holding me rapt
                with stories of giants, fairies, talking animals, gods and
                goddesses. <br />
                <br />
                The world of fantasy receded as I grew up. I did my
                post-graduation in Biochemisty and went to Germany to further
                pursue a PhD. Little did I know the inexplicable sadness and
                emptiness that was waiting for me there. Everything was perfect,
                I was successful in the eyes of the world and yet I had never
                been so unhappy before. <br />
                <br />
                The inner turmoil and confusion continued for three years until
                one day in my meditation, I had a profound epiphany- that this
                was not my destiny. I quit my PhD and decided to look for
                meaning and purpose. Where was life supposed to take me? What
                was my path? <br />
                <br />
                The journey of finding my destiny was not just an outward one
                littered with new experiences but also an inner one, where I was
                getting to know what makes me, ‘me’. The tapestry of life is
                woven by experiences, beliefs, feelings, images and words.
                Everything is creating you, adding to you and adding to life.
                The path of becoming a healer combining modern psychology,
                stories and pranic healing was happening bit by bit, invisibly.{" "}
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
        className="bg-violet-800"
      >
        <p className="max-w-2xl mx-auto text-center p-32 font-semibold text-white text-xl md:text-2xl">
          Stories showed me the way. At each step they guided me and led me to a
          very fulfilling inner journey of discovering, adding and recreating
          myself.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center mt-2 p-4 mx-auto max-w-7xl">
          <img
            className="lg:w-1/2 rounded-xl shadow-xl ring-1 ring-gray-400/10 -rotate-6 w-4/6"
            src={surbhiimage3}
            alt="Surbhi Image"
          />
          <p className="text-md font-semibold font-sans md:text-left md:text-lg text-slate-700 md:ml-8 p-8 lg:w-1/2 text-center">
            My first step of self discovery began when I wrote a children’s
            story. That led me into becoming a storyteller. As I started telling
            stories, I began to learn about children, mental health, emotions
            and about life through the stories I told. This carried me further
            into the field of psychology. However when I studied psychology I
            could see the gaps which psychology could not adequately address. As
            a storyteller I was acutely aware of the energetic exchange that
            takes place between teller and listener, of how stories are
            containers of energy and how our interactions with the world are
            shaped by energies. I stumbled upon pranic healing and started
            applying that in my work.
            <br />
            <br />
            And then gradually it all started to make sense: stories, psychology
            and pranic healing. The thread that was weaving and bringing it all
            together was healing. Be it telling stories, counselling people or
            doing energy work for my clients: the common denominator is my
            passion for healing and helping others to feel whole and connected
            to their soul.
            <br />
            <br />
            The tapestry was being woven all along but until the pattern is
            revealed, it just feels messy and meaningless. In retrospect I can
            connect the dots today and feel everything making sense. I can see
            how the threads of science, psychology, healing, stories and
            spirituality came together and interwove a distinct path for me. And
            because of such a unique background, I feel strongly equipped to
            serve the needs of my clients in a comprehensive and holistic way.
            Along the way I discovered my greatest joy: to bring healing to
            others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
