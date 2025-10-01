import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { FaBed, FaUtensils, FaGlassCheers, FaCalendarAlt } from 'react-icons/fa' // install react-icons if not already

function WhyChooseUs() {
    return (
        <div className="Bg-color text-center py-3">
            <Container>
                <h1 className="fw-bold text-color-1 mb-3">Why Choose Komaro</h1>
                <i className="text-muted">“A Destination Beyond Stays”</i>
                <h5 className="mt-3">
                    At Komaro, we redefine hospitality. Our spaces are designed for guests
                    who want more than a room, they want an experience.
                </h5>
                <div>
                    <p>
                        Conveniently located in the heart of Warri, just 10–25 minutes from the airport. <br />
                        High-speed WiFi, smart TVs, and in-room dining. <br />
                        Personalized service 24/7. <br />
                    </p>
                </div>
                <h5 className="fw-bold mt-5 text-color-1">Featured Experiences</h5>

                <Row className="mt-5 g-4">
                    <Col md={6} lg={3}>
                        <Card className="h-100 shadow border-0 card-hover">
                            <Card.Body className="text-center">
                                <FaBed size={40} className="mb-3 text-color-1" />
                                <Card.Title className="fw-bold">Stay</Card.Title>
                                <Card.Text>
                                    Spacious suites & serviced apartments with premium amenities.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="h-100 shadow border-0 card-hover">
                            <Card.Body className="text-center">
                                <FaUtensils size={40} className="mb-3 text-color-1" />
                                <Card.Title className="fw-bold">Dine & Drink</Card.Title>
                                <Card.Text>
                                    Rooftop cocktails, fine dining, and curated menus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="h-100 shadow border-0 card-hover">
                            <Card.Body className="text-center">
                                <FaGlassCheers size={40} className="mb-3 text-color-1" />
                                <Card.Title className="fw-bold">Nightlife</Card.Title>
                                <Card.Text>
                                    Unwind with Komaro’s themed nights, music, and atmosphere.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="h-100 shadow border-0 card-hover">
                            <Card.Body className="text-center">
                                <FaCalendarAlt size={40} className="mb-3 text-color-1" />
                                <Card.Title className="fw-bold">Events</Card.Title>
                                <Card.Text>
                                    Celebrate weddings, corporate functions, and private parties in style.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyChooseUs
