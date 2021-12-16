import React, { useState, useEffect } from "react";
import { Col, Row, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function OrderScreen({ match }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;
  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  }

  //   if (!cart.paymentMethod) {
  //     history.push("/payment");
  //   }

  useEffect(() => {
    if (!order || order._id !== Number(orderId)) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId]);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Message variant="danger">{error}</Message>;
  } else {
    return (
      <div>
        <Message variant="success">
          <p>order is placed &#10004; </p>
        </Message>
        <Row>
          <Col md={8}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Shipping Address</h2>
                  <p>
                    <strong>Name:</strong>
                    {order.user.name}
                  </p>
                  <p>
                    {order.shippingAddress.address} ,{" "}
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country} , Egypt.
                  </p>
                  {order.isDeliverd ? (
                    <Message variant="success">
                      Deliverd at {order.deliverdAt}
                    </Message>
                  ) : (
                    <Message variant="warning">Not Deliverd</Message>
                  )}
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  <p>Method: {order.payment_method}</p>

                  {order.is_paid ? (
                    <Message variant="success">Paid at {order.paid_at}</Message>
                  ) : (
                    <Message variant="warning">Not Paid</Message>
                  )}
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Items</h2>
                  {order.orderItems.length === 0 ? (
                    <Message variant="info">Your order Is Empty</Message>
                  ) : (
                    <ListGroup variant="flush">
                      {order.orderItems.map((item, index) => (
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
                              {item.quantity} X {item.price} L.E ={" "}
                              {(item.quantity * item.price).toFixed(2)} L.E
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
                  <Col>{order.itemsPrice} L.E</Col>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>Shipping:</Col>
                  <Col>{order.shipping_price} L.E</Col>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>Total:</Col>
                  <Col>{order.total_price} L.E</Col>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderScreen;
