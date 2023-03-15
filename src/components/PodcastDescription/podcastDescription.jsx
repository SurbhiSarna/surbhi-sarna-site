import React from "react";
import { Link } from "react-router-dom";
import podcastCover from "../../assets/images/podcast.png";
import applepodcast from "../../assets/svg/applepodcast.svg";
import spotify from "../../assets/svg/spotify.svg";
import listenapple from "../../assets/images/listenapple.jpg";
import listenspotify from "../../assets/images/listenspotify.png";

const PodcastDescription = () => {

  const alertFunction = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="relative isolate overflow-hidden bg-white py-8 md:py-10 lg:overflow-visible">
      <div className="flex flex-col lg:flex-row justify-center items-center md:mt-4 p-10 mx-auto max-w-7xl">
        <img
          className="w-4/5 lg:w-2/5 rounded-xl shadow-xl ring-1 p-2 ring-violet-400 m-8"
          src={podcastCover}
          alt="Surbhi Image"
        />
        <div className="p-2 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left text-slate-700">
            Story Zen by Surbhi Sarna
            <br />
            <br />
          </h2>
          <p className="text-xl font-semibold font-sans md:text-left md:text-2xl text-slate-700 text-center">
            <span className="leading-8">
              Magical. Mystical. Meditative.
              <br />
              Fun. Laughter. Connection.
              <br />
              Emotions. Healing. Life.
              <br />
              Fantasy. Dreams. Secrets.
            </span>
          </p>
          <div className="flex flex-row mx-auto md:mx-0 justify-center md:justify-start items-center">
            <a onClick={alertFunction} className="cursor-pointer">
              <img
                className="w-12 mt-8 mr-4 p-2 hover:ring-2 hover:rounded-xl hover:ring-purple-700"
                src={applepodcast}
                alt="Apple Podcast"
              />
            </a>
            <a onClick={alertFunction} className="cursor-pointer">
              <img
                className="w-12 mt-8 p-2 hover:ring-2 hover:rounded-xl hover:ring-purple-700"
                src={spotify}
                alt="Spotify"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-emerald-700">
        <p className="text-white pt-20 pb-10 text-lg md:text-2xl font-semibold max-w-6xl mx-auto p-10">
          Can an experience combine all of these? Story Zen is a storytelling
          podcast that brings you stories that help you experience the fullness
          of life. And the healing power of stories. Surbhi sees stories as
          containers of energy. Some contain energies of wisdom, some of joy and
          some of hope and healing. Stories can build, repair and nourish our
          life energies and help us connect to our inner self.
          <br />
          <br />
        </p>
      </div>
      <div className="mx-auto bg-white">
        <p className="text-slate-700 pt-20 pb-10 text-lg md:text-2xl font-semibold max-w-6xl mx-auto p-10">
          Nature has two fundamental processes: discarding what’s not needed and
          bringing to life new things that are needed. Stories work on us in a
          similar way. They serve to heal us by bringing to surface thoughts,
          emotions and beliefs that don’t serve us and energize us with positive
          thoughts, emotions, images and words.
          <br />
          <br />
        </p>
      </div>
      <div className="mx-auto bg-emerald-700">
        <p className="text-white p-10 text-lg md:text-2xl font-semibold max-w-6xl mx-auto">
          Listen to Story Zen and experience the magic of stories on your heart,
          mind and soul.
        </p>
        <div className="flex flex-row mx-auto justify-center items-center pb-10 flex-wrap">
          <a onClick={alertFunction} className="cursor-pointer">
            <img
              className="w-52 mx-4 rounded-xl"
              src={listenapple}
              alt="Apple Podcast"
            />
          </a>
          <a onClick={alertFunction} className="cursor-pointer">
            <img className="w-52 " src={listenspotify} alt="Spotify" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PodcastDescription;
