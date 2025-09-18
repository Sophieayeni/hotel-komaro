import React from 'react'
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services/Services';
import ContactUs from './ContactUs';

function LandingPage() {
    return (
        <div>
            <Home />
            <div id="about-us">
                <AboutUs />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="contact-us">
                <ContactUs />
            </div>
        </div>
    )
}

export default LandingPage