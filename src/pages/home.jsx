import React from 'react';
import Masthead from '../components/Masthead/masthead';
import HomepageAboutMe from '../components/HomepageAboutMe/homepageAboutMe';
import TestimonialsSlider from '../components/TestimonialsSlider/testimonialsSlider';
import SplitImageTextwithQuotes from '../components/SplitImageTextwithQuotes/splitImageTextwithQuotes';
import HomepageMoreInfo from '../components/HomepageMoreInfo/homepageMoreInfo';
import healingImage from '../assets/images/healing-image.jpg';

export default function Home(){

    const splittextpropswithquotes = {
        quote: "You have the power to heal your life, and you need to know that. We think so often that we are helpless, but we’re not. We always have the power of our minds. Claim and consciously use your power.",
        author: "- Louise Hay",
        splittext: "My work as a healer is to shine the light on your journey and empower you to claim back your power. The unfolding miracles of change, hope and transformation that I see in my clients are treasures that I receive along the way.",
        buttontext: "Learn More",
        buttonlink: "/about",
        imageurl: healingImage,
        buttontype: "Link"
    }

    return (
        <div>
            <Masthead />
            <HomepageAboutMe />
            <SplitImageTextwithQuotes props={splittextpropswithquotes}  />
            <TestimonialsSlider />
            <HomepageMoreInfo />
        </div>
    )
}