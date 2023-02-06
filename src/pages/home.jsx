import React from 'react';
import Masthead from '../components/Masthead/masthead';
import HomepageAboutMe from '../components/HomepageAboutMe/homepageAboutMe';
import TestimonialsSlider from '../components/TestimonialsSlider/testimonialsSlider';

export default function Home(){
    return (
        <div>
            <Masthead />
            <HomepageAboutMe />
            <TestimonialsSlider />
        </div>
    )
}