import React, { useLayoutEffect } from 'react';
import PodcastDescription from '../components/PodcastDescription/podcastDescription';

export default function Podcast(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <PodcastDescription />
        </div>
    )
}