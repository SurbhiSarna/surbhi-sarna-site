import React, { useLayoutEffect } from 'react';
import ServicesRedirectButtons from "../../components/ServicesRedirectButtons/servicesRedirectButton";
import ContactRedirectButton from "../../components/ContactRedirectButton/contactRedirectButton";
import backgroundImage from "../../assets/images/workshops.jpg";

const Workshops = () => {

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
      text: "Pranic Healing",
      href: "/services/pranic",
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
            Workshops
          </h1>
        </div>
      </div>
      <div
        id="workshops"
        className="max-w-7xl mx-auto p-5 md:p-10 border-t-2 px-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              I offer workshops on parenting, mental health, social emotional
              learning and storytelling. Some of the workshops that I have
              offered include
            </p>
            <ul className="list-inside text-lg md:text-xl text-slate-600 font-semibold">
              <li className='my-2'>🟣&nbsp;&nbsp;Storytelling as a parenting tool</li>
              <li className='my-2'>🟣&nbsp;&nbsp;Art of storytelling for teachers</li>
              <li className='my-2'>🟣&nbsp;&nbsp;Storytelling in the digital age</li>
              <li className='my-2'>🟣&nbsp;&nbsp;Helping children study better</li>
              <li className='my-2'>🟣&nbsp;&nbsp;Therapy through stories</li>
              <li className='my-2'>🟣&nbsp;&nbsp;Mindfulness for children</li>
            </ul>
          </div>
        </div>
      </div>
      <ServicesRedirectButtons props={links} />
      <ContactRedirectButton />
    </div>
  );
};

export default Workshops;
