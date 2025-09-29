// components/DiningAndNightlife.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, Button, Modal, Row, Col } from "react-bootstrap";
import RestaurantImg from "../../../Assets/images/restaurant.jpeg";
import LoungeImg from "../../../Assets/images/lounge.jpeg";
import ClubImg from "../../../Assets/images/club.jpeg";

function DiningAndNightlife() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const entries = Object.fromEntries(formData.entries());
        console.log("🚀 Form Data Being Sent:", entries);

        emailjs
            .sendForm(
                "service_bp4xet8",   // service ID
                "template_56la915",  // template ID
                e.target,
                "4yNmsWromdVAb4a_2"  // public key
            )
            .then(
                (result) => {
                    console.log("✅ Success:", result.text);
                    setShowModal(false);
                },
                (error) => {
                    console.error("❌ Error:", error);
                    alert("Something went wrong.");
                }
            );
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        {
            id: 1,
            title: "Restaurant",
            description: "Fine dining with exquisite meals and elegant ambiance.",
            image: RestaurantImg,
        },
        {
            id: 2,
            title: "Lounge",
            description: "Relax and unwind with cocktails in a stylish setting.",
            image: LoungeImg,
        },
        {
            id: 3,
            title: "Club",
            description: "Dance the night away with live DJs and vibrant energy.",
            image: ClubImg,
        },
    ];

    const handleReserveClick = (option) => {
        setSelectedOption(option);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedOption(null);
    };

    return (
        <div className="container mt-5 py-3">
            <h1 className="text-center mt-5 py-3">Dining & Nightlife</h1>
            <div className="row">
                {options.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Img variant="top" src={item.image} height={200} />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </div>
                                <Button
                                    className="mt-3 services-btns"
                                    onClick={() => handleReserveClick(item)}
                                >
                                    Reserve a Table
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Reservation Modal */}
            <Modal show={showModal} onHide={handleClose} centered className="p-5">
                <Modal.Header closeButton>
                    <Modal.Title>Reserve a Table - {selectedOption?.title}</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>

                    <Modal.Body>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Full Name
                                    </label>
                                    <input type="text" name="fullName" className="form-control" id="name" />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email Address
                                    </label>
                                    <input type="email" name="email" className="form-control" id="email" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">
                                        Phone Number
                                    </label>
                                    <input type="text" name="phoneNumber" className="form-control" id="phoneNumber" />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="guests" className="form-label">
                                        No of Guests
                                    </label>
                                    <input type="number" name="guests" className="form-control" id="guests" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">
                                        Date
                                    </label>
                                    <input type="date" name="date" className="form-control" id="date" />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="time" className="form-label">
                                        Time
                                    </label>
                                    <input type="time" name="time" className="form-control" id="time" />
                                </div>
                            </Col>
                            <input type="text" name="tableTitle" value={selectedOption?.title} readOnly hidden />

                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="bg-black text-color-2 border-0 px-4 py-2" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            className="bg-color-1 text-color-1 border-0 px-4 py-2"
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default DiningAndNightlife;
