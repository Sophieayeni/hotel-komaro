import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { Row, Col } from 'react-bootstrap';

function ContactUs() {
    return (
        <div className='text-center my-5'>
            <h1 className='text-center my-5 fw-bold text-color-1'>Contact Us</h1>


            <Row className='mt-5'>
                <Col>
                    <MdLocationOn className='
                    display-3 m-3' />
                    <p className='mt-3'> Effurun GRA, Warri, Delta State, Nigeria</p>
                </Col>
                <Col>
                    <HiPhone className='
                    display-3 m-3' />
                    <p className='mt-3'>+234 XXX XXX XXXX</p>
                </Col>
                <Col>
                    <IoMdMail className='
                    display-3 m-3' />
                    <p className='mt-3'>contacthotelkomaro@gmail.com</p>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs