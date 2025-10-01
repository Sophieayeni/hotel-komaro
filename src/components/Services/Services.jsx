import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"; // or "@emailjs/browser"
import Lounge from "../../Assets/images/hotel lounge.jpeg";
import Dining from "../../Assets/images/hotel dining.jpeg";
import Room from "../../Assets/images/Hotel room.jpeg";
import Spa from "../../Assets/images/Hotel spa.jpeg";

function Services() {
    const navigate = useNavigate();

    // State for modals
    const [showEventModal, setShowEventModal] = useState(false);
    const [showLessonModal, setShowLessonModal] = useState(false);

    const handleCloseEventModal = () => setShowEventModal(false);
    const handleOpenEventModal = () => setShowEventModal(true);

    const handleCloseLessonModal = () => setShowLessonModal(false);
    const handleOpenLessonModal = () => setShowLessonModal(true);

    // Event form submit
    const handleEventSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_zpz27eh",
                "template_59434ni",
                e.target,
                "oPO7mCPAnNyeOEUKL"
            )
            .then(
                (result) => {
                    console.log("✅ Success:", result.text);
                    setShowEventModal(false);
                },
                (error) => {
                    console.error("❌ Error:", error.text);
                    alert("Something went wrong.");
                }
            );
    };

    // Swimming lesson form submit
    const handleLessonSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_zpz27eh",   // replace with your EmailJS service ID
                "template_v4xo9js",   // replace with your lesson template ID
                e.target,
                "oPO7mCPAnNyeOEUKL"  // your public key
            )
            .then(
                (result) => {
                    console.log("✅ Success:", result.text);
                    setShowLessonModal(false);
                },
                (error) => {
                    console.error("❌ Error:", error.text);
                    alert("Something went wrong.");
                }
            );
    };

    return (
        <div>
            <h1 className="text-center my-5 fw-bold text-color-1">Our Services</h1>

            {/* First row of service cards */}
            <Row className="mx-5 text-center">
                <Col xs={12} md={6} className="mb-4">
                    <Card className="custom-card text-white border-0">
                        <div className="card-bg">
                            <img src={Room} alt="Card background" className="card-img" />
                        </div>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                            <div className="button-container">
                                <Button
                                    className="services-btns"
                                    onClick={() => {
                                        navigate("/rooms-and-suites");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Book a Room
                                </Button>
                            </div>
                            <div className="text-start bottom-text mt-5">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">
                                    Luxury Rooms & Suites
                                </Card.Title>
                                <Card.Text className="mt-2 text-color-2">
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
                                <Button
                                    className="services-btns"
                                    onClick={() => {
                                        navigate("/dining-and-nightlife");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Reserve Table
                                </Button>
                            </div>
                            <div className="text-start bottom-text mt-5">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">
                                    Dining & Nightlife
                                </Card.Title>
                                <Card.Text className="mt-2 text-color-2">
                                    Enjoy gourmet meals prepared by top chefs in elegant settings.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            {/* Second row of service cards */}
            <Row className="mx-5 text-center">
                <Col xs={12} md={6} className="mb-4">
                    <Card className="custom-card text-white border-0">
                        <div className="card-bg">
                            <img src={Spa} alt="Card background" className="card-img" />
                        </div>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                            <div className="button-container">
                                <Button className="services-btns" onClick={handleOpenLessonModal}>
                                    Join Lessons
                                </Button>
                            </div>
                            <div className="text-start bottom-text mt-5">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">
                                    Swimming Pool & Lessons
                                </Card.Title>
                                <Card.Text className="mt-2 text-color-2">
                                    Dive into relaxation or learn to swim with professional instructors in
                                    our modern pool.
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
                                <Button className="services-btns" onClick={handleOpenEventModal}>
                                    Plan Event
                                </Button>
                            </div>
                            <div className="text-start bottom-text mt-5">
                                <Card.Title className="fw-bold mt-3 text-color-3 fs-3">
                                    Events & Experiences
                                </Card.Title>
                                <Card.Text className="mt-2 text-color-2">
                                    Host weddings, conferences, and events in our grand halls.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            {/* Join Lessons Modal */}
            <Modal show={showLessonModal} onHide={handleCloseLessonModal} centered className="p-5">
                <Modal.Header closeButton>
                    <Modal.Title>Join Swimming Lessons</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleLessonSubmit}>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="fullName" className="form-control" required />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" required />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" name="phoneNumber" className="form-control" required />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Lesson Type</label>
                                    <select name="lessonType" className="form-control" required>
                                        <option value="">Select Lesson Type</option>
                                        <option value="Private">Private Lesson</option>
                                        <option value="Group">Group Lesson</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="bg-black text-color-2 border-0 px-4 py-2" onClick={handleCloseLessonModal}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-color-1 text-color-1 border-0 px-4 py-2">
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* Plan Event Modal */}
            <Modal show={showEventModal} onHide={handleCloseEventModal} centered className="p-5">
                <Modal.Header closeButton>
                    <Modal.Title>Plan Your Event</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleEventSubmit}>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="fullName" className="form-control" required />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" required />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" name="phoneNumber" className="form-control" required />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="date" name="date" className="form-control" required />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Occasion</label>
                                    <select name="occasion" className="form-control" required>
                                        <option value="">Select Occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Listening Party">Listening Party</option>
                                        <option value="Launch">Launch</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3">
                                    <label className="form-label">Location</label>
                                    <select name="location" className="form-control" required>
                                        <option value="">Select Location</option>
                                        <option value="Restaurant">Restaurant</option>
                                        <option value="Lounge">Lounge</option>
                                        <option value="Club">Club</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="bg-black text-color-2 border-0 px-4 py-2" onClick={handleCloseEventModal}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-color-1 text-color-1 border-0 px-4 py-2">
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default Services;
