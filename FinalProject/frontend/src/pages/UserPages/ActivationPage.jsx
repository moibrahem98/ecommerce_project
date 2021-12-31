import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ActivationPage() {
  return (
    <Container style={{ marginTop: "150px" }}>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <h3 className=" text-success mt-1 p-1 text-center ">
            Please Activate Your Email Then Login
          </h3>{" "}
          <Link to={"/"} className="btn btn_color btn-block">
            Head To Home Page
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivationPage;
