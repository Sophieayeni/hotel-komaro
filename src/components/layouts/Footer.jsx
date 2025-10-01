import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../../Assets/images/HOTEL LOGO.png";
import { Row, Col } from 'react-bootstrap';



function Footer() {
    return (
        <div className='bg-dark text-color-2 text-start p-5'>
            <Row>
                <Col md={4} className="mb-3 d-flex flex-column align-items-center">
                    {/* Logo */}
                    <div className="mb-3">
                        <img src={Logo} alt="Hotel Logo" height="90px" />
                    </div>

                    {/* Social Media Icons */}
                    <div className="d-flex gap-3 justify-content-center">
                        <a href="https://www.facebook.com/profile.php?id=61581065097067&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@hotelkomaro?_t=ZS-90BTRO3OOGa&_r=1" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaTiktok size={24} />
                        </a>
                        <a href="https://www.instagram.com/hotel.komaro?igsh=ZHc1cXozNWpiZjR6" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://wa.me/2348149662192" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </Col>

                <Col md={4} className="mb-3 d-flex flex-column align-items-center">
                    <div className='text- start'>
                        <h5>Home</h5>
                        <ul className="list-unstyled">
                            <li><a href="#about-us" className="text-decoration-none text-color-2">About Us</a></li>
                            <li><a href="#services" className="text-decoration-none text-color-2">Services</a></li>
                        </ul>

                    </div>
                </Col>
                <Col md={4} className="mb-3 d-flex flex-column align-items-center">
                    <div className='text-start'>
                        <h5>Help & Support</h5>
                        <ul className="list-unstyled">
                            <a href="/faq" className="text-decoration-none text-color-2"><li>FAQ</li></a>
                            <a href="#contact-us" className="text-decoration-none text-color-2"><li>Contact Us</li></a>
                        </ul>
                    </div>
                </Col>

            </Row>
            <p className="fw-bold text-center mt-3">
                {" "}
                All rights reserved. Copyright © 2025 Hotel Komaro{" "}
            </p>
        </div>
    )
}

export default Footer