import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../components/CheckoutSteps";
import { saveShippingAddress } from "../../redux/actions/cartActions";

function ShippingPage({ history }) {
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
    console.log("submit");
    dispatch(saveShippingAddress({ address, city, telephoneNumber, country }));
    history.push("/payment");
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <Row className="mt-5 text-right">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <h1 className=" text-succes mt-1 p-1 text-center ">تفاصيل الشحن</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="address">
              <Form.Label>عنوان</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ادخل العنوان"
                value={address ? address : ""}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>مدينه</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ادخل المدينه"
                value={city ? city : ""}
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="telephoneNumber">
              <Form.Label>رقم التليفون</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ادخل رقم التليفون"
                value={telephoneNumber ? telephoneNumber : ""}
                onChange={(e) => setTelephoneNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>محافظه</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ادخل اسم المحافظه"
                value={country ? country : ""}
                onChange={(e) => setCountry(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="dark"
              className="w-100 text-success btn_color"
            >
              متابعه
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ShippingPage;
