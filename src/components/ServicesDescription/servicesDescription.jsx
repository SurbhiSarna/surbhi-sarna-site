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
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-16 mx-auto"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-slate-700 mb-8 mx-auto max-w-7xl">
          Here's how I can help you
        </h2>

        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 max-w-7xl">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-5">
            {features.map((feature) => (
              <Link to={feature.link}>
                <div
                  key={feature.name}
                  className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 h-44"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-slate-800">
                      {feature.heading}
                    </h3>
                  </div>
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
