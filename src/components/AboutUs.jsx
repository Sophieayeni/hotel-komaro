import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Reception from "../Assets/images/Hotel reception.jpeg";
import aboutUs from "../Assets/images/About us.JPG";
import aboutUs2 from "../Assets/images/About us 2.JPG";
import aboutUs3 from "../Assets/images/About us 3.JPG";
import aboutUs4 from "../Assets/images/About us 4.JPG";

function AboutUs() {
    return (
        <div className="Bg-color text-start py-5">
            <Container>
                {/* Heading */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-color-1">About Us</h1>
                    <i className="fw-bold">
                        At Hotel Komaro, hospitality is more than service — it’s an art. <br />
                        Nestled in the heart of Effurun GRA, we’ve created a destination where
                        modern luxury, vibrant nightlife, and authentic Nigerian warmth
                        come together.
                    </i>
                </div>
                <Row className="align-items-center mb-5">
                    <Col md={6}>

                        <img
                            src={aboutUs3}
                            alt="Hotel Reception"
                            className="img-fluid rounded about-img"
                            style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }} />

                    </Col>
                    <Col md={6}>
                        <div>
                            <h4 className="text-color-3 fw-bold">✨ Our Story</h4>
                            <p>
                                Hotel Komaro was born from a dream to redefine hospitality in
                                Delta State. We blend international standards with the warmth of
                                Nigerian culture, creating a place where guests feel both at home
                                and on vacation. From the moment you step through our doors, every
                                detail is crafted for elegance and comfort.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-color-3 fw-bold">🏨 Our Spaces</h4>
                            <p>
                                - <b>Effurun GRA Branch:</b> The heartbeat of Komaro, featuring our
                                modern hotel, rooftop bar with stunning skyline views, an
                                exclusive club, and a laid-back smoke bar. <br />
                                - <b>GRA VIP Branch:</b> An elite destination offering a private
                                lounge, luxury suites, poolside relaxation, and tailored bar
                                service for guests who value discretion and style.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-color-3 fw-bold">💡 Our Philosophy</h4>
                            <p>
                                We believe in experiences, not just stays. At Komaro, every visit
                                is an invitation to indulge in luxury, celebrate life, and connect
                                with people who share your love for style and exclusivity.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-color-3 fw-bold">🍹 Beyond Hospitality</h4>
                            <p>
                                More than a hotel — Komaro is your social hub. Whether it’s sunset
                                cocktails, weekend getaways, or electrifying nights, we set the
                                stage for unforgettable memories.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
