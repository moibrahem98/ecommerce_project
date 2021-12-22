import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../slide1.jpg";
export default function CarouselSlider() {
  return (
    <Carousel indicators={false} className="main_slider">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src={slide1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src={slide1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
