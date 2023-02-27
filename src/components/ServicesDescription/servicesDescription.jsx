import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import backgroundImage from "../../assets/images/background.jpg";
import { Link } from "react-router-dom";
import healingimage from "../../assets/images/healing-image2.png";
import programsforkidsimage from "../../assets/images/programsforkids-image.jpg";
import workshopsimage from "../../assets/images/workshops-image.png";

const ServicesDescription = (props) => {
  const features = [
    {
      name: 1,
      heading: "Counselling and Life Coaching",
      description:
        "I work with a wide variety of clients including parents, single mothers, teenagers, and adults. I use an eclectic mix of modalities such as art therapy, positive psychology, acceptance and commitment therapy, storytelling, guided imagery, mindfulness and energy healing.",
      icon: HeartIcon,
      link: "#counselling",
    },
    {
      name: 2,
      heading: "Programs for Children",
      description:
        "I offer several programs and workshops for children focused on social emotional skills such as building confidence, understanding and managing emotions, being mindful, connecting with nature, practicing kindness and gratitude and building better habits.",
      icon: HeartIcon,
      link: "#programs",
    },
    {
      name: 3,
      heading: "Pranic Healing",
      description:
        "This Life Energy is also called as Prana Shakti. We are surrounded by an ocean of cosmic life-giving energy. This is the basis of the science of healing. Our physical body has a corresponding electromagnetic field also called as aura or energy body.",
      icon: HeartIcon,
      link: "#pranic",
    },
    {
      name: 4,
      heading: "Workshops",
      description:
        "I offer workshops on parenting, mental health, social emotional learning and storytelling.",
      icon: HeartIcon,
      link: "#workshops",
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
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-900">
                    {feature.heading}
                  </h3>
                  <p className="mb-6">{feature.description}</p>
                  <a
                    href={feature.link}
                    className="block font-medium text-purple-600"
                  >
                    Know more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="counselling"
        className="max-w-7xl mx-auto py-12 md:py-20 border-t-2 px-6"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-slate-700 mb-8 mx-auto text-left">
          Counselling and Life Coaching
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-xl md:text-2xl text-slate-700 font-semibold mb-4">
              If you are thinking of seeking professional help, then
              congratulations!
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              A lot of people mistakenly think that seeking mental health
              support is for people who are crazy or for losers, not people who
              are strong and capable. However nothing can be further from the
              truth. In my opinion, people who seek counselling do so because it
              takes great courage and strength to work on their own issues and
              become proactive in improving their life.
              <br />
              <br />
              Counselling and life coaching is not just for those who have
              serious mental or emotional problems but for anyone who wants to
              take responsibility for their life and work on their inner growth
              and transformation.
              <br />
              <br />
              If you are someone who is seeking to:-
            </p>
            <ul className="list-disc list-inside text-lg md:text-xl text-slate-600 mb-4">
              <li>Enhance their Potential</li>
              <li>Get more out of Life</li>
              <li>Find Meaning and Purpose</li>
              <li>Spiritual Connection</li>
              <li>Live a more Fulfilled Life</li>
            </ul>
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              Then I will be happy to be of service to you.
              <br />
              <br />
              <strong>My approach</strong>
              <br />
              <br />
              I work with a wide variety of clients including parents, single
              mothers, teenagers, and adults. I use an eclectic mix of
              modalities such as art therapy, positive psychology, acceptance
              and commitment therapy, storytelling, guided imagery, mindfulness
              and energy healing. Each and every counselling conversation that I
              have with my clients is tailored to their specific needs,
              personalities and beliefs. This involves creating a relationship
              with my clients based on empathy, trust and acceptance. I enable a
              safe and non-judgemental space for my clients to talk about their
              problems, understand their emotions, behaviour and thoughts,
              identify their own limiting patterns, develop insights and find
              answers.
              <br />
              <br />
              In my sessions I seek to bring out and develop my client’s own
              inner resources. Each person is an expert in their own life and
              they know best how to handle gracefully their situation and bring
              change in their life. My role is that of a facilitator, guide and
              coach.
            </p>
            <table className="table-auto my-6">
              <thead>
                <tr className="text-lg text-left font-base text-slate-700">
                  <th className="px-4 py-2">What you can expect from me</th>
                  <th className="px-4 py-2">What you will not find from me</th>
                </tr>
              </thead>
              <tbody className="text-lg text-left font-base text-slate-600">
                <tr>
                  <td className="border px-4 py-2">Empathy</td>
                  <td className="border px-4 py-2">Giving Advice</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Acceptance of you and your situation
                  </td>
                  <td className="border px-4 py-2">
                    Giving answers or trying to sort out the problem
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">No judgement</td>
                  <td className="border px-4 py-2">
                    Imposing values/beliefs on the client
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Complete confidentiality</td>
                  <td className="border px-4 py-2">Judging the client</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        id="pranic"
        className="max-w-7xl mx-auto py-12 md:py-20 border-t-2 px-6"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-slate-700 mb-8 mx-auto text-left">
          Pranic Healing
        </h2>
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
              <ul className="list-disc list-inside text-lg md:text-xl text-slate-600 mb-4">
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
                <li>Parenting guidance</li>
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
      <div
        id="programs"
        className="max-w-7xl mx-auto py-12 md:py-20 border-t-2 px-6"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-slate-700 mb-8 mx-auto text-left">
          Programs for Children
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              The demands and pressures that children face today are
              unparalleled. There are rising cases of depression, violence,
              bullying, suicide and anxiety in children as young as five. It is
              imperative that we also focus on the mental, emotional and
              spiritual needs of children.
              <br />
              <br />I offer several programs and workshops for children focused
              on social emotional skills such as building confidence,
              understanding and managing emotions, being mindful, connecting
              with nature, practicing kindness and gratitude and building better
              habits. I use storytelling extensively in each program.
            </p>
            <ul className="list-inside text-lg md:text-xl text-slate-600 mb-4 list-none">
              <li>
                <span className="font-semibold">Confidence and emotions:</span>{" "}
                8 session program to develop emotional intelligence and boost
                confidence and learn life skills; for 5-10 years old
              </li>
              <li>
                <span className="font-semibold">Habits &amp; happiness:</span> 8
                session program on developing age appropriate good mental and
                emotional habits; for 5-10 years old
              </li>
              <li>
                <span className="font-semibold">Connect with roots:</span> 8
                session program to connect with our cultural and spiritual
                roots, understand our heritage and traditions; for 8-12 year
                olds
              </li>
              <li>
                <span className="font-semibold">Grow your happiness:</span> 5
                session program based on the science of happiness to develop
                resilience, deal with stress and enhance positive emotions; for
                teens
              </li>
              <li>
                <span className="font-semibold">
                  Create &amp; heal with stories:
                </span>{" "}
                5 session program on how to write a healing story and to devise
                creative ways of dealing with problems; for teens
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="programs"
        className="max-w-7xl mx-auto py-12 md:py-20 border-t-2 px-6"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-slate-700 mb-8 mx-auto text-left">
          Workshops
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-left">
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              I offer workshops on parenting, mental health, social emotional
              learning and storytelling. Some of the workshops that I have
              offered include
            </p>
            <ul className="list-inside text-lg md:text-xl text-slate-600 mb-4 list-disc">
              <li>Storytelling as a parenting tool</li>
              <li>Art of storytelling for teachers</li>
              <li>Storytelling in the digital age</li>
              <li>Helping children study better</li>
              <li>Therapy through stories</li>
              <li>Mindfulness for children</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDescription;
