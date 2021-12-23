import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";
import axios from "axios";

function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");
  // const [paymob, setPaymob] = useState("");
  // const paymobFunction = useEffect(() => {
  //   const getData = async () => {
  //     await axios
  //       .get("/order/api/orders/payment/")
  //       .then((res) => {
  //         setPaymob(res.data);
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getData();

  // }, []);

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
              value="Cash on Delievery"
              onChange={(event) => {
                setPaymentMethod(event.target.value);
              }}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Paymob"
              id="paymob"
              value="paymob"
              name="paymentMethod"
              onChange={(event) => {
                setPaymentMethod(event.target.value);
              }}
            ></Form.Check>
          </Col>
        </Form.Group>
        {/* <input
          type="button"
          value="Paymob"
          className="btn text-success btn_color"
          onclick={window.open(
            "http://127.0.0.1:8000/order/api/orders/payment/"
          )}
        /> */}

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
