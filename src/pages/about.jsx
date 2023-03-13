import React, { useLayoutEffect } from 'react';
import AboutPageContent from '../components/AboutPageContent/aboutPageContent';

export default function About(){
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <AboutPageContent />
        </div>
    )
}