import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../slide1.jpg";
import slide2 from "../slide2.webp";
import slide4 from "../slide4.jpg";

export default function CarouselSlider() {
  return (
    <Carousel
      indicators={false}
      className="main_slider"
      style={{ marginTop: "-25px" }}
    >
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
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src={slide4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
