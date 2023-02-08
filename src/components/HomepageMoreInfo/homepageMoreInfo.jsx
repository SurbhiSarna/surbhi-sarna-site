import React from 'react';
import zenImage from '../../assets/images/background.jpg';
import { Link } from 'react-router-dom';

const HomepageMoreInfo = () => {

    return (
        <div style={{
          backgroundImage: `url(${zenImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div className="flex flex-col justify-center items-center">
            <p className="p-5 md:pt-24 md:px-24 text-xl md:text-2xl text-emerald-700 font-semibold leading-8">
              I work 1:1, conduct workshops, performance storytelling and meditation circles both offline and online. I have worked for more than eight years with children and parents on parenting related issues, social emotional learning, and mental well-being of children. 
              <br /><br />
              I use an eclectic mix of modalities such as art therapy, positive psychology, acceptance and commitment therapy, storytelling, guided imagery, and energy healing. In the past three years I have added pranic healing to my skill set of modalities and have seen wonderful results with it. 
              <br /><br />
              I use storytelling both in my counselling practice as well in group settings. Stories are potent healing sources that serve us according to our need. They serve as guides to bring insights into our problems, bridges to help us form meaningful connections, food to nourish our emotions and mind and tonic to rejuvenate our inner life. 
              <br /><br />
              In sharing stories I experience that the teller, listener and the space in between, all become touched by joy and wonder. 
              <br /><br />
            </p>
            <Link to="/about">
                <button className="focus:outline-none focus:shadow-outline border-violet-700 bg-violet-700 text-white font-bold py-2 px-16 rounded-full cursor-pointer hover:text-white hover:bg-violet-900 mb-12">
                    Let's Discuss
                </button>
            </Link>
          </div>
      </div>
    );
};

export default HomepageMoreInfo;
    