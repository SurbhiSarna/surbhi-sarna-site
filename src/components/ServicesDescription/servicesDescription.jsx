import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/background.jpg";

const ServicesDescription = () => {
  const features = [
    {
      name: 1,
      heading: "Counselling and Life Coaching",
      link: "/services/counselling",
    },
    {
      name: 2,
      heading: "Programs for Children",
      link: "/services/childrenprograms",
    },
    {
      name: 3,
      heading: "Pranic Healing",
      link: "/services/pranic",
    },
    {
      name: 4,
      heading: "Workshops",
      link: "/services/workshops",
    },
    {
      name: 4,
      heading: "Parenting Guidance",
      link: "/services/parentingguidance",
    },
  ];

  return (
    <div className="mx-auto">
      <div
        className="py-16 mx-auto bg-violet-700"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-white mb-8 mx-auto max-w-7xl">
          Here's how I can help you
        </h2>

        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 max-w-2xl">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-1">
            {features.map((feature) => (
              <Link to={feature.link}>
                <div
                  key={feature.name}
                  className="bg-emerald-600 rounded-2xl shadow-xl px-4 py-8 sm:px-10 lg:px-8 hover:bg-white hover:text-emerald-600 text-xl md:text-2xl font-semibold text-white"
                >
                  {feature.heading}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDescription;
