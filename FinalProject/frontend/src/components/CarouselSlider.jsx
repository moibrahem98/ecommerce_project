import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../images/1.jpg";
import slide2 from "../images/2.jpg";
import slide3 from "../images/3.jpg";
import slide4 from "../images/4.jpg";

export default function CarouselSlider() {
  return (
    <Carousel
      indicators={false}
      className="main_slider"
      style={{ marginTop: "-25px" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img_main"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img_main"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img_main"
          src={slide3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img_main"
          src={slide4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
