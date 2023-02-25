import React from 'react';
import surbhiimage1 from "../../assets/images/surbhi-image2.jpg";

const AboutPageContent = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h1>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={surbhiimage1}
            alt="Surbhi Image"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Often times one hears storytellers say that they did not chose the story, the story chose them. In life too there are some things which chose you or call you. The path that I had envisioned for myself was the conventional beaten down track but life has its own mysterious ways. This is my story of how I became a healer. 
                <br/><br/>
                I grew up in Ambala, a small town in Haryana. Looking back I can see the invisible threads and undercurrents which were silently working on me and shaping my path. Stories, imagination and spirituality were weaving and working on a harmonious pattern right from my childhood. 
                <br/><br/>
                As a four year old I vividly recall looking at the sky and imaging my favourite Deity emerge from the clouds and my four year old mind questioning about creation, about life and death. 
                Another favourite memory is my father’s voice holding me rapt with stories of giants, fairies, talking animals, gods and goddesses. 
              </p>
              <p className="mt-8">
                Growing up I had no particular wish for a specific career path. I was inclined towards biology and also doing science was just what every above average child did! So I pursued science and went to do a PhD in Germany in Biochemistry. It all looked so perfect and I was right on the so called track of success. However my heart felt blocked. I could not explain the emptiness and sadness. Or the constant feeling of being drained out when everything was perfect. I knew that perhaps this is not what I want to do but quitting a PhD was never an option. How could I when I had no clue what I wanted to do with my life? However the intense inner turmoil and sense of burden kept on increasing until it became unbearable. One day I literally had an epiphany- that this was not my destiny. I knew that I had to choose a different path. So I quit my doctoral research after three years and came back to India. My only starting point at that time was that I didn’t want to pursue science. But what exactly I wanted to do was an enigma. An enigma which I thought I will solve. This quest led me to embark on the pursuit of passion and meaning, an adventure to find out what makes me, ‘me’.
                <br/><br/>
                With a romantic conviction that life will show me the way and everything will make sense, I started out thinking that soon it will all be clear to me. Little did I realize that the tapestry of life is woven by experiences, beliefs, feelings, images and words. Everything is creating you, adding to you and adding to life. Life does make sense and works out but no one tells you what happens in the interim:  there can be a lot of steps that one has to walk on, lots of darkness, waiting, feeling lost and it can take a long long time. To create a meaningful life filled with purpose, beauty and harmony it takes lots of learning, time and effort. 
                <br/><br/>
                The path of becoming a healer combining modern psychology, stories and pranic healing was happening bit by bit, invisibly. The vessel is being shaped all along but until the vessel is made, it just feels messy and a meaningless mass of clay. That’s how I felt for the longest time until recently. In retrospect I can connect the dots and feel a surge of fulfilment at the beautiful pattern that slowly emerged. 
                <br/><br/>
                Stories showed me the way. At each step they guided me and led me to a very fulfilling inner journey of discovering, adding and recreating myself. My first step of self-discovery started by writing a children’s story. That evolved into me becoming a storyteller. I began to learn about children, about mental health, about emotions and about life through the stories I told. This carried me further into the field of psychology. However when I studied psychology I could see the gaps which psychology could not adequately address. As a storyteller I was acutely aware of the energetic exchange that takes place between teller and listener, of how stories are containers of energy and how our interactions with the world are shaped by energies. I stumbled upon pranic healing and started applying that in my work. 
                <br/><br/>
                And then gradually it all started to make sense: stories, psychology and pranic healing. The thread that was weaving and bringing it all together was healing. Be it telling stories, counselling people or doing energy work for my clients: the common denominator is my passion for healing and helping others to feel whole and connected to their soul. 
                <br/><br/>
                Though at first my journey seemed chaotic and not making sense but now with my unqiue background in science, psychology, healing and stories I feel strongly equipped to serve the various needs of my clients in a comprehensive and holistic way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPageContent;