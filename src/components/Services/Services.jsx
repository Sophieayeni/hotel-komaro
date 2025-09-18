import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Lounge from "../../Assets/images/hotel lounge.jpeg";
import Dining from "../../Assets/images/hotel dining.jpeg";
import Room from "../../Assets/images/Hotel room.jpeg";
import Spa from "../../Assets/images/Hotel spa.jpeg";
import { useNavigate } from "react-router-dom";


function Services() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className='text-center my-5 fw-bold text-color-1'>Our Services</h1>

            <Row className='mx-5 text-center'>
                <Col xs={12} md={6} className="mb-4">
                    <Card className="custom-card text-white border-0">
                        <div className="card-bg">
                            <img src={Room} alt="Card background" className="card-img" />
                        </div>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                            <div className="button-container">
                                <Button className='services-btns' onClick={() => navigate("/rooms-and-suites")}
                                >Book a Room</Button>
                            </div>
                            <div className="text-start bottom-text mt-5 ">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">Luxury Rooms & Suites</Card.Title>
                                <Card.Text className='mt-2 text-color-2 '>
                                    Experience world-class rooms with premium comfort and style.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col xs={12} md={6} className="mb-4">
                    <Card className="custom-card text-white border-0">
                        <div className="card-bg">
                            <img src={Dining} alt="Card background" className="card-img" />
                        </div>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                            <div className="button-container">
                                <Button className='services-btns' onClick={() => navigate("/dining-and-nightlife")}>Reserve Table</Button>
                            </div>
                            <div className="text-start bottom-text mt-5">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">Dining & Nightlife</Card.Title>
                                <Card.Text className='mt-2 text-color-2'>
                                    Enjoy gourmet meals prepared by top chefs in elegant settings.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className='mx-5 text-center'>

                <Col xs={12} md={6} className="mb-4">
                    <Card className="custom-card text-white border-0">
                        <div className="card-bg">
                            <img src={Spa} alt="Card background" className="card-img" />
                        </div>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                            <div className="button-container">
                                <Button className='services-btns'>Book Session</Button>
                            </div>
                            <div className="text-start bottom-text mt-5">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">Spa & Wellness</Card.Title>
                                <Card.Text className='mt-2 text-color-2'>
                                    Relax with luxury spa treatments and wellness facilities.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col xs={12} md={6} className="mb-4">
                    <Card className="custom-card text-white border-0">
                        <div className="card-bg">
                            <img src={Lounge} alt="Card background" className="card-img" />
                        </div>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                            <div className="button-container">
                                <Button className='services-btns'>Plan Event</Button>
                            </div>
                            <div className="text-start bottom-text mt-5">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">Events & Experiences</Card.Title>
                                <Card.Text className='mt-2 text-color-2'>
                                    Host weddings, conferences, and events in our grand halls.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Services;
