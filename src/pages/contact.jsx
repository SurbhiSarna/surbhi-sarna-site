import React, { useLayoutEffect } from 'react';
import ContactForm from '../components/ContactForm/contactform';

export default function Contact(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <ContactForm />
        </div>
    )
}