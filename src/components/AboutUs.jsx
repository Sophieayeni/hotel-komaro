import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import Reception from "../Assets/images/Hotel reception.jpeg";

function AboutUs() {
    return (
        <div className='Bg-color text-start'>
            <div className='text-center'>
                <h1 className='text-center my-3 fw-bold text-color-1'>About Us</h1>
                <i className='fw-bold'>At Hotel Komaro, hospitality is more than service — it’s an art.<br />
                    Nestled in the heart of Effurun GRA, we’ve created a destination where modern luxury, <br />
                    vibrant nightlife, and authentic Nigerian warmth come together.</i>
            </div>

            <div className='mx-5 my-5'>
                <Row>
                    <Col md={6}>
                        <img src={Reception} alt="Hotel Reception" className='img-fluid rounded' width="100%" height="100%" />
                    </Col>
                    <Col md={6} className='my-5'>
                        <Col>
                            <div>
                                <h4 className='text-color-3 fw-bold'> Our Story</h4>
                                <p>Founded with a vision to redefine hospitality in Warri, Komaro brings global standards of service to Delta State’s lifestyle scene. From rooftop cocktails to curated suites, every detail is designed for your comfort, connection, and celebration.</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4 className='text-color-3 fw-bold'> Our Spaces</h4>
                                <p>    - Effurun GRA Branch: Hotel, Rooftop Bar, Club, and Smoke Bar. <br />
                                    - GRA VIP Branch: VIP Lounge, Pool, Guest Suites, and private bar service.</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4 className='text-color-3 fw-bold'> Our Philosophy</h4>
                                <p> We believe in exclusivity, innovation, and unforgettable experiences. At Komaro, every stay is a story waiting to be told.</p>
                            </div>
                        </Col>

                    </Col>
                </Row>


            </div>
        </div>
    )
}

export default AboutUs