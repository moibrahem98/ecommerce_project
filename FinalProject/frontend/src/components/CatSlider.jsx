import React from "react";
import { Row, Col } from "react-bootstrap";
import slide1 from "../images/cat1.jpg";
import slide2 from "../images/cat2.jpg";
import slide3 from "../images/cat3.jpg";
import slide4 from "../images/cat4.jpg";
export default function CarouselSlider() {
  return (
    <>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <img
            className="d-block w-100 carousel_img"
            src={slide1}
            alt="First slide"
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <img
            className="d-block w-100 carousel_img"
            src={slide2}
            alt="Second slide"
          />
        </Col>

        <Col xs={12} md={6} lg={3}>
          <img
            className="d-block w-100 carousel_img"
            src={slide3}
            alt="Third slide"
          />
        </Col>

        <Col xs={12} md={6} lg={3}>
          <img
            className="d-block w-100 carousel_img"
            src={slide4}
            alt="Fourth slide"
          />
        </Col>
      </Row>
    </>
  );
}
