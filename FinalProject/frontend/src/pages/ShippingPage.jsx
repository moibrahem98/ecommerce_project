import React, { useState, useEffect } from "react";
import { Form, Button ,Container,Row,Col} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

function ShippingScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [telephoneNumber, setTelephoneNumber] = useState(
    shippingAddress.telephoneNumber
  );
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submlt");
    dispatch(saveShippingAddress({ address, city, telephoneNumber, country }));
    history.push("/payment");
  };

  return (
    <Container>
    <CheckoutSteps step1 step2 />
    <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
    <h1 className=" text-succes mt-1 p-1 text-center ">Shipping</h1>
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter address"
          value={address ? address : ""}
          onChange={(e) => setAddress(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter city"
          value={city ? city : ""}
          onChange={(e) => setCity(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="telephoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter Phone Number"
          value={telephoneNumber ? telephoneNumber : ""}
          onChange={(e) => setTelephoneNumber(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Government</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter country"
          value={country ? country : ""}
          onChange={(e) => setCountry(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type="submit" variant="dark" className="w-100 text-success btn_color">
        Continue
      </Button>
    </Form>
    </Col>
      </Row>
  </Container>

  );
}

export default ShippingScreen;
