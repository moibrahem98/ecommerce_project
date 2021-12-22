import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-bootstrap";
import slide1 from "../hair.png";
import slide2 from "../makeup.png";
import slide3 from "../body.jpg";
import slide4 from "../perfume.png";
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
          <h4 className="text-center mt-2" style={{ color: "#418993" }}>
            Shop BodyCare
          </h4>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <img
            className="d-block w-100 carousel_img"
            src={slide2}
            alt="Second slide"
          />
          <h4 className="text-center mt-2" style={{ color: "#418993" }}>
            Shop Makeup
          </h4>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <img
            className="d-block w-100 carousel_img"
            src={slide3}
            alt="Third slide"
          />
          <h4 className="text-center mt-2" style={{ color: "#418993" }}>
            Shop SkinCare
          </h4>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <img
            className="d-block w-100 carousel_img"
            src={slide4}
            alt="Fourth slide"
          />

          <h4 className="text-center mt-2" style={{ color: "#418993" }}>
            Shop Perfume
          </h4>
        </Col>
      </Row>
    </>
  );
}
