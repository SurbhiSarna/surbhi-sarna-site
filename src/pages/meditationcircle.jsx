import React from 'react';
import SplitImageTextwithQuotes from '../components/SplitImageTextwithQuotes/splitImageTextwithQuotes';
import MastheadImage from "../assets/images/meditationcircle-masthead.jpg";
import whatsapp from "../assets/svg/whatsapp.svg";

export default function MeditationCircle(){

    const splittextpropswithquotes = {
        quote: 'Meditation is the science of God-realization. It is the most practical science in the world. Most people would want to meditate if they understood its value and experienced its beneficial effects.',
        author: "- Paramahansa Yogananda",
        splittext: "Interested in meditation? Join our weekly online meditation circle where we practice guided meditation based on the teachings of Paramahansa Yogananda and scientific healing affirmations for healing of body, mind and soul.",
        buttontext: "Click to join WhatsApp Group",
        buttonlink: "https://chat.whatsapp.com/LeKIdGcHdS6LTWqfC0r9tX",
        imageurl: MastheadImage,
        buttontype: "Anchor",
        buttonicon: whatsapp
    }

    return (
        <div>
            <SplitImageTextwithQuotes props={splittextpropswithquotes}  />
        </div>
    )
}