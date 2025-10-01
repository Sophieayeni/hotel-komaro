import React from 'react'
import HeroVideo from "../Assets/images/hero-bg.mov"; // <-- import your video file

function Home() {
    return (
        <div>
            <div className="hero-section">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src={HeroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="hero-overlay"></div>

                {/* Text Content */}
                <div className="hero-text">
                    <h1 className='mt-5'>Hotel Komaro</h1>
                    <i>"Where Luxury Meets Lifestyle"</i>
                    <p className='mt-5'>
                        Welcome to Hotel Komaro, where indulgence, lifestyle, and unforgettable
                        experiences come together in Warri. From serene stays to electrifying
                        nights, we’re more than a hotel, we’re your luxury escape in Delta State.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
