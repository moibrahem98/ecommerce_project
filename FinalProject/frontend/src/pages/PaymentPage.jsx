import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delievery");
  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Cash on Delievery"
              id="cod" // cod is cash on delievery
              name="paymentMethod"
              checked
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
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
