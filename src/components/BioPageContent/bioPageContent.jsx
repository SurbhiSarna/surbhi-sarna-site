import { AcademicCapIcon, TrophyIcon } from "@heroicons/react/24/outline";
import sulogo from "../../assets/images/su-logo.png";
import pulogo from "../../assets/images/pu-logo.png";
import ignoulogo from "../../assets/images/ignou-logo.png";

const degrees = [
  {
    name: "Panjab University",
    description: "Master’s in Biochemistry UGC NET qualified",
    image: pulogo,
  },
  {
    name: "Saarland University, Germany",
    description: "3 Years Research Experience in Biochemistry",
    image: sulogo,
  },
  {
    name: "IGNOU",
    description: "Master’s in Counselling Psychology",
    image: ignoulogo,
  },
];

const certifications = [
  {
    name: "Art Therapy",
  },
  {
    name: "Expressive Arts Therapy",
  },
  {
    name: "Play Therapy",
  },
  {
    name: "Positive Psychology",
  },
  {
    name: "Acceptance and Commitment Therapy",
  },
  {
    name: "Storytelling Therapy",
  },
  {
    name: "Social Emotional Learning",
  },
  {
    name: "Certified Happiness Coach",
  },
  {
    name: "Certified Parenting Expert",
  },
  {
    name: "Pranic Healing; all 5 levels",
  },
  {
    name: "Metaphor Therapy",
  },
  {
    name: "Bach Flower Remedies",
  },
];

const BioPageContent = () => {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Bio
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-6xl">
          <dl className="flex md:flex-row flex-col p-4 mx-auto justify-center items-center md:items-start">
            {degrees.map((degree) => (
              <div key={degree.name} className="flex flex-col w-1/3">
                <dt className="text-md md:text-lg font-semibold leading-7 text-slate-900 mt-4">
                  <div className="flex items-center justify-center rounded-lg">
                    <img
                      className="h-28 md:h-32 text-white my-8"
                      aria-hidden="true"
                      src={degree.image}
                    />
                  </div>
                  {degree.name}
                </dt>
                <dd className="mt-2 md:text-lg leading-7 text-slate-700">
                  {degree.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            I also have certifications in:
          </p>
          <div className="grid grid-cols-3 grid-rows-3">
            {certifications.map((certification) => (
              <div key={certification.name}>
                <dt className="text-md md:text-lg font-semibold leading-7 text-slate-900 mt-4">
                  <div className="flex items-center justify-center rounded-lg">
                    <TrophyIcon className="h-8 w-8 text-purple-900 mx-auto mt-8" />
                  </div>
                  {certification.name}
                </dt>
              </div>
            ))}
          </div>
          <div className="flex flex-col mx-auto">
            <p className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Storytelling Training
            </p>
            <p className="mt-16 text-xl font-bold text-slate-700 md:text-2xl px-4">
              I have had the opportunity to work closely with{" "}
              <span className="text-purple-800">Geeta Ramanajum</span> of
              Kathalaya,{" "}
              <span className="text-purple-800">Rituparna Ghosh</span> of Your
              Story Bag and {" "}
              <span className="text-purple-800">Akshay Gandhi</span> of Still
              Space Theatre.{" "} I have also trained with{" "}
              <span className="text-purple-800">Eric Miller</span>,{" "}
              <span className="text-purple-800">Susan Perrow</span>{" "}
              and <span className="text-purple-800">Lani Peterson</span>{" "} for using stories in therapy, healing and counselling.
              I am also a member of <span className="text-purple-800">FEAST</span> (Federation of Asian Storytellers).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioPageContent;
