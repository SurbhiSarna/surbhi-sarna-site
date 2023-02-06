import { HeartIcon } from "@heroicons/react/24/outline";
import surbhiImage from "../../assets/images/surbhi-image.jpg";
import healingImage from "../../assets/images/healing-image.jpg";
import backgroundImage from "../../assets/images/background.jpg";
import leftquote from "../../assets/svg/lquote.svg";
import rightquote from "../../assets/svg/rquote.svg";

const features = [
  {
    description:
      "Healing is work that takes you beyond cures and quick fixes. It is a bit by bit building of your life energies to repair and restore. Restoring your spirit, your connection to your Self, to Mother Earth and to Life itself. ",
    icon: HeartIcon,
  },
  {
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
          <h2 className="text-2xl md:text-4xl font-bold leading-8 tracking-tight mb-5 text-indigo-700">
            Who Am I
          </h2>
          <img
            src={surbhiImage}
            alt="Surbhi Sarna"
            className="rounded-full w-1/3 mx-auto"
          />
          <p className="mt-8 text-2xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            I am Surbhi Sarna, a counselling psychologist, healer and
            storyteller.
          </p>
          <p className="mt-6 text-xl md:text-2xl leading-8 text-slate-600">
            The most daunting and yet the most precious journey is into
            someone’s heart and mind. As a healer I feel immensely privileged to
            embark on this journey with my clients where I witness the frailty,
            the suffering, the heroism, the darkness and the light within each
            one of us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <feature.icon
                      className="h-6 md:h-8 md:w-8 text-purple-700 fill-purple-700"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="md:text-xl text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="my-12 md:my-20 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
          <div
            style={{
              backgroundImage: `url(${healingImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
            className="flex justify-center items-center"
          >
            <p className="mx-auto text-white text-lg font-bold px-20">
              <span>
                <img className="w-4" src={leftquote} alt="Left Quote Sign" />
              </span>
              After nourishment, shelter and companionship, stories are the
              thing we need most in the world.
              <span className="flex justify-end">
                <img
                  className="w-4 right-0"
                  src={rightquote}
                  alt="Left Quote Sign"
                />
              </span>
              <br />- Philip Pullman
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="p-12 md:p-24 text-xl md:text-2xl text-emerald-700 font-semibold leading-8">
              My work as a healer is to shine the light on your journey and
              empower you to claim back your power. The unfolding miracles of
              change, hope and transformation that I see in my clients are
              treasures that I receive along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageAboutMe;
