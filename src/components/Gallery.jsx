import React, { useState } from "react";
import { Card, Row, Col, Pagination } from "react-bootstrap";

// Import all images
import studio1 from "../Assets/images/studio-1.JPG";
import studio2 from "../Assets/images/studio-2.JPG";
import studio3 from "../Assets/images/studio-3.JPG";
import studio4 from "../Assets/images/studio-4.JPG";
import studio5 from "../Assets/images/studio-5.JPG";
import studio6 from "../Assets/images/studio-6.JPG";
import studio7 from "../Assets/images/studio-7.JPG";
import studio8 from "../Assets/images/studio-8.JPG";
import threebed1 from "../Assets/images/3-bed-1.JPG";
import threebed2 from "../Assets/images/3-bed-2.JPG";
import threebed3 from "../Assets/images/3-bed-3.JPG";
import threebed4 from "../Assets/images/3-bed-4.JPG";
import threebed5 from "../Assets/images/3-bed-5.JPG";
import threebed6 from "../Assets/images/3-bed-6.JPG";
import threebed7 from "../Assets/images/3-bed-7.JPG";
import threebed8 from "../Assets/images/3-bed-8.JPG";
import threebed9 from "../Assets/images/3-bed-9.JPG";
import threebed10 from "../Assets/images/3-bed-10.JPG";
import duplex1 from "../Assets/images/duplex-1.JPG";
import duplex2 from "../Assets/images/duplex-2.JPG";
import duplex3 from "../Assets/images/duplex-3.JPG";
import duplex4 from "../Assets/images/duplex-4.JPG";
import duplex5 from "../Assets/images/duplex-5.JPG";
import duplex6 from "../Assets/images/duplex-6.JPG";
import duplex7 from "../Assets/images/duplex-7.JPG";
import duplex8 from "../Assets/images/duplex-8.JPG";
import duplex9 from "../Assets/images/duplex-9.JPG";
import duplex10 from "../Assets/images/duplex-10.JPG";
import onebed1 from "../Assets/images/1-bed-1.JPG";
import onebed2 from "../Assets/images/1-bed-2.JPG";
import onebed3 from "../Assets/images/1-bed-3.JPG";
import onebed4 from "../Assets/images/1-bed-4.JPG";
import onebed5 from "../Assets/images/1-bed-5.JPG";
import onebed6 from "../Assets/images/1-bed-6.JPG";
import onebed7 from "../Assets/images/1-bed-7.JPG";
import onebed8 from "../Assets/images/1-bed-8.JPG";
import onebed9 from "../Assets/images/1-bed-9.JPG";
import onebed10 from "../Assets/images/1-bed-10.JPG";
import suite1 from "../Assets/images/suite-1.JPG";
import suite2 from "../Assets/images/suite-2.JPG";
import suite3 from "../Assets/images/suite-3.JPG";
import suite4 from "../Assets/images/suite-4.JPG";
import suite5 from "../Assets/images/suite-5.JPG";
import suite6 from "../Assets/images/suite-6.JPG";

function Gallery() {
    const images = [
        studio1, studio2, studio3, studio4, studio5, studio6, studio7, studio8,
        threebed1, threebed2, threebed3, threebed4, threebed5, threebed6, threebed7, threebed8, threebed9, threebed10,
        duplex1, duplex2, duplex3, duplex4, duplex5, duplex6, duplex7, duplex8, duplex9, duplex10,
        onebed1, onebed2, onebed3, onebed4, onebed5, onebed6, onebed7, onebed8, onebed9, onebed10,
        suite1, suite2, suite3, suite4, suite5, suite6
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 20; // 5 rows * 4 per row

    // Pagination logic
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const totalPages = Math.ceil(images.length / imagesPerPage);

    return (
        <div className="container mt-5 py-3">
            <h1 className="text-center mt-5 py-3">Gallery</h1>

            <Row>
                {currentImages.map((img, idx) => (
                    <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Img
                                variant="top"
                                src={img}
                                alt={`Gallery image ${idx + 1}`}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4">
                <Pagination className="custom-pagination">
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>

        </div>
    );
}

export default Gallery;