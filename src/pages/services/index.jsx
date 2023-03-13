import React, { useLayoutEffect } from 'react';
import ServicesDescription from '../../components/ServicesDescription/servicesDescription';

export default function Services(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <ServicesDescription />
        </div>
    )
}