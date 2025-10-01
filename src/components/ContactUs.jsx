import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { Row, Col } from 'react-bootstrap';

function ContactUs() {
    return (
        <div className='text-center my-5'>
            <h1 className='text-center mt-5 fw-bold text-color-1'>Contact Us</h1>
            <h3 className='text-center text-color-3'>Let’s Make It Happen</h3>


            <Row className="mt-5 text-center">
                <Col>
                    <a
                        href="https://maps.google.com/?q=Plot 46 Mabiaku link GRA, Warri, Delta State, Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                    >
                        <MdLocationOn className="display-3 m-3" />
                        <p className="mt-3">Plot 46 Mabiaku link GRA, Warri, Delta State, Nigeria</p>
                    </a>
                </Col>

                <Col>
                    <a href="tel:+2348149662192" className="text-decoration-none text-dark">
                        <HiPhone className="display-3 m-3" />
                        <p className="mt-3">+234 814 966 2192</p>
                    </a>
                </Col>

                <Col>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contacthotelkomaro@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                    >
                        <IoMdMail className="display-3 m-3" />
                        <p className="mt-3">contacthotelkomaro@gmail.com</p>
                    </a>
                </Col>
            </Row>

        </div>
    )
}

export default ContactUs