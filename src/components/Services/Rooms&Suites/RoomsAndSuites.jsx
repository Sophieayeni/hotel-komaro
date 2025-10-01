// components/RoomsAndSuites.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Card, Button, Modal, Carousel, Row, Col } from "react-bootstrap";

// Import images
import duplex1 from "../../../Assets/images/duplex-1.JPG";
import duplex2 from "../../../Assets/images/duplex-2.JPG";
import duplex3 from "../../../Assets/images/duplex-3.JPG";
import duplex4 from "../../../Assets/images/duplex-4.JPG";
import duplex5 from "../../../Assets/images/duplex-5.JPG";
import duplex6 from "../../../Assets/images/duplex-6.JPG";
import duplex7 from "../../../Assets/images/duplex-7.JPG";
import duplex8 from "../../../Assets/images/duplex-8.JPG";
import duplex9 from "../../../Assets/images/duplex-9.JPG";
import duplex10 from "../../../Assets/images/duplex-10.JPG";
import onebed1 from "../../../Assets/images/1-bed-1.JPG";
import onebed2 from "../../../Assets/images/1-bed-2.JPG";
import onebed3 from "../../../Assets/images/1-bed-3.JPG";
import onebed4 from "../../../Assets/images/1-bed-4.JPG";
import onebed5 from "../../../Assets/images/1-bed-5.JPG";
import onebed6 from "../../../Assets/images/1-bed-6.JPG";
import onebed7 from "../../../Assets/images/1-bed-7.JPG";
import onebed8 from "../../../Assets/images/1-bed-8.JPG";
import onebed9 from "../../../Assets/images/1-bed-9.JPG";
import onebed10 from "../../../Assets/images/1-bed-10.JPG";
import suite1 from "../../../Assets/images/suite-1.JPG";
import suite2 from "../../../Assets/images/suite-2.JPG";
import suite3 from "../../../Assets/images/suite-3.JPG";
import suite4 from "../../../Assets/images/suite-4.JPG";
import suite5 from "../../../Assets/images/suite-5.JPG";
import suite6 from "../../../Assets/images/suite-6.JPG";
import threebed1 from "../../../Assets/images/3-bed-1.JPG";
import threebed2 from "../../../Assets/images/3-bed-2.JPG";
import threebed3 from "../../../Assets/images/3-bed-3.JPG";
import threebed4 from "../../../Assets/images/3-bed-4.JPG";
import threebed5 from "../../../Assets/images/3-bed-5.JPG";
import threebed6 from "../../../Assets/images/3-bed-6.JPG";
import threebed7 from "../../../Assets/images/3-bed-7.JPG";
import threebed8 from "../../../Assets/images/3-bed-8.JPG";
import threebed9 from "../../../Assets/images/3-bed-9.JPG";
import threebed10 from "../../../Assets/images/3-bed-10.JPG";
import studio1 from "../../../Assets/images/studio-1.JPG";
import studio2 from "../../../Assets/images/studio-2.JPG";
import studio3 from "../../../Assets/images/studio-3.JPG";
import studio4 from "../../../Assets/images/studio-4.JPG";
import studio5 from "../../../Assets/images/studio-5.JPG";
import studio6 from "../../../Assets/images/studio-6.JPG";
import studio7 from "../../../Assets/images/studio-7.JPG";
import studio8 from "../../../Assets/images/studio-8.JPG";

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
      images: [onebed1, onebed2, onebed3, onebed4, onebed5, onebed6, onebed7, onebed8, onebed9, onebed10],
    },
    {
      id: 3,
      title: "The Signature Suite",
      description: "Indulgence redefined with premium amenities.",
      images: [suite1, suite2, suite3, suite4, suite5, suite6],
    },
    {
      id: 4,
      title: "Three-Bedroom Apartment",
      description: "Spacious living for the ultimate getaway.",
      images: [threebed1, threebed2, threebed3, threebed4, threebed5, threebed6, threebed7, threebed8, threebed9, threebed10],
    },
    {
      id: 5,
      title: "Studios",
      description: "Compact, stylish, and convenient.",
      images: [studio1, studio2, studio3, studio4, studio5, studio6, studio7, studio8],
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
        "service_fn0jkli", // ✅ replace with your EmailJS service ID
        "template_4qb8jw5", // ✅ replace with your EmailJS template ID
        e.target,
        "FCV1rzINVFFPt9J5C" // ✅ replace with your EmailJS public key
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
            <Card className="shadow-sm h-100 position-relative overflow-hidden">
              <div
                className="blur-bg position-absolute w-100"
                style={{
                  top: 0,
                  left: 0,
                  height: "250px", // same as carousel image height
                  backgroundImage: `url(${room.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(15px)",
                  zIndex: 0,
                }}
              ></div>
              <Carousel className="position-relative" style={{ zIndex: 1 }}>
                {room.images.map((img, index) => (
                  <Carousel.Item key={index}>
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
