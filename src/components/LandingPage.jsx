import React from 'react'
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services/Services';
import ContactUs from './ContactUs';
import WhyChooseUs from './WhyChooseUs';

function LandingPage() {
    return (
        <div>
            <Home />
            <div id="about-us">
                <AboutUs />
            </div>
            <div id="why-choose-us">
                <WhyChooseUs />
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