import React, { useState, useEffect } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
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
    <Container>
      <CheckoutSteps step1 step2 step3 />
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <h1 className=" text-succes mt-1 p-1 text-center ">
                Select Payment Method
              </h1>
              <hr></hr>
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
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentScreen;
