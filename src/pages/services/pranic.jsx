import React from "react";
import backgroundImage from "../../assets/images/pranic.jpg";

const Pranic = () => {
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
            Pranic Healing
          </h1>
        </div>
      </div>
      <div
        id="pranic"
        className="max-w-7xl mx-auto py-12 md:py-20 border-t-2 px-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              <strong>What is Pranic Healing?</strong>
              <br />
              <br />
              This Life Energy is also called as Prana Shakti. We are surrounded
              by an ocean of cosmic life-giving energy. This is the basis of the
              science of healing. Our physical body has a corresponding
              electromagnetic field also called as aura or energy body. The
              physical and energy bodies are interconnected.
              <br />
              <br />
              The energy body contains energy centers called chakras which are
              responsible for many physical and psychological functions. Our
              energy body is constantly absorbing this life-giving prana and
              expelling used up prana. Disease occurs when there are blockages
              in this flow of energy. Pranic healing is a non-touch healing
              therapy which works on the energy body. Any physical, mental, or
              emotional problems arise due to improper flow of prana in the
              energy centers (chakras).
              <br />
              <br />
              Pranic healing is a wonderful tool to balance energies and
              accelerate the client’s healing process. Thoughts and feelings
              also have energy and accumulation of negative thoughts and
              emotions affects the functioning of the chakras which manifests as
              disease or psychological problems.
              <br />
              <br />
              <strong>
                Pranic Healing can be applied for both physical and
                psychological ailments.
              </strong>
              <br />
              <br />I offer Pranic Healing for the following:-
              <ul className="list-disc list-inside text-lg md:text-xl text-slate-600 mb-4">
                <li>
                  A wide variety of physical health problems such as migraine,
                  back pain, arthritis etc.
                </li>
                <li>
                  Mental and emotional health such as stress, depression,
                  anxiety etc.
                </li>
                <li>
                  Pranic healing can be applied for all age groups including
                  children
                </li>
              </ul>
              <span className="italic">
                <sup>*</sup>Pranic healing is a complimentary healing system. It
                does not replace medical treatment.
              </span>
              <br />
              <br />
              <strong>Why Pranic Healing?</strong>
              <br />
              <br />
              <ul className="list-disc list-inside text-lg md:text-xl text-slate-600 mb-4">
                <li>
                  Pranic healing is a boon since it directly works with the life
                  force. It is a great aid for people suffering from chronic
                  diseases who have not found relief from medicine
                </li>
                <li>
                  It can be combined with any other treatment modality including
                  allopathy and enhances the efficacy of the treatment taken
                </li>
                <li>
                  It can also be used to treat mental and emotional problems.
                  When combined with traditional psychotherapy the number of
                  therapy sessions are greatly reduced
                </li>
                <li>
                  It is safe for all age groups and can be applied even from a
                  distance
                </li>
                <li>
                  Most people report positive beneficial changes in their life
                  such as feeling more happier and peaceful and feel empowered
                  to make changes
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pranic;
