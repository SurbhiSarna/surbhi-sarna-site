import React from 'react';
import Masthead from '../components/Masthead/masthead';
import storytellingMasthead from "../assets/images/storytelling-masthead-desktop.jpg";
import storytellingMastheadMobile from "../assets/images/storytelling-masthead-mobile.jpg";

export default function Storytelling(){

    const mastheadprops = {
        type: "image",
        imageurl: storytellingMasthead,
        imageurlmobile: storytellingMastheadMobile,
    }

    return (
        <div>
            <Masthead props={mastheadprops} />
        </div>
    )
}