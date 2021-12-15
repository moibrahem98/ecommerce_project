import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  ListGroup,
  Image,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
function PlaceOrderScreen() {
  const cart = useSelector((state) => state.cart);

  cart.itemsPrice = cart.cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  // cart.shippingPrice = cart.itemsPrice > 500 ? 0 : 50;
  if (cart.itemsPrice > 500) {
    (cart.shippingPrice = 0).toFixed(2);
  } else {
    (cart.shippingPrice = 50).toFixed(2);
  }

  cart.totalPrice = Number(cart.shippingPrice + cart.itemsPrice).toFixed(2);
  const placeOrder = () => {
    console.log("place order");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Row>
        <Col md={8}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping Address</h2>
                <p>
                  {cart.shippingAddress.address} , {cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.country} , Egypt.
                </p>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>Method: {cart.paymentMethod}</p>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Items</h2>
                {cart.cartItems.length === 0 ? (
                  <Message variant="info">Your Cart Is Empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col>
                            {item.qty} X {item.price} L.E ={" "}
                            {(item.qty * item.price).toFixed(2)} L.E
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>Items:</Col>
                <Col>{cart.itemsPrice} L.E</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>Shipping:</Col>
                <Col>{cart.shippingPrice} L.E</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>Total:</Col>
                <Col>{cart.totalPrice} L.E</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disapled={cart.cartItems === 0}
                  onClick={placeOrder}
                >
                  Place Ordrer
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlaceOrderScreen;
