import React from 'react';
import Masthead from '../components/Masthead/masthead';
import TestimonialsSlider from '../components/TestimonialsSlider/testimonialsSlider';

export default function Home(){
    return (
        <div>
            <Masthead />
            <TestimonialsSlider element="carousel-className-to-inject" options={{ perView: 3 }} />
            <h1>Home</h1>
        </div>
    )
}