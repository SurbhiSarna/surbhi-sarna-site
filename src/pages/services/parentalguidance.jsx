import React from "react";
import backgroundImage from "../../assets/images/parentingguidance.jpg";

export default function Services() {
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
            Parenting guidance
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
              <ul className="list-disc list-inside text-lg md:text-xl text-slate-600 mb-4">
                <li>Are you parent seeking help for your child/teenager?</li>
                <li>Do you want to develop a deeper bond with your child?</li>
                <li>
                  Do you feel that there is a communication gap between you and
                  your child?
                </li>
                <li>
                  Are you seeking answers as a parent but don’t know where to
                  turn?
                </li>
              </ul>
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
    </div>
  );
}
