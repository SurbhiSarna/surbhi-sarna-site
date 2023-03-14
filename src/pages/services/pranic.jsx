import React, { useLayoutEffect } from "react";
import backgroundImage from "../../assets/images/pranic.jpg";
import ReactMarkdown from "react-markdown";
import leftquote from "../../assets/svg/lquoteblack.svg";
import rightquote from "../../assets/svg/rquoteblack.svg";
import ServicesRedirectButtons from "../../components/ServicesRedirectButtons/servicesRedirectButton";
import ContactRedirectButton from "../../components/ContactRedirectButton/contactRedirectButton";

const Pranic = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const links = [
    {
      key: "1",
      text: "Counselling",
      href: "/services/counselling",
    },
    {
      key: "2",
      text: "Children Programs",
      href: "/services/childrenprograms",
    },
    {
      key: "3",
      text: "Parenting Guidance",
      href: "/services/parentingguidance",
    },
    {
      key: "4",
      text: "Workshops",
      href: "/services/workshops",
    },
  ];   

  const quote =
    "Disease is generally considered a result of external material causes. Few people realize that it comes through the inaction of the Life Force within. Medicine, massage, and electricity merely help to stimulate the cells in such a way that the Life Energy is induced to return and resume its work of maintenance and repair. All methods of healing are really indirect ways of rousing the life energy, which is the true and direct healer of all diseases.";
  const author = "- Paramahansa Yogananda";

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
          <h1 className="text-3xl text-white font-bold px-5 md:px-10 md:text-6xl max-w-7xl uppercase">
            Pranic Healing
          </h1>
        </div>
      </div>
      <div
        id="pranic"
        className="max-w-7xl mx-auto py-6 md:py-10 border-t-2 px-6"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-lg text-slate-700 font-bold p-5 md:p-10 md:text-xl max-w-7xl">
            <span>
              <img
                className="w-2 md:w-4 my-4"
                src={leftquote}
                alt="Left Quote Sign"
              />
            </span>
            <ReactMarkdown children={quote} />
            <span className="flex justify-end">
              <img
                className="w-2 md:w-4 mt-4 right-0"
                src={rightquote}
                alt="Left Quote Sign"
              />
            </span>
          </h1>
          <p className="text-slate-700 text-lg pb-8 px-4 md:px-10 md:pb-16 mb-8 font-semibold">
            {author}
          </p>
        </div>
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
              <ul className="list-disc list-inside text-lg md:text-xl text-slate-600">
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
      <ServicesRedirectButtons props={links} />
      <ContactRedirectButton />
    </div>
  );
};

export default Pranic;
