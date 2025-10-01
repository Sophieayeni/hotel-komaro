import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutUs from "../Assets/images/About us.JPG";


function AboutUs() {
    return (
        <div className="Bg-color text-start py-5">
            <Container>
                {/* Heading */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-color-1">About Us</h1>
                    <i className="fw-bold">
                        At Hotel Komaro, hospitality is more than service, it’s an art. <br />
                        Nestled in the heart of Warri, we’ve created a destination where
                        modern luxury, vibrant nightlife, and authentic Nigerian warmth
                        come together.
                    </i>
                </div>
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <img
                            src={aboutUs}
                            alt="Hotel Reception"
                            className="img-fluid rounded about-img"
                            style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }} />
                    </Col>
                    <Col md={6}>
                        <div>
                            <h4 className="text-color-3 fw-bold">✨ Our Story</h4>
                            <p>
                                Founded with a vision to redefine hospitality in Warri, Komaro brings global standards of service to Delta State’s lifestyle scene. From rooftop cocktails to curated suites, every detail is designed for your comfort, connection, and celebration.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-color-3 fw-bold">🏨 Our Spaces</h4>
                            <p>
                                - <b>Effurun Branch:</b> The heartbeat of Komaro, featuring our
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
                                We believe in exclusivity, innovation, and unforgettable experiences. At Komaro, every stay is a story waiting to be told.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-color-3 fw-bold">🍹 Beyond Hospitality</h4>
                            <p>
                                More than a hotel, Komaro is your social hub. Whether it’s sunset
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
