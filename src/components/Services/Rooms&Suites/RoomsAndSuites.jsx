// components/RoomsAndSuites.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Card, Button, Modal, Carousel, Row, Col } from "react-bootstrap";

// Import images
import DuplexImg from "../../../Assets/images/duplex.jpeg";
import duplex1 from "../../../Assets/images/duplex-1.jpeg";
import duplex2 from "../../../Assets/images/duplex-2.jpeg";
import duplex3 from "../../../Assets/images/duplex-3.jpeg";
import duplex4 from "../../../Assets/images/duplex-4.jpeg";
import duplex5 from "../../../Assets/images/duplex-5.jpeg";
import duplex6 from "../../../Assets/images/duplex-6.jpeg";
import duplex7 from "../../../Assets/images/duplex-7.jpeg";
import duplex8 from "../../../Assets/images/duplex-8.jpeg";
import duplex9 from "../../../Assets/images/duplex-9.jpeg";
import duplex10 from "../../../Assets/images/duplex-10.jpeg";
import OneBedroomImg from "../../../Assets/images/one bedroom.jpeg";
import SignatureImg from "../../../Assets/images/signature suite.jpeg";
import ThreeBedroomImg from "../../../Assets/images/three bedroom.jpeg";
import StudioImg from "../../../Assets/images/studio apartment.jpeg";

function RoomsAndSuites() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Auto scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Rooms data with multiple images per room
  const rooms = [
    {
      id: 1,
      title: "The Duplex",
      description: "A private luxury haven for small groups or families.",
      images: [duplex1, duplex2, duplex3, duplex4, duplex5, duplex6, duplex7, duplex8, duplex9, duplex10], // add more variations if you have
    },
    {
      id: 2,
      title: "One-Bedroom Suites",
      description: "Sleek and modern, perfect for business or leisure.",
      images: [OneBedroomImg, OneBedroomImg, OneBedroomImg],
    },
    {
      id: 3,
      title: "The Signature Suite",
      description: "Indulgence redefined with premium amenities.",
      images: [SignatureImg, SignatureImg, SignatureImg],
    },
    {
      id: 4,
      title: "Three-Bedroom Apartment",
      description: "Spacious living for the ultimate getaway.",
      images: [ThreeBedroomImg, ThreeBedroomImg, ThreeBedroomImg],
    },
    {
      id: 5,
      title: "Studios",
      description: "Compact, stylish, and convenient.",
      images: [StudioImg, StudioImg, StudioImg],
    },
  ];

  // Handle booking modal open
  const handleBookClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  // Handle booking modal close
  const handleClose = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  // Handle EmailJS submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bp4xet8", // ✅ replace with your EmailJS service ID
        "template_8ya3yza", // ✅ replace with your EmailJS template ID
        e.target,
        "4yNmsWromdVAb4a_2" // ✅ replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("✅ Success:", result.text);
          setShowModal(false); // close modal on success
        },
        (error) => {
          console.error("❌ Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="container mt-5 py-3">
      <h1 className="text-center mt-5 py-3">Rooms & Suites</h1>

      <div className="row">
        {rooms.map((room) => (
          <div key={room.id} className="col-md-4 mb-4">
            <Card className="shadow-sm h-100">
              {/* Room Carousel */}
              <Carousel>
                {room.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <Card.Img
                      variant="top"
                      src={img}
                      height={200}
                      style={{ objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{room.title}</Card.Title>
                  <Card.Text>{room.description}</Card.Text>
                </div>
                <Button
                  className="mt-3 services-btns"
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
              <Col>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
              </Col>
              <Col>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="form-control"
                    id="phoneNumber"
                    required
                  />
                </div>
              </Col>
              <Col>
                <div className="mb-3">
                  <label htmlFor="guests" className="form-label">
                    No of Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    className="form-control"
                    id="guests"
                    required
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="mb-3">
                  <label htmlFor="checkin" className="form-label">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    className="form-control"
                    id="checkin"
                    required
                  />
                </div>
              </Col>
              <Col>
                <div className="mb-3">
                  <label htmlFor="checkout" className="form-label">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    className="form-control"
                    id="checkout"
                    required
                  />
                </div>
              </Col>
            </Row>

            {/* Hidden field for selected room */}
            <input
              type="text"
              name="roomTitle"
              value={selectedRoom?.title}
              readOnly
              hidden
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="bg-black text-color-2 border-0 px-4 py-2"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-color-1 text-color-1 border-0 px-4 py-2"
            >
              Confirm
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default RoomsAndSuites;
