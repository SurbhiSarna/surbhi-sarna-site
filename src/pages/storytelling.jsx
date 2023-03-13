import React, { useLayoutEffect } from 'react';
import Masthead from "../components/Masthead/masthead";
import StoryTellingDescription from "../components/StoryTellingDescription/storyTellingDescription";
import storytellingMasthead from "../assets/images/storytelling-masthead-desktop.jpg";
import leftquote from "../assets/svg/lquote.svg";
import rightquote from "../assets/svg/rquote.svg";

export default function Storytelling() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const mastheadprops = {
    type: "quote",
    imageurl: storytellingMasthead,
    quote: `After nourishment, shelter and companionship, stories are the thing we need most in the world.`,
    author: "- Philip Pullman",
    lquote: leftquote,
    rquote: rightquote,
  };

  return (
    <div>
      <Masthead props={mastheadprops} />
      <StoryTellingDescription />
    </div>
  );
}
