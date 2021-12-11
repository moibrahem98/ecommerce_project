import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";

export const Photoslider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-center ">
          {" "}
          <img
            className="w-100 "
            src="https://images.unsplash.com/photo-1588514912908-8f5891714f8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3 style={{ color: "white", fontWeight: "bold" }}>Perfume</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center h-100px">
          <img
            className="w-100 "
            src="https://images.unsplash.com/photo-1595535373192-fc8935bacd89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3 style={{ color: "white", fontWeight: "bold" }}>Chanel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center h-100px">
          <img
            className="w-100 "
            src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3 style={{ color: " #0c1f40", fontWeight: "bold" }}>
            Blue de Chanel{" "}
          </h3>
          <p style={{ color: " #0c1f40", fontWeight: "bold" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
