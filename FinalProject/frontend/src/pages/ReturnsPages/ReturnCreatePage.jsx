import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createReturn } from "../../redux/actions/productActions";

function ReturnCreatePage({ location, history }) {
  const [title, setTitle] = useState("");
  const [productname, setProductName] = useState("");
  const [issue, setIssue] = useState("");
  const [ordernumber, setOrderNumber] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const dispatch = useDispatch();
  const returnCreate = useSelector((state) => state.returnCreate);
  const { success: successCreate } = returnCreate;
  if (successCreate) {
    dispatch({ type: "RETURN_CREATE_RESET" });
    history.push("/myreturns");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createReturn(title, productname, issue, ordernumber, phonenumber));
  };

  return (
    <Container>
      <Row className="my-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <h3 className=" text-success mt-1 p-1 text-center ">
            File Return Request
          </h3>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Complain"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="phonenumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Complain"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="productname">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Product Name"
                value={productname}
                onChange={(e) => setProductName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="ordernumber">
              <Form.Label> Order Number</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter Order Number"
                min="0"
                value={ordernumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="issue">
              <Form.Label>Details</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Enter Details"
                min="0"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="dark"
              className="w-100 text-success btn_color"
            >
              File Return
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ReturnCreatePage;
