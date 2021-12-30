import React, { useState, useEffect } from "react";
import { Col, Row, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../../actions/orderActions";
import Message from "../../components/Message";
import CheckoutSteps from "../../components/CheckoutSteps";

function PlaceOrderPage({ history }) {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderCreate;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  cart.itemsPrice = cart.cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  if (cart.itemsPrice > 500) {
    (cart.shippingPrice = 0).toFixed(2);
  } else {
    (cart.shippingPrice = 50).toFixed(2);
  }
  cart.totalPrice = (
    Number(cart.shippingPrice) + Number(cart.itemsPrice)
  ).toFixed(2);

  if (!cart.paymentMethod) {
    history.push("/payment");
  }

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: "ORDER_CREATE_RESET" });
    }
  }, [success, history]);

  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <div className="py-5">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Row>
        <Col md={8}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>Shipping Address: </h4>
                <p>Phone Number: {cart.shippingAddress.telephoneNumber}</p>
                <p>
                  {" "}
                  {cart.shippingAddress.address} , {cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.country} , Egypt.{" "}
                </p>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>Payment Method</h4>
                <p> {cart.paymentMethod}</p>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>Items</h4>
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
          <Card className="shadow rounded-sm">
            <ListGroup variant="secondary">
              <ListGroup.Item>
                <h3> Total</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>ItemsPrice:</Col>
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
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  variant="dark"
                  type="button"
                  className="btn text-success w-100 btn_color"
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

export default PlaceOrderPage;