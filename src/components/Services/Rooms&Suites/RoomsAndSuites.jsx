// components/RoomsAndSuites.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Card, Button, Modal } from "react-bootstrap";
import DuplexImg from "../../../Assets/images/duplex.jpeg";
import OneBedroomImg from "../../../Assets/images/one bedroom.jpeg";
import SignatureImg from "../../../Assets/images/signature suite.jpeg";
import ThreeBedroomImg from "../../../Assets/images/three bedroom.jpeg";
import StudioImg from "../../../Assets/images/studio apartment.jpeg";
import { Row, Col } from "react-bootstrap";

function RoomsAndSuites() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9j7lzc",   // replace with your EmailJS service ID
        "template_8ya3yza",  // replace with your EmailJS template ID
        e.target,            // no casting needed in JS
        "4yNmsWromdVAb4a_2"    // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Booking request sent!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Something went wrong.");
        }
      );
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      title: "The Duplex",
      description: "A private luxury haven for small groups or families.",
      image: DuplexImg,
    },
    {
      id: 2,
      title: "One-Bedroom Suites",
      description: "Sleek and modern, perfect for business or leisure.",
      image: OneBedroomImg,
    },
    {
      id: 3,
      title: "The Signature Suite",
      description: "Indulgence redefined with premium amenities.",
      image: SignatureImg,
    },
    {
      id: 4,
      title: "Three-Bedroom Apartment",
      description: "Spacious living for the ultimate getaway.",
      image: ThreeBedroomImg,
    },
    {
      id: 5,
      title: "Studios",
      description: "Compact, stylish, and convenient.",
      image: StudioImg,
    },
  ];

  const handleBookClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <div className="container mt-5 py-3">
      <h1 className="text-center mt-5 py-3">Rooms & Suites</h1>
      <div className="row">
        {rooms.map((room) => (
          <div key={room.id} className="col-md-4 mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={room.image} height={200} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{room.title}</Card.Title>
                  <Card.Text>{room.description}</Card.Text>
                </div>
                <Button
                  className="mt-3 services-btns "
                  onClick={() => handleBookClick(room)}
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={handleClose} centered className="p-5">
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedRoom?.title}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>

          <Modal.Body>
            <Row>
              <Col>   <div className="mb-3">
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
                  <input type="number" name="phoneNumber" className="form-control" id="phoneNumber" />
                </div>
              </Col>
              <Col>  <div className="mb-3">
                <label htmlFor="guests" className="form-label">
                  No of Guests
                </label>
                <input type="number" name="guests" className="form-control" id="guests" />
              </div>
              </Col>
            </Row>
            <Row>
              <Col>   <div className="mb-3">
                <label htmlFor="checkin" className="form-label">
                  Check-in Date
                </label>
                <input type="date" name="checkin" className="form-control" id="checkin" />
              </div></Col>
              <Col>    <div className="mb-3">
                <label htmlFor="checkout" className="form-label">
                  Check-out Date
                </label>
                <input type="date" name="checkout" className="form-control" id="checkout" />
              </div></Col>
              <input type="hidden" name="roomTitle" value={selectedRoom?.title} />

            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button className="bg-black text-color-2 border-0" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-color-1 text-color-1 border-0">
              Confirm
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default RoomsAndSuites;
