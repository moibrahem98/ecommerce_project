import React, { useState, useEffect } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps";
import { savePaymentMethod } from "../../redux/actions/cartActions";
import axios from "axios";

function PaymentPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 step3 />
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <h1 className=" text-succes mt-1 p-1 text-center ">
                إختار وسيلة الدفع
              </h1>
              <hr></hr>
              <Col>
                <Form.Check
                  type="radio"
                  label="الدفع عند الاستلام"
                  id="cod" // cod is cash on delievery
                  name="paymentMethod"
                  value="Cash on Delievery"
                  style={{ padding: "5px", margin: "5px", direction: "ltr" }}
                  onChange={(event) => {
                    setPaymentMethod(event.target.value);
                  }}
                ></Form.Check>
              </Col>
            </Form.Group>

            <br></br>
            <Button
              type="submit"
              variant="dark"
              className="w-100 text-success btn_color"
            >
              متابعة{" "}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;
