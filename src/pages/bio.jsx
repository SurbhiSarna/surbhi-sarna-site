import React, { useLayoutEffect } from 'react';
import BioPageContent from '../components/BioPageContent/bioPageContent';

export default function Bio(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <BioPageContent />
        </div>
    )
}