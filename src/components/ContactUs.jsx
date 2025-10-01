import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { Row, Col } from 'react-bootstrap';

function ContactUs() {
    return (
        <div className='text-center mt-5'>
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
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3971.30216214212!2d5.737707974984917!3d5.522104394458018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%2046%20Mabiaku%20link%20GRA%2C%20Warri%2C%20Delta%20State%2C%20Nigeria!5e0!3m2!1sen!2snl!4v1759347231001!5m2!1sen!2snl"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Hotel Komaro Second Location Map"
                ></iframe>
            </div>
        </div>
    )
}

export default ContactUs