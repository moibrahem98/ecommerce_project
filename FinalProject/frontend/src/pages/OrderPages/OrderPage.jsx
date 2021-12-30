import React, { useState, useEffect } from "react";
import { Col, Row, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getOrderDetails,
  deliverOrder,
  payOrder,
} from "../../actions/orderActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import axios from "axios";

function OrderPage({ match }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  }

  const [paymob, setPaymob] = useState("");

  useEffect(() => {
    // const getData = (orderId) => async () => {
    //   await axios
    //     .get(`/order/api/payment/${orderId}/`)
    //     .then((res) => {
    //       setPaymob(res.data);
    //       console.log(res);
    //       console.log('paymob');
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    if (
      !order ||
      order._id !== Number(orderId) ||
      successDeliver ||
      successPay
    ) {
      dispatch({ type: "ORDER_PAY_RESET" });
      dispatch({ type: "ORDER_DELIVER_RESET" });
      dispatch(getOrderDetails(orderId));
      // dispatch(getData(orderId));
    }
  }, [dispatch, order, orderId, successPay, successDeliver]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  const payHandler = () => {
    dispatch(payOrder(order));
  };
  console.log(paymob, "paypaupaupauaaopdaodas");

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Message variant="danger">{error}</Message>;
  } else {
    return (
      <div className="py-5">
        <Message variant="success">
          <p> order placed successfully &#10004; </p>
        </Message>
        <Row>
          <Col md={8}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Shipping Address</h2>
                  <p>
                    <span>Name: </span>
                    {order.user.name}
                  </p>
                  <p>Phone Number: {order.shippingAddress.telephone_number}</p>
                  <p>
                    {order.shippingAddress.address} ,{" "}
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country} , Egypt.
                  </p>
                  {order.is_delivered ? (
                    <Message variant="success">
                      Deliverd at {order.delivered_at.substring(0, 10)}
                    </Message>
                  ) : (
                    <Message variant="warning">Not Deliverd</Message>
                  )}
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  {order.payment_method === "paymob" ? (
                    <Row>
                      <Col>
                        {" "}
                        {order.payment_method}
                        <br />
                        {/* <button
                          value="Paymob"
                          className="btn disabled text-success btn_color"
                          onclick={window.open(
                            `http://127.0.0.1:8000/order/api/payment/${orderId}/`
                          )}
                        >
                          Paymob
                        </button> */}
                        {/* <Link to='http://127.0.0.1:8000/order/api/payment/${orderId}/'>Paymob</Link> */}
                        <a
                          href={`http://127.0.0.1:8000/order/api/payment/${orderId}/`}
                        >
                          paymob
                        </a>
                      </Col>
                    </Row>
                  ) : (
                    <p>{orderDeliver.payment_method} </p>
                  )}
                  {/* <p>Method: {order.payment_method}</p> */}

                  {order.is_paid ? (
                    <Message variant="success">
                      Paid at {order.paid_at.substring(0, 10)}
                    </Message>
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
                            <Col md={4}>Product Name</Col>
                            <Col className="justify-contnet-center" md={2}>
                              QTY
                            </Col>
                            <Col className="justify-contnet-center" md={2}>
                              Unit Price
                            </Col>
                            <Col className="justify-contnet-center" md={2}>
                              Price
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col md={3}>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={2}>{item.quantity}</Col>
                            <Col md={2}>{item.price} L.E </Col>
                            <Col md={2}>
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
            <Card className=" shadow rounded-sm">
              <ListGroup variant="secondary">
                <ListGroup.Item>
                  <h2>Total</h2>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>Sub-Total:</Col>
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
              {userInfo && order.is_paid && order.is_delivered && (
                <ListGroup.Item>
                  <Link
                    variant="dark"
                    className="btn btn-block text-success btn_color"
                    to="/createreturn"
                  >
                    File Return Request{" "}
                  </Link>
                </ListGroup.Item>
              )}
              {userInfo && userInfo.isAdmin && !order.is_paid && (
                <ListGroup.Item>
                  <Button
                    variant="dark"
                    type="button"
                    className="btn btn-block text-success btn_color"
                    onClick={payHandler}
                  >
                    Mark As Paid
                  </Button>
                </ListGroup.Item>
              )}
              {userInfo && userInfo.isAdmin && !order.is_delivered && (
                <ListGroup.Item>
                  <Button
                    variant="dark"
                    type="button"
                    className="btn btn-block btn_color"
                    onClick={deliverHandler}
                  >
                    Mark As Delivered
                  </Button>
                </ListGroup.Item>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderPage;