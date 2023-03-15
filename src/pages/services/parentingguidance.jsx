import React, { useLayoutEffect } from 'react';
import backgroundImage from "../../assets/images/parentingguidance.jpg";
import ServicesRedirectButtons from "../../components/ServicesRedirectButtons/servicesRedirectButton";
import ContactRedirectButton from "../../components/ContactRedirectButton/contactRedirectButton";

const Parentingguidance = () => {

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
      text: "Pranic Healing",
      href: "/services/pranic",
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
            Parenting guidance
          </h1>
        </div>
      </div>
      <div
        id="parentingguidance"
        className="max-w-7xl mx-auto p-5 md:p-10 border-t-2 px-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              <ul className="list-inside text-lg md:text-xl text-slate-600 font-semibold">
                <li className='my-2'>🟣&nbsp;&nbsp; Are you a parent seeking help for your child/teenager?</li>
                <li className='my-2'>🟣&nbsp;&nbsp; Do you want to develop a deeper bond with your child?</li>
                <li className='my-2'>🟣&nbsp;&nbsp; Do you feel that there is a communication gap between you and your child?</li>
                <li className='my-2'>🟣&nbsp;&nbsp; Are you seeking answers as a parent but don’t know where to turn?</li>
              </ul>
              <br />
              <br />
              As a certified parenting expert I offer counselling and coaching
              exclusively for parents to help them meet their parenting goals.
              Most often behavioural and emotional problems faced by children
              are best addressed by working with the parents. Children thrive
              and flourish if allowed to unfold along their natural tendencies.
              <br />
              <br />
              A parent’s role is like that of a gardener: to nurture, grow and
              protect so that the innate characteristics of the child can come
              to fore. Contrary to what most people believe, parenting is a
              science and not everyone is born with it. It comes naturally to a
              few and does not come so easily to others.
              <br />
              <br />
              The complexity of the times we are living in, the over exposure to
              gadgets and the constant demands on our time can make parenting
              difficult and frustrating. I work 1:1 with parents to help them
              understand their children better, develop more effective
              techniques of communication, how to discipline their child, how to
              create a routine at home and be the best version of themselves.
            </p>
          </div>
        </div>
      </div>
      <ServicesRedirectButtons props={links} />
      <ContactRedirectButton />
    </div>
  );
};

export default Parentingguidance;
