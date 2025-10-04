import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, Button, Modal, Row, Col, Carousel } from "react-bootstrap";
import RestaurantImg from "../../../Assets/images/restaurant image.jpg";
import RestaurantImg2 from "../../../Assets/images/restaurant image 2.jpg";
import RestaurantImg3 from "../../../Assets/images/restaurant image 3.jpg";
import RestaurantImg4 from "../../../Assets/images/restaurant image 4.jpg";
import LoungeImg1 from "../../../Assets/images/lounge image.jpg";
import LoungeImg2 from "../../../Assets/images/lounge image 2.jpg";
import LoungeImg3 from "../../../Assets/images/lounge image 3.jpg";
import LoungeImg4 from "../../../Assets/images/Lounge image 4.jpg";
import LoungeImg from "../../../Assets/images/lounge.jpeg";
import ClubImg from "../../../Assets/images/club image.jpg";
import ClubImg2 from "../../../Assets/images/club image 2.jpg";
import ClubImg3 from "../../../Assets/images/club image 3.jpg";
import ClubImg4 from "../../../Assets/images/club image 4.jpg";

function DiningAndNightlife() {
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        {
            id: 1,
            title: "Restaurant",
            description: "Fine dining with exquisite meals and elegant ambiance.",
            images: [RestaurantImg, RestaurantImg2, RestaurantImg3, RestaurantImg4],
        },
        {
            id: 2,
            title: "Lounge",
            description: "Relax and unwind with cocktails in a stylish setting.",
            images: [LoungeImg1, LoungeImg2, LoungeImg3, LoungeImg4],
        },
        {
            id: 3,
            title: "Club",
            description: "Dance the night away with live DJs and vibrant energy.",
            images: [ClubImg, ClubImg2, ClubImg3, ClubImg4],
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

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_fn0jkli",
                "template_yr5k6ma",
                e.target,
                "FCV1rzINVFFPt9J5C"
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

    return (
        <div className="container mt-5 py-3">
            <h1 className="text-center mt-5 py-3">Dining & Nightlife</h1>
            <div className="row">
                {options.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <Card className="shadow-sm h-100 position-relative overflow-hidden">
                            {/* Parent container for blur and carousel */}
                            <div style={{ position: "relative", height: "250px" }}>
                                {/* Blur background */}
                                <div
                                    className="blur-bg position-absolute w-100"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        height: "250px",
                                        backgroundImage: `url(${LoungeImg})`, // use same image for all cards
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter: "blur(15px)",
                                        zIndex: 0,
                                    }}
                                ></div>


                                {/* Carousel */}
                                <Carousel style={{ zIndex: 1, height: "100%" }}>
                                    {item.images.map((img, index) => (
                                        <Carousel.Item key={index} style={{ height: "100%" }}>
                                            <Card.Img
                                                variant="top"
                                                src={img}
                                                style={{
                                                    objectFit: "contain",
                                                    maxHeight: "250px",
                                                    width: "100%",
                                                }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>

                            {/* Card Body */}
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </div>
                                <Button className="mt-3 services-btns" onClick={() => handleReserveClick(item)}>
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
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" name="fullName" className="form-control" id="name" />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" name="email" className="form-control" id="email" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input type="text" name="phoneNumber" className="form-control" id="phoneNumber" />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label htmlFor="guests" className="form-label">No of Guests</label>
                                    <input type="number" name="guests" className="form-control" id="guests" />
                                </div>
                            </Col>
                        </Row>
                        <input type="text" name="tableTitle" value={selectedOption?.title} readOnly hidden />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="cancel-btns border-0 px-4 py-2" onClick={handleClose}>Cancel</Button>
                        <Button type="submit" className="confirm-btns border-0 px-4 py-2">Confirm</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default DiningAndNightlife;
