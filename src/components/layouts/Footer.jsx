import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../../Assets/images/HOTEL LOGO.png";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Footer() {
    return (
        <div className='bg-dark text-color-2 text-start p-5'>
            <Row>
                <Col md={4} className="mb-3 d-flex flex-column align-items-center">
                    <div className="mb-3">
                        <img src={Logo} alt="Hotel Logo" height="90px" />
                    </div>

                    <div className="d-flex gap-3 justify-content-center">
                        <a href="https://www.facebook.com/profile.php?id=61581065097067" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@komarohotel?_t=ZS-90BwnDnCIA4&_r=1" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaTiktok size={24} />
                        </a>
                        <a href="https://www.instagram.com/komarohotel_?igsh=bWZqaW5zNzZnM2lx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://wa.me/2348149662192" target="_blank" rel="noopener noreferrer" className="text-color-2">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </Col>

                <Col md={4} className="mb-3 d-flex flex-column align-items-center">
                    <div className='text-start'>
                        <h5>Home</h5>
                        <ul className="list-unstyled">
                            <li>
                                <HashLink smooth to="/#about-us" className="text-decoration-none text-color-2">
                                    About Us
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#services" className="text-decoration-none text-color-2">
                                    Services
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col md={4} className="mb-3 d-flex flex-column align-items-center">
                    <div className='text-start'>
                        <h5>Help & Support</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link
                                    to="/faq"
                                    className="text-decoration-none text-color-2"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link to="/#contact-us" className="text-decoration-none text-color-2">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <p className="fw-bold text-center mt-3">
                All rights reserved. Copyright © 2025 Hotel Komaro Powered By HNL Digital Luxe
            </p>
        </div>
    );
}

export default Footer;
