import React from 'react';
import Masthead from '../components/Masthead/masthead';
import HomepageAboutMe from '../components/HomepageAboutMe/homepageAboutMe';
import TestimonialsSlider from '../components/TestimonialsSlider/testimonialsSlider';
import SplitImageText from '../components/SplitImageText/splitImageText';
import HomepageMoreInfo from '../components/HomepageMoreInfo/homepageMoreInfo';

export default function Home(){
    return (
        <div>
            <Masthead />
            <HomepageAboutMe />
            <SplitImageText props={props} />
            <TestimonialsSlider />
            <HomepageMoreInfo />
        </div>
    )
}