import { HeartIcon } from "@heroicons/react/24/outline";
import surbhiImage from "../../assets/images/surbhi-image.jpg";
import backgroundImage from "../../assets/images/background.jpg";

const features = [
  {
    name: 1,
    description:
      "Healing is work that takes you beyond cures and quick fixes. It is a bit by bit building of your life energies to repair and restore. Restoring your spirit, your connection to your Self, to Mother Earth and to Life itself. ",
    icon: HeartIcon,
  },
  {
    name: 2,
    description:
      "Healing happens when you take charge of your life and take full responsibility for yourself. When you step into Your Story and recreate the life that you always intended for yourself. ",
    icon: HeartIcon,
  },
];

const HomepageAboutMe = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-white py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="my-10 text-2xl md:text-4xl font-bold leading-8 tracking-tight text-slate-700">
            I am Surbhi Sarna, a counselling psychologist, healer and
            storyteller.
          </h2>
          <img
            src={surbhiImage}
            alt="Surbhi Sarna"
            className="rounded-full w-1/3 mx-auto"
          />
          <p className="mt-6 text-xl md:text-2xl leading-8 text-slate-600">
            The most daunting and yet the most precious journey is into
            someone’s heart and mind. As a healer I feel immensely privileged to
            embark on this journey with my clients where I witness the frailty,
            the suffering, the heroism, the darkness and the light within each
            one of us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative md:pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="md:absolute md:top-0 md:left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-none mx-auto">
                    <feature.icon
                      className="h-6 md:h-8 md:w-8 text-slate-700 fill-slate-700"
                      aria-hidden="true"
                    />
                  </div>
                </dt>
                <dd className="md:text-xl text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomepageAboutMe;
