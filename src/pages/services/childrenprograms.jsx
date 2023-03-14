import React, { useLayoutEffect } from 'react';
import ServicesRedirectButtons from "../../components/ServicesRedirectButtons/servicesRedirectButton";
import ContactRedirectButton from "../../components/ContactRedirectButton/contactRedirectButton";
import backgroundImage from "../../assets/images/kidsprograms.jpg";

const Childrenprograms = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const links = [
    {
      key: "1",
      text: "Counselling",
      href: "/services/counselling",
    },
    {
      key: "2",
      text: "Pranic Healing",
      href: "/services/pranic",
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
            Children Programs
          </h1>
        </div>
      </div>
      <div
        id="programs"
        className="max-w-7xl mx-auto p-5 md:p-10 border-t-2 px-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600">
              The demands and pressures that children face today are
              unparalleled. There are rising cases of depression, violence,
              bullying, suicide and anxiety in children as young as five. It is
              imperative that we also focus on the mental, emotional and
              spiritual needs of children.
              <br />
              <br />
              I offer several programs and workshops for children focused
              on social emotional skills such as building confidence,
              understanding and managing emotions, being mindful, connecting
              with nature, practicing kindness and gratitude and building better
              habits. I use storytelling extensively in each program.
              <br />
              <br />
            </p>
            <ul className="list-inside text-lg text-slate-600 mb-4 list-none">
              <li className="py-2">
                <span className="font-semibold text-xl">🟣&nbsp;&nbsp;Confidence and emotions:</span>{" "}
                <br />
                8 session program to develop emotional intelligence and boost
                confidence and learn life skills; for 5-10 year olds
              </li>
              <li className="py-2">
                <span className="font-semibold text-xl">🟣&nbsp;&nbsp;Habits &amp; happiness:</span> 
                <br />
                8 session program on developing age appropriate good mental and
                emotional habits; for 5-10 years old
              </li>
              <li className="py-2">
                <span className="font-semibold text-xl">🟣&nbsp;&nbsp;Connect with roots:</span> 
                <br />
                8 session program to connect with our cultural and spiritual
                roots, understand our heritage and traditions; for 8-12 year
                olds
              </li>
              <li className="py-2">
                <span className="font-semibold text-xl">🟣&nbsp;&nbsp;Grow your happiness:</span> 
                <br />
                
                5 session program based on the science of happiness to develop
                resilience, deal with stress and enhance positive emotions; for
                teens
              </li>
              <li className="py-2">
                <span className="font-semibold text-xl">
                🟣&nbsp;&nbsp;Create &amp; heal with stories:
                </span>{" "}
                <br />
                5 session program on how to write a healing story and to devise
                creative ways of dealing with problems; for teens
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ServicesRedirectButtons props={links} />
      <ContactRedirectButton />
    </div>
  );
};

export default Childrenprograms;
