import React, { useLayoutEffect } from 'react';
import ServicesRedirectButtons from "../../components/ServicesRedirectButtons/servicesRedirectButton";
import ContactRedirectButton from "../../components/ContactRedirectButton/contactRedirectButton";
import backgroundImage from "../../assets/images/councellingcoaching.jpg";

const Counselling = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const links = [
    {
      key: "1",
      text: "Pranic Healing",
      href: "/services/pranic",
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
            Counselling and Life Coaching
          </h1>
        </div>
      </div>
      <div
        id="counselling"
        className="max-w-7xl mx-auto p-5 md:p-10 border-t-2 px-6"
      >
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
              <strong>If you are someone who is seeking to:-</strong>
            </p>
            <ul className="list-disc list-inside text-lg md:text-xl text-slate-600 mb-4 font-semibold">
              <li>Enhance their Potential</li>
              <li>Get more out of Life</li>
              <li>Find Meaning and Purpose</li>
              <li>Spiritual Connection</li>
              <li>Live a more Fulfilled Life</li>
            </ul>
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              <strong>Then I will be happy to be of service to you.</strong>
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
            <table className="table-auto mt-6">
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
      <ServicesRedirectButtons props={links} />
      <ContactRedirectButton />
    </div>
  );
};

export default Counselling;
